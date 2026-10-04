import AuthProvider from "@/features/auth/providers/AuthProvider";
import NotificationProvider from "@/features/notifications/providers/NotificationProvider";
import type { ReactNode } from "react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "./store/store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <NotificationProvider>{children}</NotificationProvider>
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default Providers;
