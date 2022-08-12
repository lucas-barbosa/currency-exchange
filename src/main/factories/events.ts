import { EventEmitter, once } from "events";
import { EmitEvent } from "../../core/interfaces/emit-event";
import { ListenEvent } from "../../core/interfaces/listen-event";

const eventName = 'exchange-webhook.response.';
const eventEmitter = new EventEmitter();

export const makeEmitEvent = (): EmitEvent => {
  return (identifier: string, data: any) => eventEmitter.emit(`${eventName}${identifier}`, data);
}

export const makeListenEvent = (): ListenEvent => {
  return (identifier: string) => once(eventEmitter, `${eventName}${identifier}`);
}
