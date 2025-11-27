import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { menuList } from "./menu-list";
import logo from "@/assets/Logo.svg";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export function Hamburger() {
    const [open, setOpen] = useState(false);

    // Variantes para o menu
    const menuVariants: Variants = {
        hidden: { y: 0, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 15 } },
        exit: { y: 0, opacity: 0, transition: { duration: 0.2 } },
    };

    // Variantes para o X
    const closeVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.25 } },
        exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
    };

    // Variantes para os links
    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 * i }
        }),
        exit: { opacity: 0, y: -10 },
    };

    return (
        <div className="md:hidden">
            {/* Botão Hamburguer */}
            <Button onClick={() => setOpen(!open)}>
                <Menu />
            </Button>

            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                            onClick={() => setOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed left-1/2 -translate-x-1/2 top-9 z-50 w-[85%] max-w-sm bg-white 
                            rounded-2xl px-4 pt-1 shadow-xl md:hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <img src={logo} alt="logo do site" className="md:w-auto w-16" />

                                <motion.button
                                    variants={closeVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    onClick={() => setOpen(false)}
                                >
                                    <X className="w-8 h-8 text-primary" />
                                </motion.button>
                            </div>

                            {/* Links */}
                            <nav className="flex flex-col justify-center items-center gap-4 flex-1">
                                {menuList.map((value, i) => (
                                    <motion.a
                                        key={value.id}
                                        href={value.link}
                                        className="text-lg font-medium text-zinc-800"
                                        custom={i}
                                        variants={linkVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        onClick={() => setOpen(false)}
                                    >
                                        {value.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Botão de login */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                                exit={{ opacity: 0, y: 20 }}
                            >
                                <Button className="flex justify-center items-center w-full my-8">Fazer login</Button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
