import { Fallback, InstanceErrorFallback } from "@/components/error";
import { PageLoader } from "@/components/loading";
import { handleIsActionError } from "@/shared/utils";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useAuth } from "../hooks/useAuth";
import { resetAuthState } from "../model/authSlice";
import { ACTION_TYPES, getStateInstance } from "../model/authThunks";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { stateInstance, actionResult, dispatch } = useAuth();

  const stateInstanceError = handleIsActionError(
    actionResult,
    ACTION_TYPES.GET_STATE_INSTANCE,
  );

  useEffect(() => {
    if (stateInstance === null) {
      dispatch(getStateInstance());
    }
  }, [stateInstance, dispatch]);

  if (stateInstanceError) {
    return <InstanceErrorFallback errorMessage={actionResult.message} />;
  }

  if (stateInstance === null || actionResult.status === "idle") {
    return <PageLoader className="h-screen" />;
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
