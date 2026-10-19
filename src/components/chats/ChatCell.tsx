import { Skeleton } from "@/components/loading";
import type { ChatHistory } from "@/features/journals";
import { ROUTES } from "@/shared/constants";
import { convertTimestampToDate, getLastMessageText } from "@/shared/utils";
import type { Chat } from "@/types/chats";
import type { MouseEventHandler } from "react";
import { Link } from "react-router";
import { Avatar, CustomButton, Icon } from "../ui";
import "./style.css";

type ChatCellProps = Chat & {
  lastMessage: ChatHistory | null;
  avatarSrc: string | null;
};

export const ChatCell = ({
  chatId,
  name,
  lastMessage,
  avatarSrc,
}: ChatCellProps) => {
  const handleChatOptionsClick: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    event.preventDefault();
    event.stopPropagation();
  };

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
            <CustomButton
              className="chat-cell__options cursor-pointer absolute top-0 right-0 transition-opacity"
              onClick={handleChatOptionsClick}
            >
              <Icon type="dots-x" />
            </CustomButton>
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
