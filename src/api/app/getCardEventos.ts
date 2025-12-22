import { api } from "@/lib/api";
import type { CardType } from "@/context/TurismContext";

interface Evento {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  mapsUrl: string;
  cardType: CardType;
  createdAt: string;
  latitude: number;
  longitude: number;
}

interface ApiWrapper {
  success: boolean;
  cardsEvent: Evento[];
}

export async function getListCardEventos(): Promise<Evento[]> {
  try {
    const response = await api.get<ApiWrapper>("/cards/eventos");

    if (response.data && response.data.success && Array.isArray(response.data.cardsEvent)) {
      return response.data.cardsEvent;
    } else {
      throw new Error(
        "A resposta da API não contém um array de eventos.",
      );
    }
  } catch (error) {
    console.error("Erro ao buscar a lista de eventos:", error);
    throw error;
  }
}