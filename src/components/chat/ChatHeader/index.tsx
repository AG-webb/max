import { useAppDispatch } from "@/app/store";
import { Avatar, Icon } from "@/components/ui";
import { notificationReceived } from "@/features/journals";
import type { ChatsNotification } from "@/features/notifications";
import { ROUTES } from "@/shared/constants";
import { Link } from "react-router";

type ChatHeaderProps = {
  avatarSrc: string | null;
  name: string;
};

const notification: ChatsNotification = {
  typeWebhook: "incomingMessageReceived",
  instanceData: {
    idInstance: 3100000000,
    wid: "79991234567@c.us",
    typeInstance: "v3",
  },
  timestamp: 1790936853085,
  idMessage: "1763115112347",
  senderData: {
    chatId: "8456469015",
    chatName: "Armen",
    chatType: "user",
    sender: "10000000",
    senderName: "Armen",
    senderType: "user",
    senderContactName: "Armen",
    senderPhoneNumber: 79876543210,
  },
  messageData: {
    typeMessage: "imageMessage",
    fileMessageData: {
      downloadUrl:
        "https://sw-media-3100.storage.yandexcloud.net/3100000000/15697d2c-397c-4fd0-8e1a-8be95f753aae.webp",
      caption: "",
      fileName: "15697d2c-397c-4fd0-8e1a-8be95f753aae.webp",
      jpegThumbnail:
        "UklGRjoAAABXRUJQVlA4IC4AAACwAwCdASoyADIAPm0skkYkIqGhLggAgA2JaQAAZAEm0xUUDzF5wAD++yGAAAAA",
      isAnimated: false,
      mimeType: "image/webp",
      forwardingScore: 0,
      isForwarded: false,
    },
  },
};

export const ChatHeader = ({ avatarSrc, name }: ChatHeaderProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(notificationReceived(notification));
  };

  return (
    <>
      <Link
        to={ROUTES.ROOT}
        className="chat__back flex items-center justify-center w-10 h-10"
      >
        <Icon type="arrow-left" className="text-[24px]" />
      </Link>
      <div className="chat__info flex items-center pl-2">
        <div className="chat-cell__picture flex items-center justify-center">
          <Avatar size="small" src={avatarSrc} name={name} />
        </div>
        <div className="h-full ml-3">
          <div className="relative flex justify-between items-center">
            <div>{name}</div>
          </div>
          <div className="relative flex justify-between items-center">
            <div>Last seen recently</div>
          </div>
        </div>
      </div>
      <div className="chat__actions">
        <div
          className="ml-12 cursor-pointer bg-dark-secondary p-4"
          onClick={handleClick}
        >
          Notification
        </div>
      </div>
    </>
  );
};
