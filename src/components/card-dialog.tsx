import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LightbulbIcon, Mail } from "lucide-react"

export function CardDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-sm">Abrir Card</Button>
            </DialogTrigger>

            <DialogContent className="border-none p-0 bg-transparent shadow-none">
                <div className="w-full max-w-lg mx-auto relative">

                    <div className="absolute -bottom-7 left-0 right-0 mx-auto w-[90%] h-20 bg-lime-400 rounded-3xl blur-lg"></div>

                    <div className="relative bg-neutral-900 text-white rounded-3xl p-8 shadow-2xl">

                        <div className="flex justify-between opacity-70 text-sm">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Disponível agora
                            </span>

                            <span>8:30 PM</span>
                        </div>


                        <div className="flex items-center mt-6 gap-4">


                            <div>
                                <h2 className="text-xl font-semibold">Seu Nome Aqui</h2>
                                <p className="text-neutral-400 text-sm">Software Engineer</p>
                            </div>
                        </div>

                        {/* Botões */}
                        <div className="flex gap-4 mt-6">
                            <Button className="flex-1 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700">
                                <LightbulbIcon className="w-4 h-4 mr-2" /> Hire Me
                            </Button>

                            <Button className="flex-1 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700">
                                <Mail className="w-4 h-4 mr-2" /> Copy Email
                            </Button>
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
