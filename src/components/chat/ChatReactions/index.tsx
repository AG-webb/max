import { Avatar } from "@/components/ui";
import type { Reaction } from "@/features/journals";

export const ChatReactions = ({ reactions }: { reactions: Reaction[] }) => {
  if (!reactions.length) return;

  return (
    <div className="chat-message__reactions flex gap-1">
      {reactions.map((reaction) => (
        <div
          className="inline-flex gap-0.5 bg-dark-surface py-1 px-2 rounded-2xl"
          key={reaction.emoji}
        >
          <span>{reaction.emoji}</span>
          {reaction.participants.length && (
            <div className="flex">
              {reaction.participants.map((participant) => (
                <Avatar
                  size="extra-small"
                  key={participant.senderId}
                  src={""}
                  name={participant.senderName}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
