import type { ChatsNotification } from "@/features/notifications";
import { createChatHistory } from "@/shared/utils/createChatHistory";
import type { JournalsState } from "../types";
import { addChatHistory } from "./addChatHistory";
import { changeOutgoingMessageStatus } from "./changeOutgoingMessageStatus";
import { markHistoryAsDeletedOrEdited } from "./markHistoryAsDeletedOrEdited";

export const handleNotificationReceived = (
  state: JournalsState,
  notification: ChatsNotification,
) => {
  const { typeWebhook } = notification;

  switch (typeWebhook) {
    case "incomingMessageReceived":
    case "outgoingMessageReceived":
    case "outgoingAPIMessageReceived": {
      const { messageData } = notification;

      if (
        messageData.typeMessage === "deletedMessage" ||
        messageData.typeMessage === "editedMessage"
      ) {
        const isEdited = messageData.typeMessage === "editedMessage";
        let historyId: string;

        if (isEdited) {
          const { editedMessageData } = messageData;
          historyId = editedMessageData.stanzaId;
        } else {
          const { deletedMessageData } = messageData;
          historyId = deletedMessageData.stanzaId;
        }

        markHistoryAsDeletedOrEdited(
          state,
          notification.senderData.chatId,
          historyId,
          isEdited,
        );

        return;
      }

      if (typeWebhook === "incomingMessageReceived") {
        addChatHistory(
          state,
          notification.senderData.chatId,
          createChatHistory(notification),
        );
      } else {
        console.log("outgoing");
      }
      return;
    }
    case "outgoingMessageStatus": {
      changeOutgoingMessageStatus(
        state,
        notification.chatId,
        notification.idMessage,
        notification.status,
      );
      return;
    }
    case "quotaExceeded": {
      const { quotaData } = notification;

      state.actionResult.message = quotaData.description;
      state.actionResult.status = "error";
      state.actionResult.type = "quotaExceeded";
      throw new Error(quotaData.description);
    }
  }
};
