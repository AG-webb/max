import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../types";
import { getQrCode, getStateInstance } from "./authThunks";

const initialState: AuthState = {
  qrCode: null,
  authenticated: null,
  error: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQrCode.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQrCode.fulfilled, (state, action) => {
        state.status = "loaded";
        state.qrCode = action.payload;
      })
      .addCase(getQrCode.rejected, (state) => {
        state.status = "error";
      })

      .addCase(getStateInstance.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStateInstance.fulfilled, (state, action) => {
        state.status = "loaded";
        state.authenticated = action.payload.stateInstance;
      })
      .addCase(getStateInstance.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { resetAuthState } = authSlice.actions;

export default authSlice.reducer;
