import Aside from "@/components/navigation/Aside";
import Nav from "@/components/navigation/Nav";
import { useService } from "@/features/service/hooks/useService";
import { getChats } from "@/features/service/model/serviceThunks";
import clsx from "clsx";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router";

const Chats = () => {
  const { chats, dispatch } = useService();
  const { chatId } = useParams();

  useEffect(() => {
    if (chats === null) {
      dispatch(getChats());
    }
  }, [chats, dispatch]);

  return (
    <div
      className={clsx(
        "chats grid max-h-screen grid-rows-[minmax(0,1fr)_76px]",
        "lg:grid-rows-1 lg:grid-cols-[var(--nav-width)_var(--aside-width)_1fr]",
      )}
    >
      <Nav className={clsx(chatId ? "max-lg:hidden" : "")} />
      <Aside className={clsx(chatId ? "max-lg:hidden" : "")} />
      <main
        className={clsx(
          "main grow",
          !chatId ? "max-lg:hidden" : "",
        )}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Chats;
