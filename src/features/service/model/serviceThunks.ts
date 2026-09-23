import { getApiError } from "@/services/api/api.errors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { serviceApi } from "../api/service.api";

export const ACTION_TYPES = {
  GET_CHATS: "service/getChats",
};

export const getChats = createAsyncThunk(
  ACTION_TYPES.GET_CHATS,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.getChats();

      return data;
    } catch (error) {
      const apiError = getApiError(error);

      return rejectWithValue(apiError.message);
    }
  },
);
