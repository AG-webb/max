import { Avatar } from "@/components/ui";
import type {
  ChatHistoryWithReactions,
  QuotedTypeHistory,
  ReactionTypeHistory,
} from "@/features/journals/types";
import { convertTimestampToDate } from "@/shared/utils";
import clsx from "clsx";
import { type CSSProperties } from "react";
import "./style.css";
import { getMessage } from "./utils/getMessage";
import { returnGroupReactions } from "./utils/returnGroupReactions";

const ChatMessage = (
  props: Exclude<
    ChatHistoryWithReactions,
    QuotedTypeHistory | ReactionTypeHistory
  >,
) => {
  const { type, timestamp, isEdited, reactions } = props;
  const outgoingClasses = "chat-message_outgoing text-right";
  const incomingClasses = "chat-message_incoming";

  const groupReaction = reactions ? returnGroupReactions(reactions) : [];

  return (
    <div
      className={clsx(
        "chat-message py-1",
        type === "outgoing" ? outgoingClasses : incomingClasses,
      )}
      style={
        {
          "--chat-message-info-width": isEdited ? "90px" : "70px",
        } as CSSProperties
      }
    >
      <div className="chat-message__wrap text-left inline-block bg-(image:--chat-message-wrap-bg) relative max-w-[70%] rounded-2xl pt-2 px-2.5 pb-2.5 overflow-hidden">
        <span className="chat-message__body relative inline-block">
          {getMessage(props)}
        </span>
        <div>
          {reactions?.length ? (
            <div className="chat-message__reactions flex gap-1">
              {groupReaction.map((reaction) => (
                <div
                  className="inline-flex gap-0.5 bg-dark-surface py-1 px-2 rounded-2xl"
                  key={reaction.emoji}
                >
                  <span>{reaction.emoji}</span>
                  {reaction.participants.length ? (
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
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="chat-message__info absolute bottom-2.5 right-2.5 shrink-0 flex items-center gap-0.5 -mb-1.5">
          <div className="chat-message__time text-neutral-tertiary leading-3.5 text-[11px]">
            {convertTimestampToDate(timestamp)} {isEdited && "Ed"}
          </div>
          {type === "outgoing" ? (
            <div className="chat-message__status">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className={
                  props.statusMessage === "read" ? "text-blue-500" : ""
                }
              >
                {props.statusMessage === "read" ||
                props.statusMessage === "delivered" ? (
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M18.089 5.589a.9.9 0 0 1 0 1.272L7.064 17.886a.9.9 0 0 1-1.273 0L1.883 13.98a.9.9 0 0 1 1.273-1.273l3.271 3.271L16.816 5.59a.9.9 0 0 1 1.273 0m5.459-.001a.9.9 0 0 1 0 1.273L12.523 17.887a.9.9 0 0 1-1.272 0l-.73-.73a.9.9 0 0 1 1.273-1.272l.093.092L22.276 5.59a.9.9 0 0 1 1.272 0"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M18.09 5.589a.9.9 0 0 1 0 1.272L7.063 17.886a.9.9 0 0 1-1.273 0L1.884 13.98a.9.9 0 0 1 1.273-1.273l3.27 3.271L16.818 5.59a.9.9 0 0 1 1.272 0"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
