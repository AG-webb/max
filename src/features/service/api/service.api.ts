import api from "@/services/api/axios";
import type { AvatarResponse, Chat } from "../types";

export const serviceApi = {
  getChats: () => api.get<Chat[]>("chats"),
  getAvatar: (chatId: string) =>
    api<AvatarResponse>({
      url: "avatar",
      method: "post",
      data: { chatId },
    }),
};
