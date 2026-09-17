import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  chatsSelector,
  errorSelector,
  statusSelector,
} from "../model/serviceSelectors";

export const useService = () => {
  const chats = useAppSelector(chatsSelector);
  const status = useAppSelector(statusSelector);
  const error = useAppSelector(errorSelector);
  const dispatch = useAppDispatch();

  return {
    chats,
    status,
    error,
    dispatch,
  };
};
