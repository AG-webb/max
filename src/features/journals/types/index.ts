import type {
  ActionResultType,
  ChatType,
  ExtendedTextMessageType,
  FileMessageType,
  MessageType,
  PollMessageType,
  QuotedMessageType,
  ReactionMessageType,
  StatusMessageType,
  TextMessageType,
} from "@/types";

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
};

export type ExtendedTextTypeHistory = {
  typeMessage: ExtendedTextMessageType;
  textMessage: string;
  extendedTextMessage: ExtendedTextMessage;
};

export type FileTypeHistory = {
  typeMessage: FileMessageType;
  downloadUrl: string;
  downloadUrlJpeg: string;
  caption: string;
  fileName: string;
  jpegThumbnail: string;
  mimeType: string;
  isAnimated: boolean;
};

export type ReactionTypeHistory = {
  typeMessage: ReactionMessageType;
  extendedTextMessageData: ExtendedTextMessageData;
  quotedMessage: QuotedMessage;
  senderId: string;
  senderName: string;
  senderContactName: string;
};

export type QuotedTypeHistory = {
  typeMessage: QuotedMessageType;
  quotedMessage: QuotedMessage;
};

export type PollTypeHistory = {
  typeMessage: PollMessageType;
  pollMessageData: PollMessageData;
};

export type ChatHistory = {
  idMessage: string;
  timestamp: number;
  typeMessage: MessageType;
  chatId: string;
  chatType: ChatType;
  isForwarded: boolean;
  forwardingScore: number;
  deletedMessageId: string;
  editedMessageId: string;
  isEdited: boolean;
  isDeleted: boolean;
} & (OutgoingHistory | IncomingHistory) &
  (
    | TextTypeHistory
    | ExtendedTextTypeHistory
    | FileTypeHistory
    | ReactionTypeHistory
    | QuotedTypeHistory
    | PollTypeHistory
  );

export type ChatHistoryWithReactions = Exclude<
  ChatHistory,
  ReactionTypeHistory
> & {
  reactions?: Reaction[];
};

export type Reaction = {
  emoji: string;
  idMessage: string;
  participants: ReactionParticipant[];
};

export type ReactionParticipant = Omit<IncomingHistory, "type" | "senderType">;

interface ExtendedTextMessage {
  text: string;
  description: string;
  title: string;
  jpegThumbnail: string;
  isForwarded: boolean;
  forwardingScore: number;
}

interface ExtendedTextMessageData {
  text: string;
}

interface PollMessageData {
  name: string;
  options: string[];
  allowToChangeAnswer: boolean;
}

interface QuotedMessage {
  stanzaId: string;
  participant: string;
  typeMessage: string;
}
