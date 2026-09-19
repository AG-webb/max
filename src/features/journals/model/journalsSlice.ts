import {
  DEFAULT_ACTION_RESULT,
  SLICE_NAMES,
} from "@/app/store/store.constants";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import { createSlice } from "@reduxjs/toolkit";
import type { JournalsState } from "../types";
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
    setChatHistory: (state) => {
      state.chatHistory = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChatHistory.fulfilled, (state, action) => {
      state.chatHistory = action.payload;
    });

    addThunkMatchers(builder, getChatHistory);
  },
});

export const { resetAuthState } = journalsSlice.actions;

export default journalsSlice.reducer;
