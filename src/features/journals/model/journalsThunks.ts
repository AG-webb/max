import type { RootState } from "@/app/store/store";
import { getApiError } from "@/services/api/api.errors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { journalsApi } from "../api/journals.api";
import type { ChatHistoryData } from "../types";

export const ACTION_TYPES = {
  GET_CHATS_HISTORY: "journals/getChatHistory",
};

export const getChatHistory = createAsyncThunk(
  ACTION_TYPES.GET_CHATS_HISTORY,
  async ({ chatId, count }: ChatHistoryData, { rejectWithValue }) => {
    try {
      const { data } = await journalsApi.getChatHistory({ chatId, count });

      return { chatId: chatId, history: data };
    } catch (error) {
      const apiError = getApiError(error);

      return rejectWithValue(apiError.message);
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
