import type { ChatCellProps } from "@/features/service/types";
import { ROUTES } from "@/shared/constants";
import { convertTimestampToDate } from "@/shared/utils";
import { Link } from "react-router";
import Avatar from "../Avatar";
import Skeleton from "../Skeleton";
import { getLastMessageText } from "./getLastMessageText";
import "./style.css";

const ChatCell = ({ chatId, name, lastMessage, avatarSrc }: ChatCellProps) => {
  return (
    <div className="chat-cell cursor-pointer text-left w-full px-4 py-2.25 transition-colors hover:bg-card-hover">
      <Link
        className="chat-cell__wrap grid gap-3 grid-cols-[64px_1fr] items-center"
        to={ROUTES.CHAT(chatId)}
      >
        <div className="chat-cell__picture flex items-center justify-center w-16 h-16">
          <Avatar src={avatarSrc} name={name} />
        </div>
        <div className="h-full grid items-start gap-0.5">
          <div className="relative flex justify-between items-center">
            <div className="leading-5">{name}</div>
            <div className="chat-cell__time text-[13px] leading-4 transition-opacity">
              {lastMessage ? (
                convertTimestampToDate(lastMessage.timestamp)
              ) : (
                <Skeleton className="w-10 h-4" />
              )}
            </div>
            <button
              type="button"
              className="chat-cell__options cursor-pointer absolute top-0 right-0 leading-4 transition-opacity"
            >
              ...
            </button>
          </div>
          <div className="line-clamp-2">
            {lastMessage ? (
              getLastMessageText(lastMessage)
            ) : (
              <div className="grid gap-0.5">
                <Skeleton className="w-full h-3" />
                <Skeleton className="w-full h-3" />
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatCell;
