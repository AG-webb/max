import type {
  ActionResultType,
  ChatType,
  MessageType,
  StatusMessageType,
} from "@/types";

export interface JournalsState {
  actionResult: ActionResultType;
  chatHistory: ChatHistory[] | null;
}

export type ChatHistoryData = {
  chatId: string;
  count: number;
};

export type OutgoingHistory = {
  type: "outgoing";
  statusMessage: StatusMessageType;
  sendByApi: boolean;
};

export type IncomingHistory = {
  type: "incoming";
  senderName: string;
  senderType: ChatType;
  senderContactName: string;
};

export type ChatHistory = {
  idMessage: string;
  timestamp: number;
  typeMessage: MessageType;
  chatId: string;
  chatType: ChatType;
  isForwarded: boolean;
  forwardingScore: number;
  textMessage: string;
  downloadUrl: string;
  downloadUrlJpeg: string;
  caption: string;
  fileName: string;
  jpegThumbnail: string;
  mimeType: string;
  isAnimated: boolean;
  extendedTextMessage: ExtendedTextMessage;
  extendedTextMessageData: ExtendedTextMessageData;
  pollMessageData: PollMessageData;
  quotedMessage: QuotedMessage;
  deletedMessageId: string;
  editedMessageId: string;
  isEdited: boolean;
  isDeleted: boolean;
} & (OutgoingHistory | IncomingHistory);

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
