import type {
  ChatHistory,
  ChatHistoryWithReactions,
} from "@/features/journals/types";

export const returnHistoryWithReactions = (history: ChatHistory[]) => {
  return history.reduce((messages, message): ChatHistoryWithReactions[] => {
    if (message.typeMessage === "reactionMessage") {
      const targetMessageId = message.quotedMessage.stanzaId;
      // const participant = message.quotedMessage.participant;
      const senderId = message.senderId;
      const senderName = message.senderName;
      const senderContactName = message.senderContactName;
      const emoji = message.extendedTextMessageData.text;

      if (!targetMessageId) {
        return messages;
      }

      return messages.map((message) => {
        if (message.idMessage !== targetMessageId) {
          return message;
        }

        return {
          ...message,
          reactions: [
            ...(message.reactions || []),
            {
              emoji,
              idMessage: targetMessageId,
              participants: [
                {
                  senderId,
                  senderName,
                  senderContactName,
                },
              ],
            },
          ],
        };
      });
    }

    return [...messages, message];
  }, []);
};
