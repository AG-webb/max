import { useAppDispatch } from "@/app/store";
import { setAuthenticated } from "@/features/auth/model/authSlice";
import { notificationReceived } from "@/features/journals/model/journalsSlice";
import { useEffect, type ReactNode } from "react";
import { subscribeToNotifications } from "../api/notifications.api";

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = subscribeToNotifications((notification) => {
      const { typeWebhook } = notification;

      if (typeWebhook === "stateInstanceChanged") {
        dispatch(setAuthenticated(notification.stateInstance));
        return;
      }

      dispatch(notificationReceived(notification));
    });

    return unsubscribe;
  }, [dispatch]);

  return children;
};

export default NotificationProvider;
