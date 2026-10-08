import api from "@/services/api/axios";
import type { ChatHistory, ChatHistoryData } from "../types";

export const journalsApi = {
  getChatHistory: ({ chatId, count = 20 }: ChatHistoryData) =>
    api<ChatHistory[]>({
      url: "chat-history",
      method: "post",
      data: { chatId, count },
    }),
};
