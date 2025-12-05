import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/app/homePage/home-page";
import { Paisagens } from "./pages/app/paisagens";
import { Atividades } from "./pages/app/atividades";
import { Eventos } from "./pages/app/eventos";
import { NotFound } from "./pages/NotFound";
import { AuthSignLayout } from "./_layout/AuthSignLayout";
import { Sign } from "@/pages/auth/sign"

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Paisagens />
      },
      {
        path: "/paisagens",
        element: <Paisagens />
      },
      {
        path: "/atividades",
        element: <Atividades />
      },
      {
        path: "/eventos",
        element: <Eventos />
      },
    ]
  },
  {
    path: "/",
    element: <AuthSignLayout />,
    children: [
      {
        path: "sign", 
        element: <Sign />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);