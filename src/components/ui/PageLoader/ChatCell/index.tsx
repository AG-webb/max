import { serviceApi } from "@/features/service/api/service.api";
import type { Chat } from "@/features/service/types";
import clsx from "clsx";
import { useEffect, useState } from "react";

const ChatCell = ({ name, chatId }: Chat) => {
  const [avatarSrc, setAvatarSrc] = useState("");

  useEffect(() => {
    async function getAvatar() {
      const { data } = await serviceApi.getAvatar(chatId);

      if(data) {
        setAvatarSrc(data.urlAvatar);
      }
    }
    getAvatar();
  }, [chatId]);

  return (
    <button
      type="button"
      className={clsx(
        "chat-cell cursor-pointer text-left w-full px-4 py-2.25 transition-colors hover:bg-card-hover",
        "grid gap-3 grid-cols-[64px_1fr] items-center",
      )}
    >
      <div className="chat-cell__picture w-16 h-16">
        <div className="w-14 h-14 rounded-full bg-dark-secondary">
          <img width={56} height={56} src={avatarSrc} alt="avatar" />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <div>{name}</div>
          <div>Sep 14</div>
        </div>
        <div className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          architecto, harum Sed architecto, harum
        </div>
      </div>
    </button>
  );
};

export default ChatCell;
