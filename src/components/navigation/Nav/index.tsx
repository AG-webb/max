import { useAppDispatch } from "@/app/store";
import { logout } from "@/features/auth/model/authThunks";
import clsx from "clsx";

const Nav = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch();

  return (
    <nav
      aria-label="Nav bar"
      className={clsx(
        "nav w-full bg-dark-primary border-r border-r-divider-secondary lg:w-(--nav-width) lg:px-1 lg:py-4",
        "max-lg:fixed max-lg:bottom-0 max-lg:left-0",
        className,
      )}
    >
      <div className="nav__wrap max-lg:px-3 max-lg:py-2.5">
        <div className="nav__links">
          <button className="nav-link" type="button">
            All
          </button>
          <button className="nav-link" type="button">
            New
          </button>
          <button className="nav-link" type="button">
            Channels
          </button>
        </div>
        <div className="nav__separator w-full h-px bg-divider-primary"></div>
        <div className="nav__links">
          <button className="nav-link" type="button">
            Contacts
          </button>
          <button className="nav-link" type="button">
            Calls
          </button>
          <button
            className="nav-link cursor-pointer"
            type="button"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Settings
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
