import { createContext } from "react";

export type CardType = "paisagens" | "atividades" | "eventos" | "restaurantes";

interface Turism{
  type: CardType;
  title: string;
  distance: string;
  description: string
  imageUrl?: string;
}

interface TurismProps {
     children: React.ReactNode
}

export interface TurismContextProps {
  turism: Turism[]
}

export const TurismContext = createContext<TurismContextProps>({
  turism: [],
})

export function TurismProvider({ children }: TurismProps) {



     return (
          <TurismContext.Provider value={{ turism: [] }}>
            {children}
          </TurismContext.Provider>
     )
}


export const useTurism = () => createContext(TurismContext)