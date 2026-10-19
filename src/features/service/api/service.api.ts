import { api } from "@/services/api";
import type { Chat } from "@/types/chats";
import type { AvatarResponse } from "../types";

export const serviceApi = {
  getChats: () => api.get<Chat[]>("chats"),
  getAvatar: (chatId: string) =>
    api<AvatarResponse>({
      url: "avatar",
      method: "post",
      data: { chatId },
    }),
};
