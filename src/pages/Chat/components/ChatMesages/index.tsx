import type { ChatHistory } from "@/features/journals/types";
import { useLayoutEffect, type RefObject } from "react";
import ChatMessage from "../ChatMessage";

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

  return (
    <div className="chat-messages">
      <div className="chat-messages__item">
        {history.map((message) => (
          <ChatMessage key={message.chatId} {...message} />
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
