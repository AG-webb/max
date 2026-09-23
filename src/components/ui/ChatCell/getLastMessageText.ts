import type { ChatHistory } from "@/features/journals/types";

export const getLastMessageText = (lastMessage: ChatHistory) => {
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
    case "reactionMessage": {
      return `Reacted to message ${lastMessage.extendedTextMessageData.text}`;
    }
    default:
      return lastMessage.textMessage;
  }
};
