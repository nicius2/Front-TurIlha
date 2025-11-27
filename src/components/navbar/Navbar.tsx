import logo from "@/assets/Logo.svg"
import { Button } from "../ui/button"
import { menuList } from "./list-menu"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Hamburger } from "./hamburguer"

export function Navbar() {
    return (
        <div className="flex items-center justify-center pt-10">
            <div className="flex items-center justify-between md:w-4xl w-[350px]
            border-t-2 border-x-2 border-b-8 border-[#FF3D00]/70 rounded-3xl px-4">
                <img src={logo}
                    alt="logo do site"
                    className="md:w-auto w-16" />

                <Hamburger />

                <div className="md:flex hidden gap-10">
                    {menuList.map((value) => {
                        return (
                            <a key={value.id} href={value.link}>{value.name}</a>
                        )
                    })}
                </div>

                <Button className="hidden md:flex">Fazer login</Button>
            </div>
        </div>
    )
}