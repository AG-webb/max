import type { ChatHistory } from "@/features/journals";

export const mergeHistory = (
  existing: ChatHistory[],
  incoming: ChatHistory[] | ChatHistory,
) => {
  const map = new Map<string, ChatHistory>();

  if (existing) {
    existing.map((message) => {
      map.set(message.idMessage, message);
    });
  }

  if (Array.isArray(incoming)) {
    incoming.map((message) => {
      map.set(message.idMessage, message);
    });
  } else if (incoming) {
    map.set(incoming.idMessage, incoming);
  }

  return [...map.values()].sort((a, b) => a.timestamp - b.timestamp);
};
