import type { RootState } from "@/app/store";

export const chatsSelector = (state: RootState) => state.service.chats;
export const statusSelector = (state: RootState) => state.service.status;
export const errorSelector = (state: RootState) => state.service.error;
