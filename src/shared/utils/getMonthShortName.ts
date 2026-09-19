export const getMonthShortName = (monthNo: number) => {
  const date = new Date();
  date.setMonth(monthNo);

  return date.toLocaleString("en-US", { month: "short" });
};
