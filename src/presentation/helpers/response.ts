import { HttpResponse } from "../protocols/http";

export const ok = (data: any): HttpResponse => ({
  body: data,
  statusCode: 200
});

export const badRequest = (err: Error): HttpResponse => ({
  body: {
    message: err.message
  },
  statusCode: 400
});

export const noContent = () => ({
  body: {},
  statusCode: 200
});
