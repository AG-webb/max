import type { JournalsState } from "../types";

export const getChatsHistory = (state: JournalsState, chatId: string) => {
  if (!state.chatsHistory) {
    state.chatsHistory = {};
  }

  if (!state.chatsHistory[chatId]) {
    state.chatsHistory[chatId] = [];
  }

  return state.chatsHistory[chatId];
};
