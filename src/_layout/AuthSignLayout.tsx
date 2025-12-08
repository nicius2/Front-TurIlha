import bgDesktop from "@/assets/auth-desktop.svg";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export function AuthSignLayout() {
    return (
        <>
            <Helmet title="Sign" />

            <div
                className="w-screen h-screen relative bg-cover"
                style={{
                    backgroundImage: `url(${bgDesktop})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="w-[350px] md:w-[450px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-white rounded-3xl p-10 flex flex-col md:left-7/12 md:-translate-x-7"
                >
                    <Outlet />
                </div>
            </div>
        </>
    );
}