import type {
  ExtendedTextMessage,
  ExtendedTextMessageData,
  FileTypeHistory,
  PollMessageData,
} from "@/features/journals/types";
import type {
  ChatType,
  ContactMessageType,
  DeletedMessageType,
  EditedMessageType,
  ExtendedTextMessageType,
  FileMessageType,
  ForwardedProps,
  LocationMessageType,
  NotificationQuotedMessage,
  PollMessageType,
  QuotedMessageType,
  ReactionMessageType,
  TextMessageType,
  WebhookType,
} from "@/types/chats";

export type TextMessageData = {
  textMessage: string;
} & ForwardedProps;

export type ExtendedTextMessageDataNotification = {
  text: string;
  stanzaId: string;
  participant: string;
};

export type LocationMessageData = {
  latitude: number;
  longitude: number;
} & ForwardedProps;

export type ContactMessageData = {
  chatId: string;
  urlAvatar: string;
  phoneNumber: string;
  displayName: string;
  vcard: string;
} & ForwardedProps;

export type EditedMessageData = {
  textMessage: string;
  stanzaId: string;
};

export type TextTypeNotification = {
  typeMessage: TextMessageType;
  textMessageData: TextMessageData;
  quotedMessage?: NotificationQuotedMessage;
};

export type ExtendedTextTypeNotification = {
  typeMessage: ExtendedTextMessageType;
  extendedTextMessageData: ExtendedTextMessage;
  quotedMessage?: NotificationQuotedMessage;
};

export type FileTypeNotification = {
  typeMessage: FileMessageType;
  fileMessageData: Omit<FileTypeHistory, "typeMessage"> & ForwardedProps;
  quotedMessage?: NotificationQuotedMessage;
};

export type LocationTypeNotification = {
  typeMessage: LocationMessageType;
  locationMessageData: LocationMessageData;
};

export type ContactTypeNotification = {
  typeMessage: ContactMessageType;
  contactMessageData: ContactMessageData;
};

export type ReactionTypeNotification = {
  typeMessage: ReactionMessageType;
  extendedTextMessageData: ExtendedTextMessageData;
  quotedMessage: NotificationQuotedMessage;
};

export type QuotedTypeNotification = {
  typeMessage: QuotedMessageType;
  extendedTextMessageData: ExtendedTextMessageDataNotification;
};

export type PollTypeNotification = {
  typeMessage: PollMessageType;
  pollMessageData: PollMessageData;
  quotedMessage?: NotificationQuotedMessage;
};

export type EditedTypeNotification = {
  typeMessage: EditedMessageType;
  editedMessageData: EditedMessageData;
};

export type DeletedTypeNotification = {
  typeMessage: DeletedMessageType;
  deletedMessageData: {
    stanzaId: string;
  };
};

export type NotificationMessageData =
  | TextTypeNotification
  | ExtendedTextTypeNotification
  | FileTypeNotification
  | LocationTypeNotification
  | ContactTypeNotification
  | ReactionTypeNotification
  | QuotedTypeNotification
  | PollTypeNotification
  | EditedTypeNotification
  | DeletedTypeNotification;

export type Notification = {
  typeWebhook: WebhookType;
  instanceData: {
    idInstance: number;
    wid: string;
    typeInstance: string;
  };
  timestamp: number;
  idMessage: string;
  senderData: {
    chatId: string;
    chatName: string;
    chatType: ChatType;
    sender: string;
    senderName: string;
    senderType: ChatType;
    senderContactName: string;
    senderPhoneNumber: number;
  };
  messageData: NotificationMessageData;
};
