import PageLoader from "@/components/ui/PageLoader";
import { useAuth } from "@/features/auth/hooks/useAuth";
import Auth from "@/pages/Auth";
import { Outlet } from "react-router";

export const ProtectedRoute = () => {
  const { isAuthenticated, status } = useAuth();

  if (status === "loading") {
    return <PageLoader className="h-screen" />;
  }

  if (!isAuthenticated) {
    return <Auth />;
  }

  return <Outlet />;
};
