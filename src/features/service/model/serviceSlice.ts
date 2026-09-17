import { createSlice } from "@reduxjs/toolkit";
import type { serviceState } from "../types";
import { getChats } from "./serviceThunks";

const initialState: serviceState = {
  chats: null,
  error: null,
  status: "idle",
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    resetAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.status = "loaded";
        state.chats = action.payload;
      })
      .addCase(getChats.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { resetAuthState } = serviceSlice.actions;

export default serviceSlice.reducer;
