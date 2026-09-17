import Fallback from "@/components/error/Fallback";
import PageLoader from "@/components/ui/PageLoader";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useAuth } from "../hooks/useAuth";
import { resetAuthState } from "../model/authSlice";
import { getStateInstance } from "../model/authThunks";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { authenticated, status, dispatch } = useAuth();

  useEffect(() => {
    if (authenticated === null) {
      dispatch(getStateInstance());
    }
  }, [authenticated, dispatch]);

  if (status === "idle") {
    return <PageLoader />;
  }

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => {
        dispatch(resetAuthState());
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default AuthProvider;
