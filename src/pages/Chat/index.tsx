import { useAppDispatch } from "@/app/store/store";
import Avatar from "@/components/ui/Avatar";
import PageLoader from "@/components/ui/PageLoader";
import { useJournals } from "@/features/journals/hooks/useJournals";
import { notificationReceived } from "@/features/journals/model/journalsSlice";
import type { Notification } from "@/features/notifications/types";
import { useService } from "@/features/service/hooks/useService";
import { ROUTES } from "@/shared/constants";
import { useRef } from "react";
import { Link, useParams } from "react-router";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

const notification: Notification = {
  typeWebhook: "incomingMessageReceived",
  instanceData: {
    idInstance: 3100000000,
    wid: "79991234567@c.us",
    typeInstance: "v3",
  },
  timestamp: 1790936853085,
  idMessage: "1763115112347",
  senderData: {
    chatId: "8456469015",
    chatName: "Armen",
    chatType: "user",
    sender: "10000000",
    senderName: "Armen",
    senderType: "user",
    senderContactName: "Armen",
    senderPhoneNumber: 79876543210,
  },
  messageData: {
    typeMessage: "textMessage",
    textMessageData: {
      textMessage: "Test message goes here!!!",
      isForwarded: false,
      forwardingScore: 0,
    },
    // quotedMessage: {
    //   stanzaId: "11",
    //   participant: "asdsad",
    // },
  },
};

const Chat = () => {
  const { chatId } = useParams();
  const { chats } = useService();
  const { chatsHistory } = useJournals();
  const chatMessagesRef = useRef<HTMLDivElement | null>(null);

  const currentChat = chats?.find((chat) => chat.chatId === chatId);
  const currentChatHistory = chatsHistory && chatId && chatsHistory[chatId];

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(notificationReceived(notification));
  };

  if (!currentChat || !chatId) {
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
        <div className="chat__actions">
          <div className="ml-12 cursor-pointer bg-dark-secondary p-4" onClick={handleClick}>Notification</div>
        </div>
      </div>
      <div className="chat__body grid grid-rows-1 px-4">
        <div className="chat__body-wrap w-full max-w-175 mx-auto grid grid-rows-[minmax(0,1fr)_64px]">
          <div
            className="chat__messages pb-4 overflow-y-scroll scrollbar-none"
            ref={chatMessagesRef}
          >
            {currentChatHistory ? (
              <ChatMessages
                key={chatId}
                history={currentChatHistory}
                chatMessagesRef={chatMessagesRef}
              />
            ) : null}
          </div>
          <div className="chat__input">
            <ChatInput chatId={chatId} chatType={currentChat.type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
