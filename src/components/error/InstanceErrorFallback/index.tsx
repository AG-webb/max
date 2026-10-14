import { useAppDispatch } from "@/app/store";
import { getStateInstance } from "@/features/auth/model/authThunks";

const InstanceErrorFallback = ({ errorMessage }: { errorMessage: string }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      role="alert"
      className="fallback grid gap-3 content-center justify-items-center p-10 min-h-screen"
    >
      <p className="text-3xl">Something went wrong:</p>
      <pre>{errorMessage}</pre>
      <button
        type="button"
        onClick={() => dispatch(getStateInstance())}
        className="cursor-pointer bg-button-primary px-3 py-1.5 text-sm rounded-lg"
      >
        Try again
      </button>
    </div>
  );
};

export default InstanceErrorFallback;
