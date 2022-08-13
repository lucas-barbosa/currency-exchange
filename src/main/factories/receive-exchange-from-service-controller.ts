import { ReceiveExchangeFromServiceController } from '../../presentation/controller/receive-exchange-from-service-controller';
import { makeEmitEvent } from './events';

const makeReceiveExchangeFromServiceController = (): ReceiveExchangeFromServiceController => {
  const controller = new ReceiveExchangeFromServiceController(makeEmitEvent());
  return controller;
};

export { makeReceiveExchangeFromServiceController };
