import type { ChatHistory } from "@/features/journals/types";
import type { DefaultStateType } from "@/types";

export type AvatarResponse = {
  urlAvatar: string;
};

export type Chat = {
  chatId: string;
  name: string;
  type: string;
  phoneNumber: number;
  username: string;
  avatarSrc: string | null;
};

export type ChatCellProps = Chat & {
  lastMessage: ChatHistory | null;
};

export interface serviceState extends DefaultStateType {
  chats: Chat[] | null;
  lastMessages: ChatHistory[] | null;
}
