import { getApiError } from "@/services/api/api.errors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { journalsApi } from "../api/journals.api";
import type { ChatHistoryData } from "../types";

export const getChatHistory = createAsyncThunk(
  "auth/getChatHistory",
  async ({ chatId, count }: ChatHistoryData, { rejectWithValue }) => {
    try {
      const { data } = await journalsApi.getChatHistory({ chatId, count });

      return data;
    } catch (error) {
      const apiError = getApiError(error);

      return rejectWithValue(apiError.message);
    }
  },
);
