import { ListenEvent } from '../../../core/interfaces/listen-event';
import { ExchangeEventData, ExchangeWebhook } from "../../../core/interfaces/exchange-webhook";
import { ExchangeCWebhook } from './exchange-c-webhook';

describe('Exchange Webhook', () => {
  const eventListener: ListenEvent<ExchangeEventData[]> = jest.fn((identifier) => Promise.resolve([{
    cid: identifier,
    f: 1000,
    t: 'NOW',
    v: 5890
  }]));

  let webhook: ExchangeWebhook;

  beforeEach(() => {
    webhook = ExchangeCWebhook(eventListener);
  });

  it('should receive an identifier and listen to an event', async () => {
    const identifier = 'cid-a1b2c3';

    await webhook(identifier);

    expect(eventListener).toBeCalledTimes(1);
    expect(eventListener).toBeCalledWith(identifier);
  });

  it('should return data from event', async () => {
    const identifier = 'cid-b2c3d4';
    const response = await webhook(identifier);

    expect(response.cid).toBe(identifier);
    expect(response.f).toBeTruthy();
    expect(response.t).toBeTruthy();
    expect(response.v).toBeTruthy();
  });
});
