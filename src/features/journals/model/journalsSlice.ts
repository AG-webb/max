import {
  DEFAULT_ACTION_RESULT,
  SLICE_NAMES,
} from "@/app/store/store.constants";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import type { Notification } from "@/features/notifications/types";
import { createChatHistory } from "@/shared/utils";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatHistory, JournalsState } from "../types";
import { addChatHistory } from "../utils/addChatHistory";
import { markHistoryAsDeletedOrEdited } from "../utils/markHistoryAsDeletedOrEdited";
import { getChatHistory } from "./journalsThunks";

const initialState: JournalsState = {
  chatsHistory: null,
  actionResult: DEFAULT_ACTION_RESULT,
};

export const journalsSlice = createSlice({
  name: SLICE_NAMES.JOURNALS,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
    notificationReceived: (state, action: PayloadAction<Notification>) => {
      const notification = action.payload;
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

      addChatHistory(
        state,
        notification.senderData.chatId,
        createChatHistory(notification),
      );
    },
    addSendedMessageToHistory: (state, action: PayloadAction<ChatHistory>) => {
      const sendedMessage = action.payload;

      addChatHistory(state, sendedMessage.chatId, sendedMessage);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChatHistory.fulfilled, (state, action) => {
      const { chatId, history } = action.payload;

      addChatHistory(state, chatId, history);
    });

    addThunkMatchers(builder, getChatHistory);
  },
});

export const {
  resetAuthState,
  addSendedMessageToHistory,
  notificationReceived,
} = journalsSlice.actions;

export default journalsSlice.reducer;
