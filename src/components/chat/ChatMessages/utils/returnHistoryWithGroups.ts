import type {
  ChatHistoryWithReactions,
  ChatHistoryWithReactionsAndGroups,
} from "@/features/journals";

export const returnHistoryWithGroups = (
  history: ChatHistoryWithReactions[],
) => {
  return history.map(
    (message, index, messages): ChatHistoryWithReactionsAndGroups => {
      const previous = messages[index - 1];
      const next = messages[index + 1];

      const type = message.type;

      const sameAsPrevious = previous && previous.type === type;

      const sameAsNext = next && next.type === type;

      return {
        ...message,
        groupPosition:
          !sameAsPrevious && !sameAsNext
            ? "single"
            : !sameAsPrevious
              ? "first"
              : !sameAsNext
                ? "last"
                : "middle",
      };
    },
  );
};
