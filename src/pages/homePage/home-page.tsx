import { HeroBanner } from "@/components/heroBanner/hero-banner";
import { Navbar } from "@/components/navbar/Navbar";

export function HomePage() {
    return (
        <>
            <div
                className="w-screen h-screen 
            md:bg-[url('/src/assets/background-homepage.svg')]
            bg-[url('/src/assets/background-mobile.svg')] bg-cover">

                <div className="flex flex-col gap-10">

                    <Navbar />
                    <HeroBanner />
                </div>
            </div>
        </>
    )
}