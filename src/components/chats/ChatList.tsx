import { useJournals } from "@/features/journals";
import {
  ACTION_TYPES,
  addChatAvatar,
  addLastMessage,
  getChats,
  useService,
} from "@/features/service";
import { useEffect } from "react";
import { ChatCell } from "./ChatCell";
import { ChatsSkeleton } from "./ChatsSkeleton";
import "./style.css";

export const ChatList = () => {
  const {
    chats,
    lastMessages,
    avatars,
    handleIsLoading,
    dispatch,
    loadChatsAvatar,
  } = useService();
  const { loadChatsLastMessage } = useJournals();

  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  useEffect(() => {
    if (!chats) return;

    loadChatsLastMessage(chats, (lastMessage) => {
      dispatch(addLastMessage(lastMessage));
    });
  }, [chats, loadChatsLastMessage, dispatch]);

  useEffect(() => {
    if (!chats?.length) return;

    loadChatsAvatar(chats, (urlAvatar, chatId) => {
      dispatch(addChatAvatar({ urlAvatar, chatId }));
    });
  }, [chats, loadChatsAvatar, dispatch]);

  if (handleIsLoading(ACTION_TYPES.GET_CHATS)) {
    return <ChatsSkeleton />;
  }

  return chats?.map((chat) => {
    const lastMessage = lastMessages?.[chat.chatId] || null;
    const avatarSrc = avatars?.[chat.chatId] || null;

    return (
      <ChatCell
        key={chat.chatId}
        lastMessage={lastMessage}
        avatarSrc={avatarSrc}
        {...chat}
      />
    );
  });
};
