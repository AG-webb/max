import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { devMaxItems } from "@/shared/constants/variables";
import { delay, handleIsActionLoading } from "@/shared/utils";
import { serviceApi } from "../api/service.api";
import {
  actionResultSelector,
  avatarsSelector,
  chatsSelector,
  lastMessagesSelector,
} from "../model/serviceSelectors";
import type { Chat } from "../types";

async function loadChatsAvatar(
  chats: Chat[],
  onUpdate: (urlAvatar: string, chatId: string) => void,
) {
  for (const [index, chat] of chats.entries()) {
    try {
      // REMOVE!! STATEMENT FOR NOT TO OVERLOAD NETWORK
      if (index > devMaxItems) return;

      const response = await serviceApi.getAvatar(chat.chatId);

      onUpdate(response.data.urlAvatar, chat.chatId);
    } catch (error) {
      console.error(`Failed to load last message of ${chat.chatId}`, error);
    }

    if (index < chats.length - 1) {
      await delay(1100);
    }
  }
}

export const useService = () => {
  const chats = useAppSelector(chatsSelector);
  const lastMessages = useAppSelector(lastMessagesSelector);
  const avatars = useAppSelector(avatarsSelector);
  const actionResult = useAppSelector(actionResultSelector);
  const handleIsLoading = (actionResultType: string) =>
    handleIsActionLoading(actionResult, actionResultType);
  const dispatch = useAppDispatch();

  return {
    chats,
    lastMessages,
    avatars,
    handleIsLoading,
    loadChatsAvatar,
    actionResult,
    dispatch,
  };
};
