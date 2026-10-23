import { Skeleton } from "@/components/loading";
import { CustomButton } from "@/components/ui";
import { ACTION_TYPES, getQrCode, useAuth } from "@/features/auth";
import { useEffect } from "react";

export const NotAuthorized = () => {
  const { dispatch, qrCode, handleIsLoading, handleIsError } = useAuth();

  const qrLoading = handleIsLoading(ACTION_TYPES.GET_QR_CODE);
  const qrError = handleIsError(ACTION_TYPES.GET_QR_CODE);

  const handleRefreshQrCode = () => {
    dispatch(getQrCode());
  };

  useEffect(() => {
    dispatch(getQrCode());
  }, [dispatch]);

  return (
    <div>
      <div className="auth-block__qr mb-7 w-55 h-55 inline-flex justify-center items-center rounded-2xl overflow-hidden">
        {qrLoading ? (
          <Skeleton className="size-full" />
        ) : qrError ? (
          <CustomButton
            onClick={handleRefreshQrCode}
            className="bg-button-primary text-neutral-primary rounded-xl p-2 cursor-pointer w-full"
          >
            Refresh Qr
          </CustomButton>
        ) : (
          <img
            width={220}
            height={220}
            src={`data:image/png;base64, ${qrCode}`}
            alt="Qr code"
          />
        )}
      </div>
      <div className="grid gap-2 mb-10">
        <div className="text-[20px] font-semibold leading-6 tracking-[0.15px]">
          Sign in to Telegram via QR code
        </div>
        <div className="text-neutral-tertiary text-[15px] leading-5 tracking-[0.15px]">
          Scan the QR code to sign in to your profile or to download the app
        </div>
      </div>
    </div>
  );
};
