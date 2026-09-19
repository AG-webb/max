import api from "@/services/api/axios";
import type { ChatHistory, ChatHistoryData } from "../types";

export const journalsApi = {
  getChatHistory: ({ chatId, count = 10 }: ChatHistoryData) =>
    api<ChatHistory[]>({
      url: `getChatHistory/${import.meta.env.VITE_API_TOKEN_INSTANCE}`,
      method: "post",
      data: { chatId, count },
    }),
  getLastMessage: (chatId: string) =>
    api<ChatHistory[]>({
      url: `getChatHistory/${import.meta.env.VITE_API_TOKEN_INSTANCE}`,
      method: "post",
      data: { chatId, count: 1 },
    }),
};