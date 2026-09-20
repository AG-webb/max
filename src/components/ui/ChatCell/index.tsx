import type { ChatCellProps } from "@/features/service/types";
import { convertTimestampToDate } from "@/shared/utils";
import clsx from "clsx";
import Avatar from "../Avatar";

const ChatCell = ({ name, lastMessage, avatarSrc }: ChatCellProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "chat-cell cursor-pointer text-left w-full px-4 py-2.25 transition-colors hover:bg-card-hover",
        "grid gap-3 grid-cols-[64px_1fr] items-center",
      )}
    >
      <div className="chat-cell__picture flex items-center justify-center w-16 h-16">
        <Avatar src={avatarSrc} name={name} />
      </div>
      <div className="h-full">
        <div className="flex justify-between">
          <div>{name}</div>
          <div>
            {lastMessage?.timestamp
              ? convertTimestampToDate(lastMessage?.timestamp)
              : ""}
          </div>
        </div>
        <div className="line-clamp-2">
          {lastMessage?.typeMessage === "videoMessage"
            ? "Video message"
            : lastMessage?.typeMessage === "audioMessage"
              ? "Audio message"
              : lastMessage?.typeMessage === "reactionMessage"
                ? `Reacted to message ${lastMessage.extendedTextMessageData.text}`
                : lastMessage?.textMessage}
        </div>
      </div>
    </button>
  );
};

export default ChatCell;
