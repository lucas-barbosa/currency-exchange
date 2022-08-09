import { Router } from 'express';
import { exchangeRoutes } from './exchange';

export const setRoutes = (router: Router) => {
  router.use('/cotacoes', exchangeRoutes);
}
