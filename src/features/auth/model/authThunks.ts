import { getApiError } from "@/services/api/api.errors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/auth.api";

export const getQrCode = createAsyncThunk(
  "auth/getQrCode",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.getQrCode();

      if (data.type == "error" || data.type == "already_registered")
        throw data.message;

      return data.message;
    } catch (error) {
      const apiError = getApiError(error);

      return rejectWithValue(apiError.message);
    }
  },
);

export const getStateInstance = createAsyncThunk(
  "auth/getStateInstance",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.getStateInstance();

      return data;
    } catch (error) {
      const apiError = getApiError(error);

      return rejectWithValue(apiError.message);
    }
  },
);
