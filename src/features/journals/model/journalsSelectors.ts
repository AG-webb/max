import type { RootState } from "@/app/store/store";

export const chatHistorySelector = (state: RootState) => state.journals.chatHistory;
export const actionResultSelector = (state: RootState) => state.journals.actionResult;
