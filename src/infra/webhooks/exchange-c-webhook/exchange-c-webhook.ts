import { ExchangeEventData, ExchangeWebhook } from '../../../core/interfaces/exchange-webhook';
import { ListenEvent } from '../../../core/interfaces/listen-event';

const ExchangeCWebhook = (eventListener: ListenEvent<ExchangeEventData[]>): ExchangeWebhook => {
  const webhook = async (identifier: string) => {
    const [data] = await eventListener(identifier);
    return data;
  };

  return webhook;
};

export { ExchangeCWebhook };
