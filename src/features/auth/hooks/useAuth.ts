import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  authenticatedSelector,
  errorSelector,
  qrCodeSelector,
  statusSelector,
} from "../model/authSelectors";

export const useAuth = () => {
  const qrCode = useAppSelector(qrCodeSelector);
  const status = useAppSelector(statusSelector);
  const authenticated = useAppSelector(authenticatedSelector);
  const isAuthenticated =
    authenticated === "authorized" || authenticated === "suspended";
  const error = useAppSelector(errorSelector);
  const dispatch = useAppDispatch();

  return {
    qrCode,
    status,
    isAuthenticated,
    authenticated,
    error,
    dispatch,
  };
};
