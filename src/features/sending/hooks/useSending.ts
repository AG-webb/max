import { useAppDispatch, useAppSelector } from "@/app/store";
import { handleIsActionLoading } from "@/shared/utils";
import { actionResultSelector } from "../model/sendingSelectors";

export const useSending = () => {
  const actionResult = useAppSelector(actionResultSelector);
  const handleIsLoading = (actionResultType: string) =>
    handleIsActionLoading(actionResult, actionResultType);
  const dispatch = useAppDispatch();

  return {
    handleIsLoading,
    actionResult,
    dispatch,
  };
};
