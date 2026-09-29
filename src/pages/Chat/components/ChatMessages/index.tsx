import type { ChatHistory } from "@/features/journals/types";
import { useLayoutEffect, type RefObject } from "react";
import ChatMessage from "../ChatMessage";
import EmptyMessages from "../EmptyMessages";
import { returnHistoryWithReactions } from "./utils/returnHistoryWithReactions";

const ChatMessages = ({
  history,
  chatMessagesRef,
}: {
  history: ChatHistory[] | [];
  chatMessagesRef: RefObject<HTMLDivElement | null>;
}) => {
  useLayoutEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTo(0, chatMessagesRef.current.scrollHeight);
    }
  }, [chatMessagesRef]);

  const historyWithReactions = returnHistoryWithReactions(history);

  return (
    <div className="chat-messages h-full grid items-end">
      <div className="chat-messages__wrap">
        <div className="w-full pb-4"></div>
        {!history.length ? (
          <EmptyMessages />
        ) : (
          historyWithReactions.map((message) => {
            if (message.typeMessage !== "quotedMessage") {
              return <ChatMessage key={message.idMessage} {...message} />;
            }
          })
        )}
        <div className="w-full pb-4"></div>
      </div>
    </div>
  );
};

export default ChatMessages;
