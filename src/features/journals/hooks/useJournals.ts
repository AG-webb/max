import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { actionResultSelector } from "@/features/auth/model/authSelectors";
import { getChats } from "@/features/service/model/serviceThunks";
import type { Chat } from "@/features/service/types";
import { devMaxItems } from "@/shared/constants";
import { delay } from "@/shared/utils";
import { useEffect } from "react";
import { journalsApi } from "../api/journals.api";
import { chatsHistorySelector } from "../model/journalsSelectors";
import type { ChatHistory } from "../types";

async function loadChatsLastMessage(
  chats: Chat[],
  isSomeChatOpen: boolean,
  onUpdate: (lastMessage: ChatHistory[]) => void,
) {
  for (const [index, chat] of chats.entries()) {
    try {
      // REMOVE!! STATEMENT FOR NOT TO OVERLOAD NETWORK
      if (index > devMaxItems) return;

      if (isSomeChatOpen && index === 0) {
        await delay(1100);
      }

      const response = await journalsApi.getChatHistory({
        chatId: chat.chatId,
        count: 1,
      });

      onUpdate(response.data ?? []);
    } catch (error) {
      console.error(`Failed to load last message of ${chat.chatId}`, error);
    }

    if (index < chats.length - 1) {
      await delay(1100);
    }
  }
}

export const useJournals = () => {
  const chatsHistory = useAppSelector(chatsHistorySelector);
  const actionResult = useAppSelector(actionResultSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  return {
    chatsHistory,
    actionResult,
    loadChatsLastMessage,
    dispatch,
  };
};
