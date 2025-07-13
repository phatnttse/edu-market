import AppRouter from "./routers";
import { useProduct } from "./hooks/use-product";

function App() {
  useProduct();
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
