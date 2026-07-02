import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import "../i18n.ts";
import Loader from "./components/Loader.tsx";
import { routes } from "./routes/routes";
import "./App.scss";
import "./components/semantics/Semantics.scss";
import GHeader from "./components/semantics/GHeader.tsx";
import GNav from "./components/semantics/GNav.tsx";
import GSection from "./components/semantics/GSection.tsx";
import GFooter from "./components/semantics/GFooter.tsx";

function App() {
  const content = useRoutes(routes);

  return (
    <Suspense fallback={<Loader />}>
      <div className="layout">
        
        <GNav />
        <div className="content">
          <GHeader />
          <GSection>{content}</GSection>
          <GFooter />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
