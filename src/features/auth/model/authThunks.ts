import { getApiErrorMessage } from "@/services/api/api.errors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/auth.api";

export const ACTION_TYPES = {
  GET_QR_CODE: "auth/getQrCode",
  LOGOUT: "auth/logout",
  GET_STATE_INSTANCE: "auth/getStateInstance",
  SEND_AUTHORIZATION_PASSWORD: "auth/sendAuthorizationPassword",
};

export const getQrCode = createAsyncThunk(
  ACTION_TYPES.GET_QR_CODE,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.getQrCode();

      return data.message;
    } catch (error) {
      const errorMessage = getApiErrorMessage(error);

      return rejectWithValue(errorMessage);
    }
  },
);

export const logout = createAsyncThunk(
  ACTION_TYPES.LOGOUT,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.logout();

      return data;
    } catch (error) {
      const errorMessage = getApiErrorMessage(error);

      return rejectWithValue(errorMessage);
    }
  },
);

export const getStateInstance = createAsyncThunk(
  ACTION_TYPES.GET_STATE_INSTANCE,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.getStateInstance();

      return data;
    } catch (error) {
      const errorMessage = getApiErrorMessage(error);

      return rejectWithValue(errorMessage);
    }
  },
);

export const sendAuthorizationPassword = createAsyncThunk(
  ACTION_TYPES.SEND_AUTHORIZATION_PASSWORD,
  async ({ password }: { password: string }, { rejectWithValue }) => {
    try {
      const { data } = await authApi.sendAuthorizationPassword(password);

      return data;
    } catch (error) {
      const errorMessage = getApiErrorMessage(error);

      return rejectWithValue(errorMessage);
    }
  },
);
