import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import "../i18n.ts";
import Loader from "./components/Loader.tsx";
import { routes } from "./routes/routes";

function App() {
  const content = useRoutes(routes);

  return (
    <Suspense fallback={<Loader />}>
      {content}
    </Suspense>
  );
}

export default App;
