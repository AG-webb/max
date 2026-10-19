export const createRateLimiter = (delayMs: number) => {
  let nextAvailableTime = 0;
  let queue = Promise.resolve();

  return function schedule<T>(task: () => Promise<T>): Promise<T> {
    const execute = async (): Promise<T> => {
      const now = Date.now();

      const waitTime = Math.max(0, nextAvailableTime - now);

      if (waitTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }

      nextAvailableTime = Date.now() + delayMs;
      return task();
    };

    const result = queue.then(execute);

    queue = result.then(
      () => undefined,
      () => undefined,
    );

    return result;
  };
};
