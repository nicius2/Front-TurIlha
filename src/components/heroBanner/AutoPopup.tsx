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
                    className="absolute z-40 pointer-events-none left-1/2 -translate-x-1/2"
                    style={{
                        top: "40%",                   // fica no meio vertical
                        transform: "translate(-50%, -50%)", // centra total
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
                    <div className="mt-0">
                        <Activities />
                    </div>
                </motion.div>

            )}
        </AnimatePresence>
    )
}
