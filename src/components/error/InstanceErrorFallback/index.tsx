import { useAppDispatch } from "@/app/store";
import { CustomButton } from "@/components/ui";
import { getStateInstance } from "@/features/auth";

export const InstanceErrorFallback = ({ errorMessage }: { errorMessage: string }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      role="alert"
      className="fallback grid gap-3 content-center justify-items-center p-10 min-h-screen"
    >
      <p className="text-3xl">Something went wrong:</p>
      <pre>{errorMessage}</pre>
      <CustomButton
        onClick={() => dispatch(getStateInstance())}
        size="medium"
        className="cursor-pointer bg-button-primary px-3 py-1.5 text-sm rounded-lg"
      >
        Try again
      </CustomButton>
    </div>
  );
};
