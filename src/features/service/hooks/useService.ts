import { useAppDispatch, useAppSelector } from "@/app/store";
import { devMaxRequests } from "@/shared/constants";
import { handleIsActionLoading } from "@/shared/utils";
import type { Chat } from "@/types/chats";
import { serviceApi } from "../api/service.api";
import {
  actionResultSelector,
  avatarsSelector,
  chatsSelector,
  lastMessagesSelector,
} from "../model/serviceSelectors";

async function loadChatsAvatar(
  chats: Chat[],
  onUpdate: (urlAvatar: string, chatId: string) => void,
) {
  for (const [index, chat] of chats.entries()) {
    // REMOVE!! STATEMENT FOR NOT TO OVERLOAD NETWORK
    if (index > devMaxRequests - 1) return;
    // ------------

    try {
      const { data } = await serviceApi.getAvatar(chat.chatId);

      onUpdate(data.urlAvatar, chat.chatId);
    } catch (error) {
      console.error(`Failed to load Avatar of ${chat.chatId}`, error);
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
