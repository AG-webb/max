import type { Reaction } from "@/features/journals/types";

export const returnGroupReactions = (reactions: Reaction[]) => {
  return reactions.reduce((group: Reaction[], reaction) => {
    const existing = group.find((item) => item.emoji === reaction.emoji);

    if (existing) {
      existing.participants = [
        ...existing.participants,
        ...reaction.participants,
      ];
    } else {
      if (reaction.emoji) {
        group = [
          ...group,
          {
            emoji: reaction.emoji,
            idMessage: reaction.idMessage,
            participants: reaction.participants,
          },
        ];
      } else {
        group = group.filter(
          (item) =>
            !item.participants.some(
              (participant) =>
                participant.senderId === reaction.participants[0].senderId,
            ),
        );
      }
    }

    return group;
  }, []);
};
