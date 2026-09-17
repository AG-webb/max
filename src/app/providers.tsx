import AuthProvider from "@/features/auth/providers/AuthProvider";
import type { ReactNode } from "react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "./store";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>{children}</AuthProvider>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default Providers;
