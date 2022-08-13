import { Router } from 'express';
import { routeAdapter } from '../adapter/express-route-adapter';
import { makeFindBestExchangeController } from '../factories';
import { makeReceiveExchangeFromServiceController } from '../factories/receive-exchange-from-service-controller';

const exchangeRoutes = Router();

exchangeRoutes.get('/', routeAdapter(makeFindBestExchangeController()));
exchangeRoutes.post('/', routeAdapter(makeReceiveExchangeFromServiceController()));

export { exchangeRoutes };
