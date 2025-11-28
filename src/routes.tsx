import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage/home-page";
import { Paisagens } from "./pages/paisagens";
import { Atividades } from "./pages/atividades";
import { Restaurantes } from "./pages/restaurantes";

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
                path: '/paisagens',
                element: <Paisagens />
            },
            {
                path: '/atividades',
                element: <Atividades />
            },
            {
                path: '/restaurantes',
                element: <Restaurantes />
            },
        ]
    }
])