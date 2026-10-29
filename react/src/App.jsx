import AppRouter from "./router/AppRouter";
import { SocketProvider } from "./context/SocketContext";

function App() {
  return (
    <SocketProvider>
      <AppRouter />
    </SocketProvider>
  );
}

export default App;
