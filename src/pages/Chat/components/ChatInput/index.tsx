import Icon from "@/components/ui/Icon";
import { useSending } from "@/features/sending/hooks/useService";
import { sendMessage } from "@/features/sending/model/sendingThunks";
import type { ChatType } from "@/types/chats";
import { useState } from "react";

const ChatInput = ({
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
          <Icon type="attachment" />
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
          <Icon type="sticker" />
        </div>
        {inputValue !== "" ? (
          <div className="chat-input__btn w-12 h-12 px-2 py-1 flex items-center justify-center cursor-pointer text-icon-tertiary">
            <button
              className="w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-button-primary text-neutral-primary"
              type="button"
              onClick={handleSendMessage}
            >
              <Icon type="arrow-up" />
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.29 11.705a1 1 0 0 1 .005-1.415l6.015-5.97a1 1 0 0 1 1.41.001l5.987 5.972a1 1 0 0 1-1.412 1.416l-4.28-4.27v11.533a1 1 0 1 1-2 0V7.43l-4.31 4.279a1 1 0 0 1-1.414-.005"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        ) : (
          <div className="chat-input__btn w-12 h-12 px-2 py-1 flex items-center justify-center cursor-pointer text-icon-tertiary">
            <Icon type="notification" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
