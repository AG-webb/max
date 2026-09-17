import ChatCell from "@/components/ui/PageLoader/ChatCell";
import { useService } from "@/features/service/hooks/useService";
import clsx from "clsx";

const Aside = ({ className }: { className?: string }) => {
  const { chats } = useService();

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
        {chats?.map((chat) => (
          <ChatCell key={chat.chatId} {...chat} />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
