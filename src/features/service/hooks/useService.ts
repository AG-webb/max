import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { handleIsActionLoading } from "@/shared/utils";
import {
  actionResultSelector,
  chatsSelector,
  lastMessagesSelector,
} from "../model/serviceSelectors";

export const useService = () => {
  const chats = useAppSelector(chatsSelector);
  const lastMessages = useAppSelector(lastMessagesSelector);
  const actionResult = useAppSelector(actionResultSelector);
  const handleIsLoading = (actionResultType: string) =>
    handleIsActionLoading(actionResult, actionResultType);
  const dispatch = useAppDispatch();

  return {
    chats,
    lastMessages,
    handleIsLoading,
    actionResult,
    dispatch,
  };
};
