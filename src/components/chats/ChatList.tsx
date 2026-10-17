import { useJournals } from "@/features/journals/hooks/useJournals";
import { getChatHistory } from "@/features/journals/model/journalsThunks";
import { useService } from "@/features/service/hooks/useService";
import {
  addChatAvatar,
  addLastMessage,
} from "@/features/service/model/serviceSlice";
import { ACTION_TYPES } from "@/features/service/model/serviceThunks";
import { useEffect } from "react";
import { useParams } from "react-router";
import { ChatCell } from "./ChatCell";
import { ChatsSkeleton } from "./ChatsSkeleton";
import "./style.css";

export const ChatList = () => {
  const { chatId } = useParams();
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
    if (chats) {
      loadChatsLastMessage(chats, !!chatId, (lastMessage) => {
        dispatch(addLastMessage(lastMessage));
      });
    }
  }, [chats, chatId, loadChatsLastMessage, dispatch]);

  useEffect(() => {
    if (chats) {
      loadChatsAvatar(chats, (urlAvatar, chatId) => {
        dispatch(addChatAvatar({ urlAvatar, chatId }));
      });
    }
  }, [chats, loadChatsAvatar, dispatch]);

  useEffect(() => {
    if (chatId) {
      dispatch(getChatHistory({ chatId }));
    }
  }, [chatId, dispatch]);

  if (handleIsLoading(ACTION_TYPES.GET_CHATS)) {
    return <ChatsSkeleton />;
  }

  return chats?.map((chat) => {
    const lastMessage =
      lastMessages?.find((message) => message.chatId === chat.chatId) || null;
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
