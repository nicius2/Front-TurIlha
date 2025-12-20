import type { CardType } from "@/context/TurismContext";


interface getAvailabilityProps {
      cardType: CardType
}

export function getAvailability ({cardType}: getAvailabilityProps) {
    const now = new Date();
    const currentHour = now.getHours();

    switch (cardType) {
      case 'restaurantes':
        // Das 9h às 21h, por exemplo
        if (currentHour >= 9 && currentHour < 21) {
          return { text: 'Aberto agora', color: 'bg-green-500' };
        }
        return { text: 'Fechado', color: 'bg-red-500' };
      
      case 'eventos':
        return null; 

      case 'paisagens':
        return { text: 'Aberto 24h', color: 'bg-green-500' };

      default:
        return { text: 'Disponível', color: 'bg-green-500' };
    }
  };