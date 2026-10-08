export type MessageViewType = "outgoing" | "incoming";
export type StatusMessageType = "sent" | "delivered" | "read";
export type OutgoingStatusMessageType =
  | Exclude<StatusMessageType, "sent">
  | "failed"
  | "noAccount"
  | "notInGroup";
export type TextMessageType = "textMessage";
export type ExtendedTextMessageType = "extendedTextMessage";
export type FileMessageType =
  | "imageMessage"
  | "videoMessage"
  | "documentMessage"
  | "audioMessage"
  | "stickerMessage";
export type StandardWebhookType =
  | "incomingMessageReceived"
  | "outgoingMessageReceived"
  | "outgoingAPIMessageReceived";
export type StatusWebhookType = "outgoingMessageStatus";
export type StateWebhookType = "stateInstanceChanged";
export type QuotaWebhookType = "quotaExceeded";
export type WebhookType =
  | StandardWebhookType
  | StatusWebhookType
  | StateWebhookType
  | QuotaWebhookType;
export type PollMessageType = "pollMessage";
export type ReactionMessageType = "reactionMessage";
export type QuotedMessageType = "quotedMessage";
export type LocationMessageType = "locationMessage";
export type ContactMessageType = "contactMessage";
export type EditedMessageType = "editedMessage";
export type DeletedMessageType = "deletedMessage";
export type MessageType =
  | TextMessageType
  | ExtendedTextMessageType
  | FileMessageType
  | PollMessageType
  | ReactionMessageType
  | QuotedMessageType;

export type ChatType = "user" | "group" | "channel" | "bot";

export type InstanceType = "whatsapp" | "telegram" | "v3";

export interface QuotedMessage {
  stanzaId: string;
  participant: string;
  typeMessage?: string;
}

export type NotificationQuotedMessage = Omit<QuotedMessage, "typeMessage">;

export type ForwardedProps = {
  forwardingScore: number;
  isForwarded: boolean;
};

export type EditedMessage = {
  isEdited?: true;
  editedMessageId: string;
};
export type NonEditedMessage = {
  isEdited?: false;
};

export type DeletedMessage = {
  isDeleted?: true;
  deletedMessageId: string;
};
export type NonDeletedMessage = {
  isDeleted?: false;
};
