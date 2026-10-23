import { ChatHeader, ChatInput, ChatMessages } from "@/components/chat";
import { Spinner } from "@/components/loading";
import { getChatHistory, useJournals } from "@/features/journals";
import { useService } from "@/features/service";
import { useEffect } from "react";
import { useParams } from "react-router";

const Chat = () => {
  const { chatId } = useParams();
  const { chats, avatars, dispatch } = useService();
  const { chatsHistory } = useJournals();

  const currentChat = chats?.find((chat) => chat.chatId === chatId);

  useEffect(() => {
    if (!chatId) return;

    dispatch(getChatHistory({ chatId }));
  }, [chatId, dispatch]);

  if (!currentChat || !chatId) {
    return <Spinner className="min-h-screen" />;
  }

  const chatAvatarSrc = avatars?.[chatId] || null;
  const currentChatHistory = chatsHistory?.[chatId];

  return (
    <div className="chat h-screen grid grid-rows-[66px_minmax(0,1fr)]">
      <div className="chat__header flex items-center px-4 py-3.5 bg-dark-primary border-b border-b-divider-secondary">
        <ChatHeader avatarSrc={chatAvatarSrc} name={currentChat.name} />
      </div>
      <div className="chat__body grid grid-rows-1 px-4">
        <div className="chat__body-wrap w-full max-w-175 mx-auto grid grid-rows-[minmax(0,1fr)_64px]">
          {currentChatHistory ? (
            <ChatMessages key={chatId} history={currentChatHistory} />
          ) : (
            <Spinner className="min-h-full" />
          )}
          <div className="chat__input">
            <ChatInput chatId={chatId} chatType={currentChat.type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
