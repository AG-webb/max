import type { ChatHistory, JournalsState } from "../types";
import { getChatsHistory } from "./getChatsHistory";
import { mergeHistory } from "./mergeHistory";

export const addChatHistory = (
  state: JournalsState,
  chatId: string,
  history: ChatHistory | ChatHistory[],
) => {
  const stateHistory = getChatsHistory(state, chatId);

  state.chatsHistory![chatId] = mergeHistory(stateHistory, history);
};
