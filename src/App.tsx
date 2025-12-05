import { RouterProvider } from "react-router-dom"
import { route } from "./routes"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "sonner"

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <HelmetProvider >
        <Helmet titleTemplate="%s | TurIlha" />

        <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-center" richColors />


          <RouterProvider router={route} />
        </QueryClientProvider >
      </HelmetProvider>
    </>
  )
}