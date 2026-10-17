import type {
  ChatHistory,
  ChatHistoryBase,
  OutgoingHistory,
} from "@/features/journals/types";
import type { StandardNotification } from "@/features/notifications";

export const handleOutgoingNotification = (
  notification: StandardNotification,
  base: ChatHistoryBase,
): ChatHistory => {
  const { messageData, typeWebhook } = notification;

  const outgoingMessageProps: OutgoingHistory = {
    type: "outgoing",
    statusMessage: "sent",
    sendByApi: typeWebhook === "outgoingAPIMessageReceived",
  };

  switch (messageData.typeMessage) {
    case "textMessage": {
      const { textMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...outgoingMessageProps,
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
        ...outgoingMessageProps,
        ...fileMessageData,
        typeMessage,
      };
    }
    case "pollMessage": {
      const { pollMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...outgoingMessageProps,
        typeMessage,
        pollMessageData: pollMessageData,
      };
    }
    case "extendedTextMessage": {
      const { extendedTextMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...outgoingMessageProps,
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
        ...outgoingMessageProps,
        typeMessage,
        extendedTextMessageData: extendedTextMessageData,
        senderName: "Aro",
        senderId: quotedMessage.participant,
        senderContactName: "Aro",
        quotedMessage: {
          ...quotedMessage,
        },
      };
    }
    case "quotedMessage": {
      const { extendedTextMessageData, typeMessage } = messageData;

      return {
        ...base,
        ...outgoingMessageProps,
        typeMessage,
        quotedMessage: extendedTextMessageData,
      };
    }
    case "locationMessage": {
      const { locationMessageData } = messageData;

      return {
        ...base,
        ...outgoingMessageProps,
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
        ...outgoingMessageProps,
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
        ...outgoingMessageProps,
        typeMessage: "textMessage",
        textMessage: "Unsupported message type",
        isForwarded: false,
        forwardingScore: 0,
      };
    }
  }
};
