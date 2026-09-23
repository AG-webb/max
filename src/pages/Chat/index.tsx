import Avatar from "@/components/ui/Avatar";
import PageLoader from "@/components/ui/PageLoader";
import { useJournals } from "@/features/journals/hooks/useJournals";
import { getChatHistory } from "@/features/journals/model/journalsThunks";
import { useService } from "@/features/service/hooks/useService";
import { ROUTES } from "@/shared/constants";
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMesages";

const Chat = () => {
  const { chatId } = useParams();
  const { chats, dispatch } = useService();
  const { chatsHistory } = useJournals();
  const chatMessagesRef = useRef<HTMLDivElement | null>(null);

  const currentChat = chats?.find((chat) => chat.chatId === chatId);
  const currentChatHistory = chatsHistory && chatId && chatsHistory[chatId];

  useEffect(() => {
    if (chatId) {
      dispatch(getChatHistory({ chatId }));
    }
  }, [chatId, dispatch]);

  if (!currentChat) {
    return <PageLoader className="min-h-screen" />;
  }

  return (
    <div className="chat h-screen grid grid-rows-[66px_minmax(0,1fr)]">
      <div className="chat__header flex items-center px-4 py-3.5 bg-dark-primary border-b border-b-divider-secondary">
        <Link
          to={ROUTES.ROOT}
          className="chat__back flex items-center justify-center w-10 h-10"
        >
          &lt;
        </Link>
        <div className="chat__info flex items-center pl-2">
          <div className="chat-cell__picture flex items-center justify-center">
            <Avatar
              size="small"
              src={currentChat.avatarSrc}
              name={currentChat.name}
            />
          </div>
          <div className="h-full ml-3">
            <div className="relative flex justify-between items-center">
              <div>{currentChat.name}</div>
            </div>
            <div className="relative flex justify-between items-center">
              <div>Last seen recently</div>
            </div>
          </div>
        </div>
        <div className="chat__actions"></div>
      </div>
      <div className="chat__body grid grid-rows-1 px-4">
        <div className="chat__body-wrap w-full max-w-175 mx-auto grid grid-rows-[minmax(0,1fr)_64px]">
          <div
            className="chat__messages overflow-y-scroll"
            ref={chatMessagesRef}
          >
            {currentChatHistory && currentChatHistory?.length ? (
              <ChatMessages key={chatId} history={currentChatHistory} chatMessagesRef={chatMessagesRef} />
            ) : null}
          </div>
          <div className="chat__input">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
