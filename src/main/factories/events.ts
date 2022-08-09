import { EventEmitter } from "events";
import { EmitEvent } from "../../core/interfaces/emit-event";

const eventName = 'exchange-webhook.response.';
const eventEmitter = new EventEmitter();

export const makeEmitEvent = (): EmitEvent => {
  return (identifier: string, data: any) => eventEmitter.emit(`${eventName}${identifier}`, data);
}
