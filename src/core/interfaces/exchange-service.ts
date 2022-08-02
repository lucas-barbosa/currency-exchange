export interface ExchangeService {
  getValue: (currency: string) => Promise<number>;
}
