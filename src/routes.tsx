import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/app/homePage/home-page";
import { Paisagens } from "./pages/app/paisagens";
import { Restaurantes } from "./pages/app/restautantes";
import { Eventos } from "./pages/app/eventos";
import { NotFound } from "./pages/NotFound";
import { AuthSignLayout } from "./_layout/AuthSignLayout";
import { SignIn } from "@/pages/auth/signIn"
import { SignUp } from "@/pages/auth/signUp"
import { ResetPassword } from "./pages/auth/resetPassword";


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
        path: "paisagens",
        element: <Paisagens />
      },
      {
        path: "restaurantes",
        element: <Restaurantes />
      },
      {
        path: "eventos",
        element: <Eventos />
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthSignLayout />,
    children: [
      { path: "login", element: <SignIn /> },
      { path: "register", element: <SignUp /> },
      { path: "reset-password", element: <ResetPassword /> },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);