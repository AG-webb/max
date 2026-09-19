import { useAppDispatch, useAppSelector } from "@/app/store/store";
import {
  actionResultSelector,
  chatsSelector,
} from "../model/serviceSelectors";

export const useService = () => {
  const chats = useAppSelector(chatsSelector);
  const actionResult = useAppSelector(actionResultSelector);
  const dispatch = useAppDispatch();

  return {
    chats,
    actionResult,
    dispatch,
  };
};
