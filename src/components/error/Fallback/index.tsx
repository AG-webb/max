import { getErrorMessage, type FallbackProps } from "react-error-boundary";

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{getErrorMessage(error)}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default Fallback;
