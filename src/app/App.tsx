import Chat from "@/pages/Chat";
import Main from "@/pages/Main";
import { ROUTES } from "@/shared/constants";
import { Route, Routes } from "react-router";
import Providers from "./providers";
import { ProtectedRoute } from "./router";

function App() {
  return (
    <Providers>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.ROOT} element={<Main />}>
            <Route path={ROUTES.CHAT()} element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </Providers>
  );
}

export default App;
