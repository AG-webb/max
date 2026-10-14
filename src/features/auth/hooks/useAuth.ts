import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  actionResultSelector,
  qrCodeSelector,
  stateInstanceSelector,
} from "../model/authSelectors";

export const useAuth = () => {
  const qrCode = useAppSelector(qrCodeSelector);
  const actionResult = useAppSelector(actionResultSelector);
  const stateInstance = useAppSelector(stateInstanceSelector);
  const isAuthenticated =
    stateInstance === "authorized" || stateInstance === "suspended";
  const dispatch = useAppDispatch();

  return {
    qrCode,
    actionResult,
    stateInstance,
    isAuthenticated,
    dispatch,
  };
};
