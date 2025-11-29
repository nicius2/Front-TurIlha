import { memo } from "react";
import logo from "@/assets/Logo.svg";
import { Button } from "../ui/button";
import { menuList } from "./menu-list";
import { Hamburger } from "./hamburguer";

export const Navbar = memo(function Navbar() {
    return (
        <nav className="flex items-center justify-center pt-10">
            <div className="flex items-center justify-between w-full max-w-[350px] md:max-w-4xl border-t-2 border-x-2 border-b-8 border-[#FF3D00]/70 rounded-3xl px-4">

                <img
                    src={logo}
                    alt="logo do site"
                    className="md:w-auto w-16"
                    loading="eager"
                    decoding="async"
                />

                <Hamburger />

                <div className="md:flex hidden gap-10">
                    {menuList.map((item) => (
                        <a key={item.id}
                            href={item.link}
                            className="font-medium text-lg hover:text-primary/80 transition-all duration-150">
                            {item.name}
                        </a>
                    ))}
                </div>

                <Button className="hidden md:flex hover:bg-primary/80 font-semibold">
                    Fazer login
                </Button>
            </div>
        </nav >
    );
});