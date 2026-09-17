import { getApiError } from "@/services/api/api.errors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { serviceApi } from "../api/service.api";

export const getChats = createAsyncThunk(
  "service/getChats",
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
