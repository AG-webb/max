export const ROUTES = {
  ROOT: "/",
  CHAT: (id = ":chatId") => `${id}`,
} as const;
