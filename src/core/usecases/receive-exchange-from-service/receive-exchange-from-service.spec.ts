import { EmitEvent } from "../../interfaces/emit-event";
import { ExchangeEventData } from "../../interfaces/exchange-webhook";
import { ReceiveExchangeFromService } from "./receive-exchange-from-service";

describe('Receive Exchange from Service - usecase', () => {
  const eventData: ExchangeEventData = {
    cid: 'a1b2c3d4e5',
    f: 1000,
    t: '2022-08-08',
    v: 5890
  };

  let eventEmitter: EmitEvent;
  let receiveExchangeFromService: ReceiveExchangeFromService;

  beforeAll(() => {
    eventEmitter = jest.fn();
    receiveExchangeFromService = new ReceiveExchangeFromService(eventEmitter);
  });

  it('should receive data as params and emit an event', () => {
    receiveExchangeFromService.execute(eventData);
    expect(eventEmitter).toBeCalledTimes(1);
    expect(eventEmitter).toBeCalledWith(eventData.cid, eventData);
  });
});
