import clsx from "clsx";
import NavLink from "./NavLink";
import "./style.css";

const Nav = ({ className }: { className?: string }) => {
  return (
    <nav
      aria-label="Nav bar"
      className={clsx(
        "nav w-full flex bg-dark-primary border-r border-r-divider-secondary overflow-hidden lg:w-(--nav-width) lg:px-1",
        "max-lg:fixed max-lg:bottom-0 max-lg:left-0",
        className,
      )}
    >
      <div className="nav__wrap w-full flex flex-col max-lg:px-3 max-lg:py-2.5">
        <div
          className={clsx(
            "nav__links shrink nav__links_folders grid content-start gap-2",
            "lg:scrollbar-none lg:overflow-y-scroll lg:min-h-19 lg:py-4",
          )}
        >
          <NavLink isActive icon="message-fill" text="All" />
          <NavLink icon="folder" text="New" />
          <NavLink icon="folder" text="Channels" />
        </div>
        <div className="nav__separator w-full shrink-0 h-px bg-divider-primary"></div>
        <div className="nav__links grow shrink-0 flex flex-col content-start gap-2 lg:py-4">
          <NavLink icon="users" text="Contacts" />
          <NavLink icon="call-fill" text="Calls" />
          <NavLink className="mt-auto" icon="settings" text="Settings" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
