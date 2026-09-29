import ChatCell from "@/components/ui/ChatCell";
import ChatsSkeleton from "@/components/ui/ChatsSkeleton";
import { useJournals } from "@/features/journals/hooks/useJournals";
import { getChatHistory } from "@/features/journals/model/journalsThunks";
import { useService } from "@/features/service/hooks/useService";
import { addLastMessage } from "@/features/service/model/serviceSlice";
import { ACTION_TYPES } from "@/features/service/model/serviceThunks";
import clsx from "clsx";
import { useEffect } from "react";
import { useParams } from "react-router";

const Aside = ({ className }: { className?: string }) => {
  const { chatId } = useParams();
  const { chats, lastMessages, handleIsLoading, dispatch } = useService();
  const { loadChatsLastMessage } = useJournals();

  useEffect(() => {
    if (chats) {
      loadChatsLastMessage(chats, !!chatId, (lastMessage) => {
        dispatch(addLastMessage(lastMessage));
      });
    }
  }, [chats, chatId, loadChatsLastMessage, dispatch]);

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
        <div className="flex justify-between pt-4 pb-3">
          <div>Chats</div>
          <div>Plus</div>
        </div>
        <div className="pb-2">Search</div>
      </div>
      <div className="aside__chats overflow-x-scroll">
        {handleIsLoading(ACTION_TYPES.GET_CHATS) ? (
          <ChatsSkeleton />
        ) : (
          chats?.map((chat) => {
            const lastMessage =
              lastMessages?.find((message) => message.chatId === chat.chatId) ||
              null;

            return (
              <ChatCell key={chat.chatId} lastMessage={lastMessage} {...chat} />
            );
          })
        )}
      </div>
    </aside>
  );
};

export default Aside;
