import { mergeMessages } from "@/shared/utils/mergeMessages";
import type { ChatHistory, JournalsState } from "../types";
import { getChatsHistory } from "./getChatsHistory";

export const addChatHistory = (
  state: JournalsState,
  chatId: string,
  history: ChatHistory | ChatHistory[],
) => {
  const stateHistory = getChatsHistory(state, chatId);

  state.chatsHistory![chatId] = mergeMessages(stateHistory, history);
};
