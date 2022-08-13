import { ExchangeService } from "../../core/interfaces/exchange-service";
import { ExchangeC } from "../../infra/services/exchange-c";
import { makeExchangeCWebhook } from "./exchange-c-webhook";

export const makeExchangeCService = (endpoint: string): ExchangeService => {
  return new ExchangeC(`${process.env.SERVER_URL}:${process.env.PORT}/${endpoint}`, makeExchangeCWebhook());
}
