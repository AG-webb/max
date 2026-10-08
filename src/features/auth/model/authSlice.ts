import {
  DEFAULT_ACTION_RESULT,
  SLICE_NAMES,
} from "@/app/store/store.constants";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import type { StateInstance } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../types";
import { getQrCode, getStateInstance } from "./authThunks";

const initialState: AuthState = {
  qrCode: null,
  authenticated: null,
  actionResult: DEFAULT_ACTION_RESULT,
};

export const authSlice = createSlice({
  name: SLICE_NAMES.AUTH,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
    setAuthenticated: (state, action: PayloadAction<StateInstance>) => {
      state.authenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQrCode.fulfilled, (state, action) => {
        state.qrCode = action.payload;
      })
      .addCase(getStateInstance.fulfilled, (state, action) => {
        state.authenticated = action.payload.stateInstance;
      });

    addThunkMatchers(builder, getQrCode);
    addThunkMatchers(builder, getStateInstance);
  },
});

export const { resetAuthState, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;
