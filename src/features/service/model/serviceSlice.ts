import {
  DEFAULT_ACTION_RESULT,
  SLICE_NAMES,
} from "@/app/store/store.constants";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import { createSlice } from "@reduxjs/toolkit";
import type { serviceState } from "../types";
import { getChats } from "./serviceThunks";

const initialState: serviceState = {
  chats: null,
  actionResult: DEFAULT_ACTION_RESULT,
};

export const serviceSlice = createSlice({
  name: SLICE_NAMES.SERVICE,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getChats.fulfilled, (state, action) => {
      state.chats = action.payload?.map((chat) => ({
        ...chat,
        avatarSrc: null,
      }));
    });

    addThunkMatchers(builder, getChats);
  },
});

export const { resetAuthState } = serviceSlice.actions;

export default serviceSlice.reducer;
