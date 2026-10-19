import type { ChatHistory } from "@/features/journals";
import type { DefaultStateType } from "@/types";
import type { Chat } from "@/types/chats";

export type AvatarResponse = {
  urlAvatar: string;
};

export interface ServiceState extends DefaultStateType {
  chats: Chat[] | null;
  lastMessages: { [chatId: string]: ChatHistory } | null;
  avatars: { [chatId: string]: string } | null;
}
