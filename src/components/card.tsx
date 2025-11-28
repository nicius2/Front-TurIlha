import cardLogo from "@/assets/image-card.svg"
import { CardDialog } from "./card-dialog"

export function Card() {
    return (
        <div className="w-fit">
            <div className="p-4 pb-15 bg-amber-50 rounded-2xl">
                <img src={cardLogo}
                    alt="imagem do card"
                    className="w-[150px]"
                />
                <div className="flex justify-end mt-2">
                    <CardDialog />
                </div>
            </div>
        </div>
    )
}