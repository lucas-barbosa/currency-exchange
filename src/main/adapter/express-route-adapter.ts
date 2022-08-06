import { Request, Response } from 'express';
import { Controller } from "../../presentation/protocols/controller";

export const routeAdapter = (controller: Controller<any>) => {
  return async (request: Request, response: Response) => {
    const body = {
      ...request.body,
      ...request.query,
      ...request.params
    };

    const { body: responseBody, statusCode } = await controller.handle(body);

    return response.status(statusCode).json(responseBody);
  }
}
