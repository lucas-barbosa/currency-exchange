import { ExchangeService } from '../../core/interfaces/exchange-service';
import { ExchangeB } from '../../infra/services/exchange-b';

export const makeExchangeBService = (): ExchangeService => new ExchangeB();
