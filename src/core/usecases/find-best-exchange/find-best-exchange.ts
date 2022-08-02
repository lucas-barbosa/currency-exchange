import { ExchangeService } from '../../interfaces/exchange-service';

export class FindBestExchange {
  private services: ExchangeService[];

  constructor(services: ExchangeService[]) {
    if (!services.length) {
      throw new Error('No services was provided!');
    }

    this.services = services;
  }

  async execute(currency: string): Promise<number> {
    const result = await Promise.allSettled(this.services.map(service => service.getValue(currency)));

    const availableValues = result
      .filter(service => service.status === 'fulfilled')
      .map((service => (service as PromiseFulfilledResult<number>).value));

    if (!availableValues.length) {
      throw new Error('Currency price not found at this moment!');
    }

    const bestPrice = Math.min(...availableValues);

    return bestPrice;
  }
}
