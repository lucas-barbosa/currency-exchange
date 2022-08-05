export function timeout<T>(ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      const error = new Error('Time out!');
      return reject(error);
    }, ms);
  });
}
