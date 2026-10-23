import type {
  ChatHistory,
  ChatHistoryWithReactions,
} from "@/features/journals";

export const returnHistoryWithReactions = (history: ChatHistory[]) => {
  return history.reduce((messages, message): ChatHistoryWithReactions[] => {
    if (message.typeMessage === "reactionMessage") {
      const targetMessageId = message.quotedMessage.stanzaId;
      const emoji = message.extendedTextMessageData.text;
      const { senderId, senderName, senderContactName } = message;

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
