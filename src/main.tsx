import { StrictMode } from "react";
import { Provider } from "react-redux";
import {
  HelmetProvider,
  Helmet,
} from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { store } from "./store/store.ts";
import App from "./App.tsx";

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Helmet
          titleTemplate="titulo"
          defaultTitle="subtitulo"
        />
        <BrowserRouter basename="/testes">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
