import { FindBestExchangeController } from '../../presentation/controller/find-best-exchange-controller';
import { makeExchangeAService } from './exchange-a-service';
import { makeExchangeBService } from './exchange-b-service';

export const makeFindBestExchangeController = () => {
  const exchangeA = makeExchangeAService();
  const exchangeB = makeExchangeBService();

  return new FindBestExchangeController([
    exchangeA,
    exchangeB
  ]);
};
