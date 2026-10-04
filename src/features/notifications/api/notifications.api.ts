import type { Notification } from "../types";

export const subscribeToNotifications = (
  onNotification: (notification: Notification) => void,
) => {
  const eventSource = new EventSource(
    `${import.meta.env.VITE_SERVER_URL}/api/notifications`,
  );

  eventSource.addEventListener("notification", (e) => {
    const notification = JSON.parse(e.data);

    onNotification(notification);
  });

  eventSource.addEventListener("connected", () => {
    console.log("Notification stream connected");
  });

  eventSource.onerror = (error) => {
    console.log("Notification stream error:", error);
  };

  return () => {
    eventSource.close();
  };
};
