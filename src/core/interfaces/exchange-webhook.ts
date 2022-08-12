export type ExchangeEventData = {
  cid: string;
  f: number;
  t: string;
  v: number;
};

export type ExchangeWebhook = (cid: string) => Promise<ExchangeEventData[]>;
