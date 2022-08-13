import { ExchangeService } from '../../../core/interfaces/exchange-service';
import { FindBestExchange } from '../../../core/usecases/find-best-exchange';
import { badRequest, ok } from '../../helpers/response';
import { Controller } from '../../protocols/controller';

type FindBestExchangeRequestData = {
  currency: string;
};

export class FindBestExchangeController implements Controller<FindBestExchangeRequestData> {
  private findBestExchange: FindBestExchange;

  constructor(services: ExchangeService[]) {
    this.findBestExchange = new FindBestExchange(services);
  }

  async handle({ currency }: FindBestExchangeRequestData) {
    try {
      const response = await this.findBestExchange.execute(currency);

      return ok({
        cotacao: response.price,
        moeda: response.currency,
        comparativo: response.comparative,
      });
    } catch (err) {
      return badRequest(err as Error);
    }
  }
}
