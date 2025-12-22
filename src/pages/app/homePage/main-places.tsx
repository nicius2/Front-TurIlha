import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { Suspense, useState } from "react";

// Componente Skeleton para o botão
function ButtonSkeleton() {
    return (
        <div className="w-32 h-10 rounded-lg bg-gray-300 animate-pulse" />
    );
}

const listPages = [
    { id: 2, name: "Paisagens", path: "/paisagens" },
    { id: 3, name: "Restaurantes", path: "/restaurantes" },
    { id: 4, name: "Eventos", path: "/eventos" },
];

export function MainPlaces() {
    // Simulação de carregamento (troque para sua lógica real)
    const [isLoading] = useState(false);

    return (
        <div className="w-full flex flex-col mt-20 md:40 items-center gap-6">
            <div
                className="
                mt-12 flex flex-col items-center gap-6
                bg-amber-100 rounded-3xl
                w-full md:w-[90%] p-6
            "
            >
                <div className="flex gap-4 justify-center w-full flex-wrap">
                    {isLoading
                        ? Array.from({ length: listPages.length }).map((_, idx) => (
                              <ButtonSkeleton key={idx} />
                          ))
                        : listPages.map((value) => (
                              <Button
                                  key={value.id}
                                  asChild
                                  className="bg-primary/80"
                              >
                                  <Link to={value.path}>{value.name}</Link>
                              </Button>
                          ))}
                </div>
                <div className="w-full md:w-[90%]">
                    <Suspense fallback={<div>Carregando...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}