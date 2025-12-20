import { RouterProvider } from "react-router-dom";
import { route } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { TurismProvider } from "./context/TurismContext";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | TurIlha" />

        <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-center" richColors />

          <AuthProvider>
            <TurismProvider>
              <RouterProvider router={route} />
            </TurismProvider>
          </AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </>
  );
}
