import type { ChatHistory } from "@/features/journals/types";

export const mergeMessages = (
  existing: ChatHistory[],
  incoming: ChatHistory[],
) => {
  const map = new Map();

  if (existing) {
    existing.map((message) => {
      map.set(message.idMessage, message);
    });
  }

  incoming.map((message) => {
    map.set(message.idMessage, message);
  });

  return [...map.values()].sort((a, b) => a.timestamp - b.timestamp);
};
