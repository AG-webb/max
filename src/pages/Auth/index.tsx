import Icon from "@/components/ui/Icon";
import { useAuth } from "@/features/auth";
import clsx from "clsx";
import Blocked from "./components/Blocked";
import NotAuthorized from "./components/NotAuthorized";
import PendingPassword from "./components/PendingPassword";
import Starting from "./components/Starting";

const Auth = () => {
  const { stateInstance, actionResult } = useAuth();

  return (
    <div className="auth h-screen grid justify-center items-center grid-cols-[minmax(0,580px)] p-6 overflow-y-scroll">
      <div
        className={clsx(
          "auth-block rounded-[28px] overflow-hidden backdrop:blur-xl border border-divider-secondary",
          "h-174 bg-dark-primary p-4",
        )}
      >
        <div className="auth-block__header flex items-center justify-between">
          <div className="auth-block__language">
            <Icon type="globe" />
          </div>
          <div className="auth-block__questions">
            <Icon type="question" />
          </div>
        </div>
        <div className="auth-block__body max-w-84 mx-auto text-center pt-12">
          {stateInstance === "notAuthorized" ? (
            <NotAuthorized />
          ) : stateInstance === "starting" ? (
            <Starting />
          ) : stateInstance === "pendingPassword" ? (
            <PendingPassword />
          ) : (
            <Blocked />
          )}
        </div>
        <div className="text-center text-red-800 mt-6">
          {actionResult.status === "error" ? actionResult.message : ""}
        </div>
      </div>
    </div>
  );
};

export default Auth;
