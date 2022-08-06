import express from 'express';
import setupRoutes from './setup-routes';

const app = express();
app.use(express.json());

setupRoutes(app);

export default app;
