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
export type MessageType =
  | "textMessage"
  | "imageMessage"
  | "videoMessage"
  | "documentMessage"
  | "audioMessage"
  | "stickerMessage"
  | "reactionMessage"
  | "pollMessage";
export type ChatType = "user" | "group" | "channel" | "bot";

export type ActionResultType = {
  type: string;
  status: StatusType;
  message: string;
};
export type DefaultStateType = {
  actionResult: ActionResultType;
};
