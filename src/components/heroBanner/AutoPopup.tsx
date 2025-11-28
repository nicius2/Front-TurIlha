"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activities } from "./activities"

export function AutoPopup() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 2500)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed z-[999] pointer-events-none "
                    style={{
                        top: "400px",      // <<< POSIÇÃO FIXA (ajuste como quiser)
                        left: "25%",
                        right: "25%",
                        transform: "translateX(-50%)",
                    }}
                    initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120,
                        damping: 14,
                    }}
                >
                    {/* Tiramos a margin do Activities usando wrapper */}
                    <div className="mt-0">
                        <Activities />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
