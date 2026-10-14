import CustomButton from "@/components/ui/CustomButton";
import { getErrorMessage, type FallbackProps } from "react-error-boundary";

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div
      role="alert"
      className="fallback grid gap-3 content-center justify-items-center p-10 min-h-screen"
    >
      <p className="text-3xl">Something went wrong:</p>
      <pre>{getErrorMessage(error)}</pre>
      <CustomButton
        onClick={resetErrorBoundary}
        size="medium"
        className="cursor-pointer bg-button-primary px-3 py-1.5 text-sm rounded-lg"
      >
        Try again
      </CustomButton>
    </div>
  );
};

export default Fallback;
