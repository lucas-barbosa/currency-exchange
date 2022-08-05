import { HttpResponse } from './http';

export interface Controller<T> {
  handle: (request: T) => Promise<HttpResponse>;
}
