import { EmitEvent } from "../../../core/interfaces/emit-event";
import { ExchangeEventData } from "../../../core/interfaces/exchange-webhook";
import { ReceiveExchangeFromService } from "../../../core/usecases/receive-exchange-from-service";
import { badRequest, noContent, ok } from "../../helpers/response";
import { Controller } from "../../protocols/controller";


export class ReceiveExchangeFromServiceController implements Controller<ExchangeEventData> {
  private receiveExchangeFromService: ReceiveExchangeFromService;

  constructor(eventEmitter: EmitEvent) {
    this.receiveExchangeFromService = new ReceiveExchangeFromService(eventEmitter);
  }

  async handle({ cid, f, t, v }: ExchangeEventData) {
    try {
      this.receiveExchangeFromService.execute({
        cid,
        f,
        t,
        v
      });

      return noContent();
    } catch (err) {
      return badRequest(err as Error);
    }
  }
}
