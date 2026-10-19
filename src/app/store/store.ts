import { authReducer } from "@/features/auth";
import { journalsReducer } from "@/features/journals";
import { sendingReducer } from "@/features/sending";
import { serviceReducer } from "@/features/service";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    service: serviceReducer,
    journals: journalsReducer,
    sending: sendingReducer,
  },
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
