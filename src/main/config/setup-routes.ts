import { Express, Router } from 'express';
import { setRoutes } from '../routes';

export default (app: Express) => {
  const router = Router();
  setRoutes(router);
  app.use(router);
}
