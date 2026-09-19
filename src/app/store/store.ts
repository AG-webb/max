import authReducer from "@/features/auth/model/authSlice";
import journalsReducer from "@/features/journals/model/journalsSlice";
import serviceReducer from "@/features/service/model/serviceSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    service: serviceReducer,
    journals: journalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
