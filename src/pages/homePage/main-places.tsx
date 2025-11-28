import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

const listPages = [
    { id: 2, name: 'Paisagens', path: '/paisagens' },
    { id: 3, name: 'Atividades', path: '/atividades' },
    { id: 4, name: 'Restaurantes', path: '/restaurantes' }
];

export function MainPlaces() {
    return (
        <div className="w-full flex flex-col mt-20 md:40 items-center gap-6">

            <div className="
                mt-12 flex flex-col items-center gap-6
                bg-amber-100 rounded-3xl
                w-full md:w-[90%] p-6
            ">

                <div className="flex gap-4 justify-center w-full flex-wrap">
                    {listPages.map((value) => (
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
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
