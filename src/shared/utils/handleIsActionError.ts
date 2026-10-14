import type { ActionResultType } from "@/types";

export const handleIsActionError = (
  actionResult: ActionResultType,
  actionResultType: string,
) => {
  return (
    actionResult.type === actionResultType && actionResult.status === "error"
  );
};
