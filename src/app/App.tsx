import Chat from "@/pages/Chat";
import Chats from "@/pages/Chats";
import { ROUTES } from "@/shared/constants";
import { Route, Routes } from "react-router";
import Providers from "./providers";
import { ProtectedRoute } from "./router";

function App() {
  return (
    <Providers>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.ROOT} element={<Chats />}>
            <Route path={ROUTES.CHAT()} element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </Providers>
  );
}

export default App;
