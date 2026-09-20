import ChatCell from "@/components/ui/ChatCell";
import { useJournals } from "@/features/journals/hooks/useJournals";
import { setChatHistory } from "@/features/journals/model/journalsSlice";
import { useService } from "@/features/service/hooks/useService";
import { getChats } from "@/features/service/model/serviceThunks";
import { devMaxItems } from "@/shared/constants";
import clsx from "clsx";
import { useEffect } from "react";

const Aside = ({ className }: { className?: string }) => {
  const { chats, dispatch } = useService();
  const { chatHistory, loadChatsLastMessage } = useJournals();

  useEffect(() => {
    async function loadMessages() {
      if (chats) {
        loadChatsLastMessage(chats, (lastMessage) => {
          dispatch(setChatHistory(lastMessage));
        });
      }
    }

    loadMessages();
  }, [chats, dispatch, loadChatsLastMessage]);

  useEffect(() => {
    if (chats === null) {
      dispatch(getChats());
    }
  }, [chats, dispatch]);

  return (
    <aside
      className={clsx(
        "aside shrink-0 bg-dark-primary border-r border-r-divider-secondary overflow-hidden lg:w-(--aside-width)",
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
        {chats?.map((chat, index) => {
          // REMOVE!! STATEMENT FOR NOT TO OVERLOAD NETWORK
          if (index > devMaxItems) return;
          const lastMessage =
            chatHistory?.find((history) => history.chatId === chat.chatId) ||
            null;

          return (
            <ChatCell key={chat.chatId} lastMessage={lastMessage} {...chat} />
          );
        })}
      </div>
    </aside>
  );
};

export default Aside;
