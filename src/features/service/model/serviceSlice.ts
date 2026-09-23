import {
  DEFAULT_ACTION_RESULT,
  SLICE_NAMES,
} from "@/app/store/store.constants";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import type { ChatHistory } from "@/features/journals/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Chat, serviceState } from "../types";
import { getChats } from "./serviceThunks";

const initialState: serviceState = {
  chats: null,
  lastMessages: null,
  actionResult: DEFAULT_ACTION_RESULT,
};

export const serviceSlice = createSlice({
  name: SLICE_NAMES.SERVICE,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
    addLastMessage: (state, action: PayloadAction<ChatHistory[]>) => {
      if (state.lastMessages) {
        state.lastMessages = [...state.lastMessages, ...action.payload];
      } else {
        state.lastMessages = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.chats = action.payload?.map(
        (chat): Chat => ({
          ...chat,
          avatarSrc: null,
        }),
      );
    });

    addThunkMatchers(builder, getChats);
  },
});

export const { resetAuthState, addLastMessage } = serviceSlice.actions;

export default serviceSlice.reducer;
