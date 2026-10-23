import { Icon } from "@/components/ui";
import { convertTimestampToDate } from "@/shared/utils";
import type { StatusMessageType } from "@/types/chats";
import clsx from "clsx";

export type ChatInfoProps = {
  timestamp: number;
  isEdited: boolean | undefined;
  statusMessage?: StatusMessageType;
};

export const ChatInfo = ({
  timestamp,
  isEdited,
  statusMessage,
}: ChatInfoProps) => {
  return (
    <div className="chat-message__info absolute bottom-2.5 right-2.5 shrink-0 flex items-center gap-0.5 -mb-1.5">
      <div className="chat-message__time text-neutral-tertiary leading-3.5 text-[11px]">
        {convertTimestampToDate(timestamp)} {isEdited && "Edited"}
      </div>
      {statusMessage && (
        <div
          className={clsx(
            "chat-message__status",
            statusMessage === "read" && "text-blue-500",
          )}
        >
          {statusMessage === "read" || statusMessage === "delivered" ? (
            <Icon type="read" />
          ) : (
            <Icon type="delivered" />
          )}
        </div>
      )}
    </div>
  );
};
