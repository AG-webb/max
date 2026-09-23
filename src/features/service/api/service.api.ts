import api from "@/services/api/axios";
import type { AvatarResponse, Chat } from "../types";

export const serviceApi = {
  getChats: () =>
    api.get<Chat[]>(`getChats/${import.meta.env.VITE_API_TOKEN_INSTANCE}`),
  getAvatar: (chatId: string) =>
    api<AvatarResponse>({
      url: `getAvatar/${import.meta.env.VITE_API_TOKEN_INSTANCE}`,
      method: "post",
      data: { chatId },
    }),
};
