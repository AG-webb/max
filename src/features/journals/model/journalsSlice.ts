import {
  DEFAULT_ACTION_RESULT,
  SLICE_NAMES,
} from "@/app/store/store.constants";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatHistory, JournalsState } from "../types";
import { getChatHistory } from "./journalsThunks";

const initialState: JournalsState = {
  chatHistory: null,
  actionResult: DEFAULT_ACTION_RESULT,
};

export const journalsSlice = createSlice({
  name: SLICE_NAMES.JOURNALS,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
    setChatHistory: (state, action: PayloadAction<ChatHistory[]>) => {
      if (state.chatHistory) {
        state.chatHistory = [...state.chatHistory, ...action.payload];
      } else {
        state.chatHistory = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChatHistory.fulfilled, (state, action) => {
      state.chatHistory = action.payload;
    });

    addThunkMatchers(builder, getChatHistory);
  },
});

export const { resetAuthState, setChatHistory } = journalsSlice.actions;

export default journalsSlice.reducer;
