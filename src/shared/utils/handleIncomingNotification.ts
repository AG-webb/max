import type {
  ChatHistory,
  ChatHistoryBase,
  IncomingHistory,
} from "@/features/journals/types";
import type { StandardNotification } from "@/features/notifications/types";

export const handleIncomingNotification = (
  notification: StandardNotification,
  base: ChatHistoryBase,
): ChatHistory => {
  const { messageData, senderData } = notification;

  const incomingMessageProps: IncomingHistory = {
    type: "incoming",
    senderId: senderData.chatId,
    senderName: senderData.senderName,
    senderType: senderData.senderType,
    senderContactName: senderData.senderContactName,
  };

  switch (messageData.typeMessage) {
    case "textMessage": {
      const { textMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...incomingMessageProps,
        ...textMessageData,
        typeMessage,
      };
    }
    case "imageMessage":
    case "videoMessage":
    case "audioMessage":
    case "documentMessage":
    case "stickerMessage": {
      const { fileMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...incomingMessageProps,
        ...fileMessageData,
        typeMessage,
      };
    }
    case "pollMessage": {
      const { pollMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...incomingMessageProps,
        typeMessage,
        pollMessageData: pollMessageData,
      };
    }
    case "extendedTextMessage": {
      const { extendedTextMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...incomingMessageProps,
        typeMessage,
        textMessage: extendedTextMessageData.text,
        extendedTextMessage: extendedTextMessageData,
      };
    }
    case "reactionMessage": {
      const { extendedTextMessageData, typeMessage, quotedMessage } =
        messageData;

      return {
        ...base,
        ...incomingMessageProps,
        typeMessage,
        extendedTextMessageData: extendedTextMessageData,
        quotedMessage: {
          ...quotedMessage,
        },
      };
    }
    case "quotedMessage": {
      const { extendedTextMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...incomingMessageProps,
        typeMessage,
        quotedMessage: extendedTextMessageData,
      };
    }
    case "locationMessage": {
      const { locationMessageData } = messageData;

      return {
        ...base,
        ...incomingMessageProps,
        typeMessage: "textMessage",
        textMessage:
          "location- " +
          locationMessageData.latitude +
          ", " +
          locationMessageData.longitude,
        isForwarded: false,
        forwardingScore: 0,
      };
    }
    case "contactMessage": {
      const { contactMessageData } = messageData;

      return {
        ...base,
        ...incomingMessageProps,
        typeMessage: "textMessage",
        textMessage:
          "contact- " +
          contactMessageData.displayName +
          ", " +
          contactMessageData.vcard,
        isForwarded: false,
        forwardingScore: 0,
      };
    }
    default: {
      return {
        ...base,
        ...incomingMessageProps,
        typeMessage: "textMessage",
        textMessage: "Unsupported message type",
        isForwarded: false,
        forwardingScore: 0,
      };
    }
  }
};
