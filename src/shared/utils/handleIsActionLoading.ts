import type { ActionResultType } from "@/types";

export const handleIsActionLoading = (
  actionResult: ActionResultType,
  actionResultType: string,
) => {
  return (
    actionResult.type === actionResultType && actionResult.status === "loading"
  );
};
