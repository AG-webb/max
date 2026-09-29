import {
  DEFAULT_ACTION_RESULT,
  SLICE_NAMES,
} from "@/app/store/store.constants";
import { addThunkMatchers } from "@/app/store/utils/addThunkMatchers";
import type { DefaultStateType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "./sendingThunks";

const initialState: DefaultStateType = {
  actionResult: DEFAULT_ACTION_RESULT,
};

export const sendingSlice = createSlice({
  name: SLICE_NAMES.SENDING,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
    });

    addThunkMatchers(builder, sendMessage);
  },
});

export const { resetAuthState } = sendingSlice.actions;

export default sendingSlice.reducer;
