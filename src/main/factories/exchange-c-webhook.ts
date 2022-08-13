import { ExchangeCWebhook } from '../../infra/webhooks/exchange-c-webhook';
import { makeListenEvent } from './events';

export const makeExchangeCWebhook = () => ExchangeCWebhook(makeListenEvent());
