import { getMonthShortName } from "./getMonthShortName";

export const convertTimestampToDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);
  const now = new Date();

  const isToday = date.toDateString() === now.toDateString();

  if (isToday) {
    return date.toLocaleTimeString([], {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return `${getMonthShortName(date.getMonth())} ${date.getDate()}`;
};
