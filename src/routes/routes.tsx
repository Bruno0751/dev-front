import { lazy } from "react";

const CadastrarVideos = lazy(
  () => import("../pages/CadfastrarVideos.tsx")
);
const ListarVideos = lazy(
  () => import("../pages/CadfastrarVideos.tsx")
);

export const routes = [
  {
    path: "/x",
    element: <ListarVideos />,
  },
  {
    // path: "/cadastrar",
    path: "/",
    element: <CadastrarVideos />,
  },
];
