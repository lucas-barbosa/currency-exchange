import axios from "axios";
import { ExchangeService } from "../../../core/interfaces/exchange-service";
import { timeout } from "../../utils/timeout";

type ExchangeResponseData = {
  mood: string;
  cid: string;
  message: string;
};

type ExchangeEventData = {
  cid: string;
  f: number;
  t: string;
  v: number;
};

type ExchangeWebhook = (callbackUrl: string, cid: string) => Promise<ExchangeEventData>;

export class ExchangeC implements ExchangeService {
  constructor(private callbackUrl: string, private webhookSocket: ExchangeWebhook) {}
  
  async getValue(currency: string) {
    if (!currency) {
      throw new Error('Currency can not be empty!');
    }

    const url = `http://localhost:8080/servico-c/cotacao`;

    const { data } = await axios.post<ExchangeResponseData>(url, {
      tipo: currency,
      callback: this.callbackUrl
    });

    const response = await Promise.race([
      this.webhookSocket(this.callbackUrl, data.cid),
      timeout<ExchangeEventData>(5000)
    ]);
    
    const value = response.v / response.f;

    return value;
  }
}
