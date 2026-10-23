import { useAppDispatch, useAppSelector } from "@/app/store";
import { handleIsActionError, handleIsActionLoading } from "@/shared/utils";
import {
  actionResultSelector,
  qrCodeSelector,
  stateInstanceSelector,
} from "../model/authSelectors";

export const useAuth = () => {
  const qrCode = useAppSelector(qrCodeSelector);
  const actionResult = useAppSelector(actionResultSelector);
  const stateInstance = useAppSelector(stateInstanceSelector);
  const handleIsLoading = (actionResultType: string) =>
    handleIsActionLoading(actionResult, actionResultType);
  const handleIsError = (actionResultType: string) =>
    handleIsActionError(actionResult, actionResultType);
  const isAuthenticated =
    stateInstance === "authorized" || stateInstance === "suspended";
  const dispatch = useAppDispatch();

  return {
    qrCode,
    actionResult,
    stateInstance,
    isAuthenticated,
    handleIsLoading,
    handleIsError,
    dispatch,
  };
};
