import { DEFAULT_ACTION_RESULT, SLICE_NAMES } from "@/app/store";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import type { StateInstance } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../types";
import {
  getQrCode,
  getStateInstance,
  logout,
  sendAuthorizationPassword,
} from "./authThunks";

const initialState: AuthState = {
  qrCode: null,
  stateInstance: null,
  actionResult: DEFAULT_ACTION_RESULT,
};

const authSlice = createSlice({
  name: SLICE_NAMES.AUTH,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
    setAuthenticated: (state, action: PayloadAction<StateInstance>) => {
      state.stateInstance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQrCode.fulfilled, (state, action) => {
        state.qrCode = action.payload;
      })
      .addCase(logout.fulfilled, (state, action) => {
        const { isLogout } = action.payload;

        if (isLogout) {
          state.stateInstance = "notAuthorized";
        }
      })
      .addCase(getStateInstance.fulfilled, (state, action) => {
        state.stateInstance = action.payload.stateInstance;
      });

    addThunkMatchers(builder, getQrCode);
    addThunkMatchers(builder, logout);
    addThunkMatchers(builder, getStateInstance);
    addThunkMatchers(builder, sendAuthorizationPassword);
  },
});

export const { resetAuthState, setAuthenticated } = authSlice.actions;

export default authSlice.reducer;
