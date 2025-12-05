import bgNotFound from "/src/assets/bg-notFound.svg"; 
import { Helmet } from "react-helmet-async";

export function NotFound() {
     return (
          <>
               <Helmet title="404 - Not Found" />
               <div
                    className="w-screen h-screen relative bg-cover"
                    style={{
                         backgroundImage: `url(${bgNotFound})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                    }}>
                    <div className="flex items-center justify-center flex-col gap-6 h-full bg-black/60">
                         <h1 className="text-3xl font-medium text-center text-white ">
                              Pagina não encontrada
                         </h1>

                         <h2 className="text-8xl text-zinc-300 font-bold">
                              404
                         </h2>
                    </div>
               </div>
          </>
     );
};