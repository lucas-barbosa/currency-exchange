import { FindBestExchangeController } from '../../presentation/controller/find-best-exchange-controller';
import { makeExchangeAService } from './exchange-a-service';
import { makeExchangeBService } from './exchange-b-service';
import { makeExchangeCService } from './exchange-c-service';

export const makeFindBestExchangeController = () => {
  const exchangeA = makeExchangeAService();
  const exchangeB = makeExchangeBService();
  const exchangeC = makeExchangeCService('cotacoes');

  return new FindBestExchangeController([
    exchangeA,
    exchangeB,
    exchangeC,
  ]);
};
