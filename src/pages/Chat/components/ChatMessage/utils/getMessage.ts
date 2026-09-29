import type {
  ChatHistory,
  QuotedTypeHistory,
  ReactionTypeHistory,
} from "@/features/journals/types";

export const getMessage = (
  lastMessage: Exclude<ChatHistory, QuotedTypeHistory | ReactionTypeHistory>,
) => {
  switch (lastMessage.typeMessage) {
    case "videoMessage": {
      return "Video message";
    }
    case "audioMessage": {
      return "Audio message";
    }
    case "imageMessage": {
      return "Image message";
    }
    case "documentMessage": {
      return "Document message";
    }
    case "stickerMessage": {
      return "Sticker message";
    }
    case "pollMessage": {
      return lastMessage.pollMessageData.name;
    }
    default:
      return lastMessage.textMessage;
  }
};
