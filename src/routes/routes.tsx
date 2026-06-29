import { lazy } from "react";

const CadastrarVideos = lazy(
  () => import("../pages/CadfastrarVideos.tsx")
);
const ListarVideos = lazy(
  () => import("../pages/ListarVideos.tsx")
);

export const routes = [
  {
    path: "/",
    element: <ListarVideos />,
  },
  {
    path: "/cadastrar",
    // path: "/",
    element: <CadastrarVideos />,
  },
];
