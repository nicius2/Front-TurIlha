import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage/home-page";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    }
])