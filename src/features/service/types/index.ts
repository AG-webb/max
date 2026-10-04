import type { ChatHistory } from "@/features/journals/types";
import type { DefaultStateType } from "@/types";
import type { ChatType } from "@/types/chats";

export type AvatarResponse = {
  urlAvatar: string;
};

export type Chat = {
  chatId: string;
  name: string;
  type: ChatType;
  phoneNumber: number;
  username: string;
};

export type ChatCellProps = Chat & {
  lastMessage: ChatHistory | null;
  avatarSrc: string | null;
};

export interface ServiceState extends DefaultStateType {
  chats: Chat[] | null;
  lastMessages: ChatHistory[] | null;
  avatars: { [chatId: string]: string } | null;
}
