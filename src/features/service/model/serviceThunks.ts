import { getApiErrorMessage } from "@/services/api";
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
      const errorMessage = getApiErrorMessage(error);

      return rejectWithValue(errorMessage);
    }
  },
);
