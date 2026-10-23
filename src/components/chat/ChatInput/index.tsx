import { Icon } from "@/components/ui";
import { sendMessage, useSending } from "@/features/sending";
import type { ChatType } from "@/types/chats";
import { useState } from "react";

export const ChatInput = ({
  chatId,
  chatType,
}: {
  chatId: string;
  chatType: ChatType;
}) => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useSending();

  const handleSendMessage = () => {
    if (inputValue !== "") {
      dispatch(sendMessage({ chatId, message: inputValue, chatType }));
      setInputValue("");
    }
  };

  return (
    <div className="chat-input bg-dark-primary rounded-2xl overflow-hidden grid grid-cols-[48px_1fr_96px] items-center">
      <div className="chat-input__attachment">
        <div className="chat-input__btn w-12 h-12 px-2 py-1 flex items-center justify-center cursor-pointer text-icon-tertiary">
          <Icon type="attachment" className="text-[24px]" />
        </div>
      </div>
      <div className="chat-input__element h-full">
        <input
          className="w-full outline-none h-full"
          type="text"
          name="message"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => {
            if (e.code === "Enter") handleSendMessage();
          }}
          value={inputValue}
          placeholder="Message"
          autoComplete="off"
        />
      </div>
      <div className="chat-input__btns grid grid-cols-2">
        <div className="chat-input__btn w-12 h-12 px-2 py-1 flex items-center justify-center cursor-pointer text-icon-tertiary">
          <Icon type="sticker" className="text-[24px]" />
        </div>
        {inputValue !== "" ? (
          <div className="chat-input__btn w-12 h-12 px-2 py-1 flex items-center justify-center cursor-pointer text-icon-tertiary">
            <button
              className="w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-button-primary text-neutral-primary"
              type="button"
              onClick={handleSendMessage}
            >
              <Icon type="arrow-up" className="text-[24px]" />
            </button>
          </div>
        ) : (
          <div className="chat-input__btn w-12 h-12 px-2 py-1 flex items-center justify-center cursor-pointer text-icon-tertiary">
            <Icon type="notification" className="text-[24px]" />
          </div>
        )}
      </div>
    </div>
  );
};
