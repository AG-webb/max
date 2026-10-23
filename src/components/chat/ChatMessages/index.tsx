import { type ChatHistory } from "@/features/journals";
import { scrollToBottom } from "@/shared/utils";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ChatMessage } from "../ChatMessage";
import { EmptyMessages } from "../EmptyMessages";
import { returnHistoryWithGroups } from "./utils/returnHistoryWithGroups";
import { returnHistoryWithReactions } from "./utils/returnHistoryWithReactions";

export const ChatMessages = ({ history }: { history: ChatHistory[] | [] }) => {
  const chatMessagesRef = useRef<HTMLDivElement | null>(null);
  const historyWithReactions = returnHistoryWithReactions(history);
  const historyWithGroupsAndReactions =
    returnHistoryWithGroups(historyWithReactions);

  useLayoutEffect(() => {
    scrollToBottom(chatMessagesRef.current);
  }, [chatMessagesRef]);

  useEffect(() => {
    scrollToBottom(chatMessagesRef.current);
  }, [chatMessagesRef, history.length]);

  return (
    <div
      className="chat__messages pb-4 overflow-y-scroll scrollbar-none"
      ref={chatMessagesRef}
    >
      <div className="chat-messages h-full grid items-end">
        <div className="chat-messages__wrap">
          <div className="w-full pb-4"></div>
          {!history.length ? (
            <EmptyMessages />
          ) : (
            historyWithGroupsAndReactions.map((message) => (
              <ChatMessage key={message.idMessage} {...message} />
            ))
          )}
          <div className="w-full pb-4"></div>
        </div>
      </div>
    </div>
  );
};
