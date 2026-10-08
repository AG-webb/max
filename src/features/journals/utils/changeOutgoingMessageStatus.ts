import type { OutgoingStatusMessageType } from "@/types/chats";
import type { JournalsState } from "../types";
import { getChatsHistory } from "./getChatsHistory";

export const changeOutgoingMessageStatus = (
  state: JournalsState,
  chatId: string,
  idMessage: string,
  status: OutgoingStatusMessageType,
) => {
  const history = getChatsHistory(state, chatId);

  if (
    status === "failed" ||
    status === "noAccount" ||
    status === "notInGroup"
  ) {
    throw new Error(
      `Message with id ${idMessage} failed to send. Status: ${status}`,
    );
  }

  state.chatsHistory![chatId] = history.map((history) => {
    if (history.idMessage === idMessage) {
      return {
        ...history,
        statusMessage: status,
      };
    }

    return history;
  });
};
