
export type sendMessageResponse = {
  idMessage: string;
};

export type sendMessageData = {
  chatId: string;
  message: string;
  typingTime?: number;
  quotedMessageId?: string;
};
