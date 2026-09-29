import type { ActionResultType } from '@/types';

export const DEFAULT_ACTION_RESULT: ActionResultType = {
  type: "",
  status: "idle",
  message: "",
};

export const SLICE_NAMES = {
  AUTH: "auth",
  SERVICE: "service",
  JOURNALS: "journals",
  SENDING: "sending",
};
