import { createRateLimiter } from "@/shared/utils";

export const chatsHistoryLimiter = createRateLimiter(1100);
export const chatsAvatarLimiter = createRateLimiter(1100);
