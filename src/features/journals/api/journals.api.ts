import { api } from "@/services/api";
import { chatsHistoryLimiter } from "@/services/rateLimiters";
import type { ChatHistory, ChatHistoryData } from "../types";

export const journalsApi = {
  getChatHistory: ({ chatId, count = 20 }: ChatHistoryData) =>
    chatsHistoryLimiter(() =>
      api<ChatHistory[]>({
        url: "chat-history",
        method: "post",
        data: { chatId, count },
      }),
    ),
};
