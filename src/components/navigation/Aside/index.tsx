import ChatCell from "@/components/ui/ChatCell";
import ChatsSkeleton from "@/components/ui/ChatsSkeleton";
import CustomButton from "@/components/ui/CustomButton";
import Icon from "@/components/ui/Icon";
import { useJournals } from "@/features/journals/hooks/useJournals";
import { getChatHistory } from "@/features/journals/model/journalsThunks";
import { useService } from "@/features/service/hooks/useService";
import {
  addChatAvatar,
  addLastMessage,
} from "@/features/service/model/serviceSlice";
import { ACTION_TYPES } from "@/features/service/model/serviceThunks";
import clsx from "clsx";
import { useEffect } from "react";
import { useParams } from "react-router";
import Search from "../Search";

const Aside = ({ className }: { className?: string }) => {
  const { chatId } = useParams();
  const { chats, lastMessages, avatars, handleIsLoading, dispatch } =
    useService();
  const { loadChatsLastMessage } = useJournals();
  const { loadChatsAvatar } = useService();

  useEffect(() => {
    if (chats) {
      loadChatsLastMessage(chats, !!chatId, (lastMessage) => {
        dispatch(addLastMessage(lastMessage));
      });
    }
  }, [chats, chatId, loadChatsLastMessage, dispatch]);

  useEffect(() => {
    if (chats) {
      loadChatsAvatar(chats, (urlAvatar, chatId) => {
        dispatch(addChatAvatar({ urlAvatar, chatId }));
      });
    }
  }, [chats, loadChatsAvatar, dispatch]);

  useEffect(() => {
    if (chatId) {
      dispatch(getChatHistory({ chatId }));
    }
  }, [chatId, dispatch]);

  return (
    <aside
      className={clsx(
        "aside bg-dark-primary border-r border-r-divider-secondary overflow-hidden lg:w-(--aside-width)",
        "flex flex-col w-full",
        className,
      )}
    >
      <div className="aside__header px-4">
        <div className="flex justify-between items-center pt-4 pb-3">
          <div className="text-[24px] font-semibold">Chats</div>
          <div>
            <CustomButton
              size="medium"
              className="bg-button-primary w-8 rounded-[15px] flex items-center justify-center"
            >
              <Icon type="plus" className="text-[20px]" />
            </CustomButton>
          </div>
        </div>
        <div className="pb-2">
          <Search />
        </div>
      </div>
      <div className="aside__chats overflow-x-scroll">
        {handleIsLoading(ACTION_TYPES.GET_CHATS) ? (
          <ChatsSkeleton />
        ) : (
          chats?.map((chat) => {
            const lastMessage =
              lastMessages?.find((message) => message.chatId === chat.chatId) ||
              null;
            const avatarSrc = avatars?.[chat.chatId] || null;

            return (
              <ChatCell
                key={chat.chatId}
                lastMessage={lastMessage}
                avatarSrc={avatarSrc}
                {...chat}
              />
            );
          })
        )}
      </div>
    </aside>
  );
};

export default Aside;
