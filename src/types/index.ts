export type StatusType = "idle" | "loading" | "loaded" | "error";
export type StateInstance =
  | "notAuthorized"
  | "authorized"
  | "blocked"
  | "starting"
  | "suspended"
  | "pendingPassword";

export type ActionResultType = {
  type: string;
  status: StatusType;
  message: string;
};
export type DefaultStateType = {
  actionResult: ActionResultType;
};
