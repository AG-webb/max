import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { actionResultSelector } from "@/features/auth/model/authSelectors";
import { chatHistorySelector } from "../model/journalsSelectors";

export const useJournals = () => {
  const chatHistory = useAppSelector(chatHistorySelector);
  const actionResult = useAppSelector(actionResultSelector);
  const dispatch = useAppDispatch();

  return {
    chatHistory,
    actionResult,
    dispatch,
  };
};
