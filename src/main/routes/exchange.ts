import { Router } from 'express';
import { routeAdapter } from '../adapter/express-route-adapter';
import { makeFindBestExchangeController } from '../factories';

const exchangeRoutes = Router();

exchangeRoutes.get('/', routeAdapter(makeFindBestExchangeController()));

export { exchangeRoutes }
