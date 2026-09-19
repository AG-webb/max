import { getMonthShortName } from './getMonthShortName';

export const convertUnixToDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  return getMonthShortName(month) + " " + day;
};
