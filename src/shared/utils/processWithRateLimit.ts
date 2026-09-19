import { delay } from "./delay";

export const processWithRateLimit = async <T, R>(
  items: T[],
  processor: (item: T) => Promise<R>,
  interval = 1100,
): Promise<R[]> => {
  const results: R[] = [];

  for (const item of items) {
    const result = await processor(item);
    results.push(result);

    if (item !== items[items.length - 1]) {
      await delay(interval);
    }
  }

  return results;
};
