export type ExchangeEventData = {
  cid: string;
  f: number;
  t: string;
  v: number;
};

export type ExchangeWebhook = (callbackUrl: string, cid: string) => Promise<ExchangeEventData>;
