import { useAppDispatch } from "@/app/store/store";
import { notificationReceived } from "@/features/journals/model/journalsSlice";
import { useEffect, type ReactNode } from "react";
import { subscribeToNotifications } from "../api/notifications.api";

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = subscribeToNotifications((notification) => {
      dispatch(notificationReceived(notification));
    });

    return unsubscribe;
  }, [dispatch]);

  return children;
};

export default NotificationProvider;
