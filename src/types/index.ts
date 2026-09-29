export type StatusType = "idle" | "loading" | "loaded" | "error";
export type StateInstance =
  | "notAuthorized"
  | "authorized"
  | "blocked"
  | "starting"
  | "suspended"
  | "pendingPassword";
export type MessageViewType = "outgoing" | "incoming";
export type StatusMessageType = "sent" | "delivered" | "read";

export type TextMessageType = "textMessage";
export type ExtendedTextMessageType = "extendedTextMessage";
export type FileMessageType =
  | "imageMessage"
  | "videoMessage"
  | "documentMessage"
  | "audioMessage"
  | "stickerMessage";
export type PollMessageType = "pollMessage";
export type ReactionMessageType = "reactionMessage";
export type QuotedMessageType = "quotedMessage";
export type MessageType =
  | TextMessageType
  | ExtendedTextMessageType
  | FileMessageType
  | PollMessageType
  | ReactionMessageType
  | QuotedMessageType;

export type ChatType = "user" | "group" | "channel" | "bot";

export type ActionResultType = {
  type: string;
  status: StatusType;
  message: string;
};
export type DefaultStateType = {
  actionResult: ActionResultType;
};
