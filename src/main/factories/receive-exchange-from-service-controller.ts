import { ReceiveExchangeFromServiceController } from "../../presentation/controller/receive-exchange-from-service-controller";
import { makeEmitEvent } from "./events";

export const makeReceiveExchangeFromServiceController = (): ReceiveExchangeFromServiceController => {
  return new ReceiveExchangeFromServiceController(makeEmitEvent());
}
