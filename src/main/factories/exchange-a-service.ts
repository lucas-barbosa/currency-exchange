import { ExchangeService } from '../../core/interfaces/exchange-service';
import { ExchangeA } from '../../infra/services/exchange-a';

export const makeExchangeAService = (): ExchangeService => new ExchangeA();
