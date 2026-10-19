export { useService } from "./hooks/useService";
export {
  addChatAvatar,
  addLastMessage,
  resetAuthState,
  default as serviceReducer
} from "./model/serviceSlice";
export { ACTION_TYPES, getChats } from "./model/serviceThunks";
export { type ServiceState } from "./types";

