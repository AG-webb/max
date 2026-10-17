import { CustomButton } from "@/components/ui";
import {
  ACTION_TYPES,
  sendAuthorizationPassword,
  useAuth,
} from "@/features/auth";
import { handleIsActionLoading } from "@/shared/utils";
import { useState } from "react";

const PendingPassword = () => {
  const [password, setPassword] = useState("");
  const { dispatch, actionResult } = useAuth();

  const handleSendMessage = async () => {
    if (password !== "") {
      dispatch(sendAuthorizationPassword({ password }));
    }
  };

  return (
    <form className="grid gap-4">
      <div className="text-[20px] font-semibold leading-6 tracking-[0.15px]">
        Fill 2-factor password to continue
      </div>
      <div className="chat-input__element h-12">
        <input
          className="w-full outline-none h-full text-dark-primary rounded-lg bg-neutral-secondary px-3"
          type="password"
          name="message"
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={(e) => {
            if (e.code === "Enter") handleSendMessage();
          }}
          value={password}
          placeholder="Message"
          autoComplete="off"
        />
      </div>
      <CustomButton
        onClick={handleSendMessage}
        loading={handleIsActionLoading(
          actionResult,
          ACTION_TYPES.SEND_AUTHORIZATION_PASSWORD,
        )}
        className="bg-button-primary text-neutral-primary p-2 rounded-lg cursor-pointer"
      >
        Send
      </CustomButton>
    </form>
  );
};

export default PendingPassword;
