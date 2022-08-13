import axios from 'axios';
import { ExchangeA } from './exchange-a';

let exchangeService: ExchangeA;

describe('Exchange A - service', () => {
  beforeAll(() => {
    exchangeService = new ExchangeA();
  });

  it('should throw an error if currency is empty', async () => {
    await expect(() => exchangeService.getValue(''))
      .rejects
      .toThrowError();
  });

  it('should make a GET request to api url', async () => {
    jest.spyOn(axios, 'get');

    await exchangeService.getValue('EUR');

    expect(axios.get).toBeCalledTimes(1);
  });

  it('should receive a currency and make a request using this currency', async () => {
    jest.spyOn(axios, 'get');

    await exchangeService.getValue('USD');

    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith(expect.any(String), {
      params: {
        moeda: 'USD',
      },
    });
  });

  it('should return the price gotten from the api', async () => {
    const result = await exchangeService.getValue('BRL');
    expect(result).toEqual(expect.any(Number));
  });
});
