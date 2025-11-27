import iconPlaces from "@/assets/icon-places.svg"
import ondaIcon from "@/assets/onda.svg"
import { motion, type Variants } from "framer-motion"

// Variantes de animação quando a página carrega
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeUpDelayed: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
};

export function HeroBanner() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:mt-10 mt-6 md:gap-12 gap-4"
        >

            {/* Ícone + texto animam primeiro */}
            <motion.div
                variants={fadeUp}
                className="flex items-center justify-center gap-2"
            >
                <img
                    src={iconPlaces}
                    alt="icone dos principais na ilha"
                    className="w-20"
                />
                <span className="text-xs font-medium text-primary">
                    +300 lugares inesquecíveis
                </span>
            </motion.div>

            {/* Título principal entra logo depois */}
            <motion.div
                variants={fadeUpDelayed}
                className="flex flex-col gap-12"
            >
                <div className="flex items-center justify-center">
                    <div className="w-[600px] text-center font-bold">

                        <h1 className="text-[40px] text-[#fff] md:text-zinc-800 md:text-7xl uppercase">
                            Explore a
                            <span className="text-primary">{' '}ilha</span>

                            <br className="md:hidden" />
                            <span className="inline-flex items-center md:mt-2 justify-center">
                                do amor

                                <img
                                    src={ondaIcon}
                                    alt="icone de onda"
                                    className="inline-block md:w-16 w-12 ml-3"
                                />
                            </span>
                        </h1>

                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
}
