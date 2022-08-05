import axios from "axios";
import { ExchangeC } from "./exchange-c";


describe('Exchange C - service', () => {
  let exchangeService: ExchangeC;
  const callbackUrl = 'http://127.0.0.1:3000';
  
  const webhook = jest.fn((callbackUrl: string, cid: string) => Promise.resolve({
    cid,
    f: 100,
    t: 'currency',
    v: 5820,
  }));

  beforeEach(() => {
    exchangeService = new ExchangeC(callbackUrl, webhook);
  });

  it('should throw an error if currency is empty', async () => {
    await expect(() => exchangeService.getValue(''))
      .rejects
      .toThrowError();
  });

  it('should make a POST request to API with given currency and callback url', async () => {
    jest.spyOn(axios, 'post');

    const currency = 'BRL';

    await exchangeService.getValue(currency);

    expect(axios.post).toBeCalledTimes(1);
    
    expect(axios.post).toBeCalledWith(expect.any(String), {
      tipo: currency,
      callback: callbackUrl
    });
  });

  it('should receive exchange response from a webhook', async () => {   
    await exchangeService.getValue('EUR');

    expect(webhook).toBeCalledTimes(1);
    expect(webhook).toBeCalledWith(callbackUrl, expect.any(String));
  });

  it('should throw an error if webhook takes more than 5 seconds', async () => {
    webhook.mockImplementationOnce((callbackUrl: string, cid: string) => 
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            cid,
            f: 100,
            t: 'currency',
            v: 5820,
          });
        }, 5100);
      })
    );

    await expect(exchangeService.getValue('USD'))
      .rejects
      .toThrowError();
  }, 7000);
});
