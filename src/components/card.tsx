import carIcon from "@/assets/car.svg";
import { CardDialog } from "./card-dialog";
import type { CardType } from "../context/TurismContext";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "sonner";
import { Button } from "./ui/button";


export interface CardProps {
  type: CardType;
  title: string;
  distance: string;
  description: string
  imageUrl?: string;
}

export function Card({ title, distance, imageUrl, description, type }: CardProps) {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="flex flex-col h-[350px] w-full max-w-[200px] bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`Imagem de ${title}`}
          className="w-full h-[150px] object-cover"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>

        <a href={distance}>
          <span className="mt-2 flex w-fit items-center mb-4 rounded-2xl border-1 border-green-400 bg-green-200 px-2 text-xs font-semibold text-gray-600">
            Rota
            <img src={carIcon} alt="Ícone de carro" className="ml-2 h-6 w-6" />
          </span>
        </a>

        {isAuthenticated ? (
          <CardDialog title={title} description={description} imageUrl={imageUrl} cardType={type} />
        ) : (
          <Button onClick={() => toast.info("Faça login para ver mais detalhes")}>
            Ver mais
          </Button>
        )}
      </div>
    </div>
  );
}