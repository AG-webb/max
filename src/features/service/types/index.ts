import type { StatusType } from "@/types";

export type AvatarResponse = {
  urlAvatar: string;
}

export type Chat = {
  chatId: string;
  name: string;
  type: string;
  phoneNumber: number;
};

export interface serviceState {
  chats: Chat[] | null;
  error: string | null;
  status: StatusType;
}
