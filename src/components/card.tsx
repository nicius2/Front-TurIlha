import carIcon from "@/assets/car.svg";
import imgCard from "@/assets/image-card.svg";
import { ArrowRight } from "lucide-react";

type CardType = "paisagens" | "atividades" | "eventos";

export interface CardProps {
  type: CardType;
  title: string; 
  distance: string; 
  imageUrl?: string; 
}

export function Card({ title, distance, imageUrl }: CardProps) {
  return (
    <div className="flex flex-col w-full max-w-[200px] bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
      {/* Imagem do Card */}
      <div className="relative">
        <img
          src={imageUrl || imgCard} // Usa a imagem passada ou uma padrão
          alt={`Imagem de ${title}`}
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <span className="text-sm font-semibold text-gray-600 bg-green-200 px-2 border-1 rounded-2xl w-fit border-green-400  flex items-center mt-2">
          {distance}
          <img
            src={carIcon}
            alt="Ícone de carro"
            className="w-6 h-6 ml-2"
          />
        </span>
        <button
          className="mt-4 flex items-center justify-center w-full py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Conhecer
          <span className="ml-2">
            <ArrowRight size={24} />  
          </span>
        </button>
      </div>
    </div>
  );
}