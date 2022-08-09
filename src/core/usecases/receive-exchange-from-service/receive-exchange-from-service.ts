import { EmitEvent } from "../../interfaces/emit-event";
import { ExchangeEventData } from "../../interfaces/exchange-webhook";

export class ReceiveExchangeFromService {
  constructor(private eventEmitter: EmitEvent) {}

  execute({ cid, f, t, v }: ExchangeEventData) {
    this.eventEmitter(cid, {
      cid,
      f,
      t,
      v
    });
  }
}
