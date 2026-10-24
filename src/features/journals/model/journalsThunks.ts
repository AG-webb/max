import { type RootState } from "@/app/store";
import { getApiErrorMessage } from "@/services/api/api.errors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { journalsApi } from "../api/journals.api";
import type { GetChatHistoryData } from "../types";

export const ACTION_TYPES = {
  GET_CHATS_HISTORY: "journals/getChatHistory",
};

export const getChatHistory = createAsyncThunk(
  ACTION_TYPES.GET_CHATS_HISTORY,
  async ({ chatId, count }: GetChatHistoryData, { rejectWithValue }) => {
    try {
      const { data } = await journalsApi.getChatHistory({ chatId, count });

      return { chatId: chatId, history: data };
    } catch (error) {
      const errorMessage = getApiErrorMessage(error);

      return rejectWithValue(errorMessage);
    }
  },
  {
    condition: ({ chatId }, { getState }) => {
      const state = getState() as RootState;
      const history =
        state.journals &&
        state.journals.chatsHistory &&
        state.journals.chatsHistory[chatId];

      return !history;
    },
  },
);
