import type { JournalsState } from "../types";
import { getChatsHistory } from "./getChatsHistory";

export const markHistoryAsDeletedOrEdited = (
  state: JournalsState,
  chatId: string,
  historyId: string,
  isEdited: boolean = false,
) => {
  const history = getChatsHistory(state, chatId);

  state.chatsHistory![chatId] = history.map((history) => {
    if (history.idMessage === historyId) {
      return {
        ...history,
        ...(isEdited
          ? {
              isEdited: true,
              editedMessageId: historyId,
            }
          : {
              isDeleted: true,
              deletedMessageId: historyId,
            }),
      };
    }

    return history;
  });
};
