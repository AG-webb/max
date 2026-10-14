import { useAuth } from "@/features/auth/hooks/useAuth";
import Auth from "@/pages/Auth";
import { Outlet } from "react-router";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Auth />;
  }

  return <Outlet />;
};
