import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const menuList = [
    { id: 1, name: 'Home', link: "#" },
    { id: 2, name: 'Sobre', link: "#" },
    { id: 3, name: 'Principais pontos', link: "#" }
];

export function Hamburger() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Botão Hamburguer */}
            <Button
                className="md:hidden"
                onClick={() => setOpen(true)}
            >
                <Menu size={28} />
            </Button>

            <AnimatePresence>
                {open && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setOpen(false)}
                        />

                        {/* DRAWER (metade da tela) */}
                        <motion.div
                            initial={{ y: -300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -300, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            className="
                                fixed left-1/2 -translate-x-1/2 top-6 z-50
                                w-[90%] max-w-sm
                                bg-white rounded-2xl p-6 shadow-xl
                                md:hidden
                            "
                        >
                            {/* HEADER */}
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-xl font-bold">Menu</h1>
                                <button onClick={() => setOpen(false)}>
                                    <X size={26} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {menuList.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        className="text-lg font-semibold text-zinc-800"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
