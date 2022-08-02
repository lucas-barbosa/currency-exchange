import axios from 'axios';
import { ExchangeService } from "../../../core/interfaces/exchange-service";

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
    
    const url = `http://localhost:8080/servico-b/cotacao`;

    const { data } = await axios.get<ExchangeResponseData>(url, {
      params: {
        curr: currency
      }
    });
    
    return parseFloat(data.cotacao.valor);
  };  
}
