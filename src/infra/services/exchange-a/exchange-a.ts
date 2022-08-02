import axios from 'axios';
import { ExchangeService } from "../../../core/interfaces/exchange-service";

type ExchangeResponseData = {
  cotacao: number;
  moeda: string;
  symbol: string;
};

export class ExchangeA implements ExchangeService {
  async getValue(currency: string) {
    if (!currency) {
      throw new Error('Currency can not be empty!');
    }
    
    const url = `http://localhost:8080/servico-a/cotacao`;

    const { data } = await axios.get<ExchangeResponseData>(url, {
      params: {
        moeda: currency
      }
    });
    
    return data.cotacao;
  };  
}
