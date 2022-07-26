import axios from 'axios';
import { ExchangeService } from '../../../core/interfaces/exchange-service';

type ExchangeResponseData = {
  cotacao: {
    fator: number;
    currency: string;
    valor: string;
  }
};

export class ExchangeB implements ExchangeService {
  async getValue(currency: string) {
    if (!currency) {
      throw new Error('Currency can not be empty!');
    }

    const url = process.env.EXCHANGE_B_URL;

    const { data } = await axios.get<ExchangeResponseData>(url, {
      params: {
        curr: currency,
      },
    });

    const value = parseFloat(data.cotacao.valor) / data.cotacao.fator;

    return value;
  }
}
