import { addSendedMessageToHistory } from "@/features/journals/model/journalsSlice";
import { getApiErrorMessage } from "@/services/api/api.errors";
import type { ChatType } from "@/types/chats";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendingApi } from "../api/sending.api";
import type { ChatHistory } from "./../../journals/types/index";
import type { sendMessageData } from "./../types/index";

export const ACTION_TYPES = {
  SEND_MESSAGE: "sending/sendMessage",
};

export const sendMessage = createAsyncThunk(
  ACTION_TYPES.SEND_MESSAGE,
  async (
    message: sendMessageData & { chatType: ChatType },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const { chatType, ...messageData } = message;

      const { data } = await sendingApi.sendMessage(messageData);

      // const data = {
      //   idMessage: "17631151123451",
      // };

      const history: ChatHistory = {
        type: "outgoing",
        idMessage: data.idMessage,
        timestamp: new Date().getTime(),
        typeMessage: "textMessage",
        statusMessage: "sent",
        sendByApi: false,
        chatId: messageData.chatId,
        chatType: chatType,
        isForwarded: false,
        forwardingScore: 0,
        textMessage: messageData.message,
        isEdited: false,
        isDeleted: false,
      };

      dispatch(addSendedMessageToHistory(history));

      return data;
    } catch (error) {
      const errorMessage = getApiErrorMessage(error);

      return rejectWithValue(errorMessage);
    }
  },
);
