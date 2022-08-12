import { ExchangeService } from "../../core/interfaces/exchange-service";
import { ExchangeC } from "../../infra/services/exchange-c";
import { makeExchangeCWebhook } from "./exchange-c-webhook";

export const makeExchangeCService = (): ExchangeService => {
  return new ExchangeC('http://host.docker.internal:5000/cotacoes', makeExchangeCWebhook());
}
