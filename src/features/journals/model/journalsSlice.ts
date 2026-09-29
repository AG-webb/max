import {
  DEFAULT_ACTION_RESULT,
  SLICE_NAMES,
} from "@/app/store/store.constants";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import { mergeMessages } from "@/shared/utils";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatHistory, JournalsState } from "../types";
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
    addSendedMessageToHistory: (state, action: PayloadAction<ChatHistory>) => {
      const message = action.payload;

      if (state.chatsHistory) {
        state.chatsHistory[message.chatId] = mergeMessages(
          state.chatsHistory[message.chatId],
          [message],
        );
      } else {
        state.chatsHistory = {
          [message.chatId]: mergeMessages([], [message]),
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChatHistory.fulfilled, (state, action) => {
      const { chatId, history } = action.payload;

      if (state.chatsHistory) {
        state.chatsHistory[chatId] = mergeMessages(
          state.chatsHistory[chatId],
          history,
        );
      } else {
        state.chatsHistory = {
          [chatId]: mergeMessages([], history),
        };
      }
    });

    addThunkMatchers(builder, getChatHistory);
  },
});

export const { resetAuthState, addSendedMessageToHistory } =
  journalsSlice.actions;

export default journalsSlice.reducer;
