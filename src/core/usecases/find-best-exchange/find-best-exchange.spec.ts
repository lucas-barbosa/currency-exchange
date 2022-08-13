import { ExchangeService } from "../../interfaces/exchange-service";
import { FindBestExchange } from "./find-best-exchange";

let findBestExchange: FindBestExchange;
let services: ExchangeService[];

describe('Find Best Exchange - usecase', () => {
  beforeAll(() => {
    const firstService: ExchangeService = {
      getValue: (current: string) => Promise.resolve(13)
    };

    const secondService: ExchangeService = {
      getValue: (current: string) => Promise.resolve(10)
    };

    const thirdService: ExchangeService = {
      getValue: (current: string) => Promise.resolve(8)
    };
        
    services = [firstService, secondService, thirdService];
  });

  beforeEach(() => {
    findBestExchange = new FindBestExchange(services);
  });
  
  it('should throw an error if no services was passed', async () => {
    expect(() => {
      findBestExchange = new FindBestExchange([]); 
    }).toThrowError();
  });

  it('should receive a list of exchange services and call everyone', async () => {
    const currency = 'BRL';

    services.map(service => {
      jest.spyOn(service, 'getValue');
      return null;
    });

    await findBestExchange.execute('BRL');

    services.map(service => {
      expect(service.getValue).toBeCalledTimes(1);
      expect(service.getValue).toBeCalledWith(currency);
      return null;
    });
  });

  it('should receive a currency in string and return a object containing price value', async () => {
    const result = await findBestExchange.execute('BRL');
    expect(result.price).toEqual(expect.any(Number));
  });

  it('should return the lowest value as price from services', async () => {
    const response = await findBestExchange.execute('BRL');
    expect(response.price).toBe(8);
    expect(response.currency).toBe('BRL');
  });

  it('should throw an error if no value was found', async () => {
    services.map(service => {
      jest.spyOn(service, 'getValue')
        .mockRejectedValue(() => Promise.reject('Not Found'))

      return null;
    });

    await expect(() => findBestExchange.execute('BRL'))
      .rejects
      .toThrowError();
  });
});
