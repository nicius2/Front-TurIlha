import { createContext } from "react";

export type CardType = "paisagens" | "atividades" | "eventos" | "restaurantes";

interface Turism {
  type: CardType;
  title: string;
  distance: string;
  description: string;
  imageUrl?: string;
}

export interface TurismContextProps {
  turism: Turism[];
}

export const TurismContext = createContext<TurismContextProps>({
  turism: [],
});
