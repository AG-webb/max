import clsx from "clsx";
import NavLink from "./NavLink";
import "./style.css";

export const Nav = ({ className }: { className?: string }) => {
  return (
    <nav
      aria-label="Nav bar"
      className={clsx(
        "nav w-full flex bg-dark-primary border-r border-r-divider-secondary overflow-hidden z-1",
        "max-lg:fixed max-lg:bottom-0 max-lg:left-0 lg:w-(--nav-width) lg:px-1",
        className,
      )}
    >
      <div className="nav__wrap w-full flex max-lg:px-3 max-lg:py-2.5 max-lg:gap-2 lg:flex-col">
        <div
          className={clsx(
            "nav__links shrink nav__links_folders flex content-start gap-2 max-lg:grow-[0.38]",
            "lg:scrollbar-none lg:flex-col lg:overflow-y-scroll lg:min-h-19 lg:pt-6 lg:pb-5 max-lg:hidden",
          )}
        >
          <NavLink isActive icon="message-fill" text="All" />
          <NavLink icon="folder" text="New" />
          <NavLink icon="folder" text="Channels" />
        </div>
        <div className="nav__separator mx-1 shrink-0 h-px bg-divider-primary max-lg:hidden"></div>
        <div className="nav__links grow shrink-0 flex content-start gap-2 lg:flex-col lg:pt-3 lg:pb-4">
          <NavLink icon="users" text="Contacts" />
          <NavLink icon="call-fill" text="Calls" />
          <NavLink className="lg:hidden" isActive icon="message-fill" text="Chats" />
          <NavLink className="mt-auto" icon="settings" text="Settings" />
        </div>
      </div>
    </nav>
  );
};
