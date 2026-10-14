import type { RootState } from "@/app/store";

export const chatsHistorySelector = (state: RootState) =>
  state.journals.chatsHistory;
export const actionResultSelector = (state: RootState) =>
  state.journals.actionResult;
