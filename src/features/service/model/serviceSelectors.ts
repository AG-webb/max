import type { RootState } from "@/app/store/store";

export const chatsSelector = (state: RootState) => state.service.chats;
export const lastMessagesSelector = (state: RootState) => state.service.lastMessages;
export const actionResultSelector = (state: RootState) => state.service.actionResult;
