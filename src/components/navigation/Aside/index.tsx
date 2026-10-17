import { ChatList } from "@/components/chats";
import { CustomButton, Icon } from "@/components/ui";
import clsx from "clsx";
import { Search } from "../Search";

export const Aside = ({ className }: { className?: string }) => {
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
        <ChatList />
      </div>
    </aside>
  );
};
