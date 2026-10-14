import { useAuth } from "@/features/auth/hooks/useAuth";
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
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9.027 13c.205 3.946 1.588 7 2.973 7s2.768-3.054 2.973-7zm-4.963 0a8 8 0 0 0 4.342 6.147q-.18-.376-.333-.766C7.5 16.904 7.12 15.03 7.024 13zm12.912 0c-.096 2.031-.476 3.904-1.05 5.38q-.151.392-.333.767A8 8 0 0 0 19.936 13zm-1.383-8.147q.18.376.334.766c.573 1.477.953 3.35 1.049 5.381h2.96a8 8 0 0 0-4.343-6.147M12 4c-1.385 0-2.768 3.054-2.973 7h5.946C14.768 7.054 13.385 4 12 4m-3.594.853A8 8 0 0 0 4.064 11h2.96c.096-2.031.476-3.904 1.05-5.38q.151-.393.332-.767"
              ></path>
            </svg>
          </div>
          <div className="auth-block__questions">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10.705 13.635c-.05.52.39.945.912.945s.912-.431 1.027-.94a1.96 1.96 0 0 1 .493-.94q.295-.309.756-.592.523-.312.903-.71.381-.397.585-.91.21-.51.21-1.158 0-.96-.465-1.66a3 3 0 0 0-1.29-1.085q-.825-.38-1.91-.38-.993 0-1.818.363A3.1 3.1 0 0 0 8.79 7.66a2.8 2.8 0 0 0-.364.77c-.168.552.317 1.037.893 1.037h.041c.522 0 .9-.448 1.192-.88q.239-.354.596-.523.364-.177.767-.177.438 0 .79.182.358.182.568.512t.21.778q0 .398-.159.722a2 2 0 0 1-.437.58 4 4 0 0 1-.62.47 4.2 4.2 0 0 0-.857.688q-.352.369-.546.978a4 4 0 0 0-.159.838m.074 4.126q.37.364.88.364.342 0 .62-.165.284-.17.454-.454.177-.285.177-.631 0-.511-.375-.875a1.2 1.2 0 0 0-.875-.364q-.512 0-.881.364-.37.363-.37.875 0 .523.37.886"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
                clipRule="evenodd"
              ></path>
            </svg>
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
