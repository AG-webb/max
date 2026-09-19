import type { DefaultStateType } from "@/types";
import {
  isFulfilled,
  isPending,
  isRejected,
  type ActionReducerMapBuilder,
  type AsyncThunk,
  type AsyncThunkConfig,
} from "@reduxjs/toolkit";

export const addThunkMatchers = <
  State extends DefaultStateType,
  Returned,
  ThunkArg,
  AsyncThunkApiConfig extends AsyncThunkConfig,
>(
  builder: ActionReducerMapBuilder<State>,
  thunk: AsyncThunk<Returned, ThunkArg, AsyncThunkApiConfig>,
) => {
  builder
    .addMatcher(isPending(thunk), (state) => {
      state.actionResult = {
        type: thunk.typePrefix,
        status: "loading",
        message: "",
      };
    })
    .addMatcher(isFulfilled(thunk), (state) => {
      state.actionResult = {
        type: thunk.typePrefix,
        status: "loaded",
        message: "",
      };
    })
    .addMatcher(isRejected(thunk), (state, action) => {
      const message =
        "error" in action &&
        action.error &&
        typeof action.error === "object" &&
        "message" in action.error &&
        typeof action.error.message === "string"
          ? action.error.message
          : "";

      state.actionResult = {
        type: thunk.typePrefix,
        status: "error",
        message,
      };
    });
};
