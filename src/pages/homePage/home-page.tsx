import { HeroBanner } from "@/components/heroBanner/hero-banner";
import { Navbar } from "@/components/navbar/Navbar";
import { Helmet } from "react-helmet-async";
import { MainPlaces } from "./main-places";
import { AutoPopup } from "@/components/heroBanner/AutoPopup";

export function HomePage() {
    return (
        <>
            <Helmet title="HomePage" />
            <div
                className="w-screen h-screen relative
            md:bg-[url('/src/assets/background-homepage.svg')]
            bg-[url('/src/assets/background-mobile.svg')] bg-cover">

                <div className="flex flex-col gap-10">

                    <Navbar />
                    <HeroBanner />
                    <AutoPopup />
                    <MainPlaces />
                </div>
            </div >
        </>
    )
}