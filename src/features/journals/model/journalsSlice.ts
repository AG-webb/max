import { DEFAULT_ACTION_RESULT, SLICE_NAMES } from "@/app/store";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import type { ChatsNotification } from "@/features/notifications";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatHistory, JournalsState } from "../types";
import { addChatHistory, handleNotificationReceived } from "../utils";
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
    notificationReceived: (state, action: PayloadAction<ChatsNotification>) => {
      const notification = action.payload;

      handleNotificationReceived(state, notification);
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
