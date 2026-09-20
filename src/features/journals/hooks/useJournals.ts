import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { actionResultSelector } from "@/features/auth/model/authSelectors";
import type { Chat } from "@/features/service/types";
import { devMaxItems } from "@/shared/constants";
import { delay } from "@/shared/utils";
import { journalsApi } from "../api/journals.api";
import { chatHistorySelector } from "../model/journalsSelectors";
import type { ChatHistory } from "../types";

async function loadChatsLastMessage(
  chats: Chat[],
  onUpdate: (lastMessage: ChatHistory[]) => void,
) {
  for (const [index, chat] of chats.entries()) {
    try {
      // REMOVE!! STATEMENT FOR NOT TO OVERLOAD NETWORK
      if (index > devMaxItems) return;

      const lastMessage = await journalsApi.getChatHistory({
        chatId: chat.chatId,
        count: 1,
      });

      onUpdate(lastMessage.data ?? []);
    } catch (error) {
      console.error(`Failed to load last message of ${chat.chatId}`, error);
    }

    if (index < chats.length - 1) {
      await delay(1100);
    }
  }
}

export const useJournals = () => {
  const chatHistory = useAppSelector(chatHistorySelector);
  const actionResult = useAppSelector(actionResultSelector);
  const dispatch = useAppDispatch();

  return {
    chatHistory,
    actionResult,
    loadChatsLastMessage,
    dispatch,
  };
};
