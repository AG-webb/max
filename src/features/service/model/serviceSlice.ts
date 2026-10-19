import { DEFAULT_ACTION_RESULT, SLICE_NAMES } from "@/app/store";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import type { ChatHistory } from "@/features/journals";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ServiceState } from "../types";
import { getChats } from "./serviceThunks";

const initialState: ServiceState = {
  chats: null,
  lastMessages: null,
  avatars: null,
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
    addChatAvatar: (
      state,
      action: PayloadAction<{ urlAvatar: string; chatId: string }>,
    ) => {
      if (state.chats) {
        const { urlAvatar, chatId } = action.payload;

        if (state.avatars) {
          state.avatars[chatId] = urlAvatar;
        } else {
          state.avatars = { [chatId]: urlAvatar };
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.chats = action.payload;
    });

    addThunkMatchers(builder, getChats);
  },
});

export const { resetAuthState, addLastMessage, addChatAvatar } =
  serviceSlice.actions;

export default serviceSlice.reducer;
