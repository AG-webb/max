import { useAppDispatch, useAppSelector } from "@/app/store";
import { actionResultSelector } from "@/features/auth/model/authSelectors";
import { devMaxRequests } from "@/shared/constants";
import { handleIsActionLoading } from "@/shared/utils";
import type { Chat } from "@/types/chats";
import { journalsApi } from "../api/journals.api";
import { chatsHistorySelector } from "../model/journalsSelectors";
import type { ChatHistory } from "../types";

async function loadChatsLastMessage(
  chats: Chat[],
  onUpdate: (lastMessage: ChatHistory[]) => void,
  // signal?: AbortSignal,
) {
  for (const [index, chat] of chats.entries()) {
    // REMOVE!! STATEMENT FOR NOT TO OVERLOAD NETWORK
    if (index > devMaxRequests - 1) return;
    // ------------

    try {
      const response = await journalsApi.getChatHistory({
        chatId: chat.chatId,
        count: 1,
      });

      onUpdate(response.data ?? []);
    } catch (error) {
      console.error(`Failed to load last message of ${chat.chatId}`, error);
    }
  }
}

export const useJournals = () => {
  const chatsHistory = useAppSelector(chatsHistorySelector);
  const actionResult = useAppSelector(actionResultSelector);
  const handleIsLoading = (actionResultType: string) =>
    handleIsActionLoading(actionResult, actionResultType);
  const dispatch = useAppDispatch();

  return {
    chatsHistory,
    actionResult,
    handleIsLoading,
    loadChatsLastMessage,
    dispatch,
  };
};
