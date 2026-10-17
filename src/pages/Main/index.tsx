import { Aside, Nav } from "@/components/navigation";
import clsx from "clsx";
import { Outlet, useParams } from "react-router";

const Main = () => {
  const { chatId } = useParams();

  return (
    <div
      className={clsx(
        "chats grid h-screen max-h-screen grid-rows-[minmax(0,1fr)_var(--nav-height)]",
        "lg:grid-rows-1 lg:grid-cols-[var(--nav-width)_var(--aside-width)_1fr]",
      )}
    >
      <Nav className={clsx(chatId ? "max-lg:hidden" : "")} />
      <Aside className={clsx(chatId ? "max-lg:hidden" : "")} />
      <main className={clsx("main", !chatId ? "max-lg:hidden" : "")}>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
