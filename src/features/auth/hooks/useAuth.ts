import { useAppDispatch, useAppSelector } from "@/app/store/store";
import {
  actionResultSelector,
  authenticatedSelector,
  qrCodeSelector,
} from "../model/authSelectors";

export const useAuth = () => {
  const qrCode = useAppSelector(qrCodeSelector);
  const actionResult = useAppSelector(actionResultSelector);
  const authenticated = useAppSelector(authenticatedSelector);
  const isAuthenticated =
    authenticated === "authorized" || authenticated === "suspended";
  const dispatch = useAppDispatch();

  return {
    qrCode,
    actionResult,
    isAuthenticated,
    authenticated,
    dispatch,
  };
};
