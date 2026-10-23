import type { ChatHistoryWithReactionsAndGroups } from "@/features/journals";
import clsx from "clsx";
import { ChatInfo } from "../ChatInfo";
import { ChatReactions } from "../ChatReactions";
import "./style.css";
import { renderMessage, returnGroupReactions } from "./utils";

export const ChatMessage = (props: ChatHistoryWithReactionsAndGroups) => {
  const { type, timestamp, isEdited, reactions, typeMessage, groupPosition } =
    props;

  const statusMessage = type === "outgoing" ? props.statusMessage : undefined;
  const groupReaction = reactions ? returnGroupReactions(reactions) : [];

  const chatMessageClasses: Record<typeof type, string> = {
    outgoing: "chat-message_outgoing justify-end max-md:pl-22",
    incoming: "chat-message_incoming max-md:pr-14",
  };

  const chatMessageWrapClasses: Record<typeof typeMessage, string> = {
    textMessage: "",
    extendedTextMessage: "",
    imageMessage: "",
    videoMessage: "",
    documentMessage: "",
    audioMessage: "",
    stickerMessage: "",
    pollMessage: "",
  };

  return (
    <div
      className={clsx(
        "chat-message flex",
        chatMessageClasses[type],
        isEdited && "chat-message_edited",
        `chat-message_${groupPosition}`,
      )}
    >
      <div
        className={clsx(
          "chat-message__wrap text-left inline-block relative md:max-w-[70%]",
          chatMessageWrapClasses[typeMessage],
        )}
      >
        <div className="chat-message__border border border-transparent rounded-[inherit] overflow-hidden max-w-full">
          {renderMessage(props)}
          <ChatReactions reactions={groupReaction} />
          <ChatInfo
            timestamp={timestamp}
            isEdited={isEdited}
            statusMessage={statusMessage}
          />
        </div>
      </div>
    </div>
  );
};
