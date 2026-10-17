import type { ChatHistory, ChatHistoryBase } from "@/features/journals/types";
import type { StandardNotification } from "@/features/notifications/types";
import { handleIncomingNotification } from "./handleIncomingNotification";
import { handleOutgoingNotification } from "./handleOutgoingNotification";

export const createChatHistory = (
  notification: StandardNotification,
): ChatHistory => {
  const { typeWebhook } = notification;
  // {
  //   type: "incoming";
  //   idMessage: "1790833510536";
  //   timestamp: 1790833510;
  //   typeMessage: "textMessage";
  //   chatId: "8456469015";
  //   chatType: "user";
  //   textMessage: "Vochmi vord el chka";
  //   isForwarded: false;
  //   forwardingScore: 0;
  //   senderId: "8456469015";
  //   senderName: "Armen";
  //   senderType: "user";
  //   senderContactName: "Armen";
  //   deletedMessageId: "";
  //   editedMessageId: "";
  //   isEdited: false;
  //   isDeleted: false;
  // }

  const base: ChatHistoryBase = {
    idMessage: notification.idMessage,
    timestamp: notification.timestamp,
    chatId: notification.senderData.chatId,
    chatType: notification.senderData.chatType,
  };

  if (typeWebhook == "incomingMessageReceived") {
    return handleIncomingNotification(notification, base);
  }

  return handleOutgoingNotification(notification, base);
};
