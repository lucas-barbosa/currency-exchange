import { ExchangeWebhook } from "../../core/interfaces/exchange-webhook";
import { ExchangeCWebhook } from "../../infra/webhooks/exchange-c-webhook";
import { makeListenEvent } from "./events";

export const makeExchangeCWebhook: () => ExchangeWebhook = () => ExchangeCWebhook(makeListenEvent());
