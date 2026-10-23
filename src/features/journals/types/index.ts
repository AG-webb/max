import type { ActionResultType } from "@/types";
import type {
  ChatType,
  DeletedMessage,
  EditedMessage,
  ExtendedTextMessageType,
  FileMessageType,
  MessageType,
  NonDeletedMessage,
  NonEditedMessage,
  PollMessageType,
  QuotedMessage,
  ReactionMessageType,
  StatusMessageType,
  TextMessageType,
} from "@/types/chats";
import type { ForwardedProps } from "./../../../types/chats/index";

export interface JournalsState {
  actionResult: ActionResultType;
  chatsHistory: { [chatId: string]: ChatHistory[] } | null;
}

export type ChatHistoryData = {
  chatId: string;
  count?: number;
};

export type LastMessageData = {
  chatId: string;
  lastMessage: ChatHistory;
};

export type OutgoingHistory = {
  type: "outgoing";
  statusMessage: StatusMessageType;
  sendByApi: boolean;
};

export type IncomingHistory = {
  type: "incoming";
  senderId: string;
  senderName: string;
  senderType: ChatType;
  senderContactName: string;
};

export type TextTypeHistory = {
  typeMessage: TextMessageType;
  textMessage: string;
  quotedMessage?: QuotedMessage;
};

export type ExtendedTextTypeHistory = {
  typeMessage: ExtendedTextMessageType;
  textMessage: string;
  extendedTextMessage: ExtendedTextMessage;
  quotedMessage?: QuotedMessage;
};

export type FileTypeHistory = {
  typeMessage: FileMessageType;
  downloadUrl: string;
  downloadUrlJpeg?: string;
  caption: string;
  fileName: string;
  jpegThumbnail: string;
  mimeType: string;
  isAnimated: boolean;
  quotedMessage?: QuotedMessage;
};

export type ReactionTypeHistory = {
  typeMessage: ReactionMessageType;
  extendedTextMessageData: ExtendedTextMessageData;
  quotedMessage: QuotedMessage;
  senderId: string;
  senderName: string;
  senderContactName: string;
};

export type PollTypeHistory = {
  typeMessage: PollMessageType;
  pollMessageData: PollMessageData;
  quotedMessage?: QuotedMessage;
};

export type ChatHistoryBase = {
  idMessage: string;
  timestamp: number;
  chatId: string;
  chatType: ChatType;
};

export type ChatHistory = {
  typeMessage: MessageType;
} & ChatHistoryBase &
  (EditedMessage | NonEditedMessage) &
  (DeletedMessage | NonDeletedMessage) &
  (OutgoingHistory | IncomingHistory) &
  (
    | ExtendedTextTypeHistory
    | ReactionTypeHistory
    | PollTypeHistory
    | ((TextTypeHistory | FileTypeHistory) & ForwardedProps)
  );

export type ChatHistoryWithReactions = Exclude<
  ChatHistory,
  ReactionTypeHistory
> & {
  reactions?: Reaction[];
};

export type ChatHistoryWithReactionsAndGroups = ChatHistoryWithReactions & {
  groupPosition?: "first" | "last" | "single" | "middle";
};

export type Reaction = {
  emoji: string;
  idMessage: string;
  participants: ReactionParticipant[];
};

export type ReactionParticipant = Omit<IncomingHistory, "type" | "senderType">;

export interface ExtendedTextMessage extends ForwardedProps {
  text: string;
  description: string;
  title: string;
  jpegThumbnail: string;
}

export interface ExtendedTextMessageData {
  text: string;
}

export interface PollMessageData {
  name: string;
  options: PollOption[];
  allowToChangeAnswer?: boolean;
  multipleAnswers?: boolean;
}

export type PollOption = {
  optionName: string;
};
