import { api } from "@/services/api";
import { chatsAvatarLimiter } from "@/services/rateLimiters";
import type { Chat } from "@/types/chats";
import type { AvatarResponse } from "../types";

export const serviceApi = {
  getChats: () => api.get<Chat[]>("chats"),
  getAvatar: (chatId: string) =>
    chatsAvatarLimiter(() =>
      api<AvatarResponse>({
        url: "avatar",
        method: "post",
        data: { chatId },
      }),
    ),
};
