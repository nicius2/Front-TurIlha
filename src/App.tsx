import { RouterProvider } from "react-router-dom"
import { route } from "./routes"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Toaster } from "sonner"

export function App() {
  return (
    <>
      <HelmetProvider >
        <Helmet titleTemplate="%s | TurIlha" />

        <Toaster position="bottom-center" richColors />

        <RouterProvider router={route} />
      </HelmetProvider>
    </>
  )
}