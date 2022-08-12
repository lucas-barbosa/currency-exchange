import { ExchangeEventData, ExchangeWebhook } from "../../../core/interfaces/exchange-webhook";
import { ListenEvent } from "../../../core/interfaces/listen-event";

export const ExchangeCWebhook = (eventListener: ListenEvent): ExchangeWebhook => async (identifier: string) => {
  const data = await eventListener(identifier);
  return data as ExchangeEventData;
}
