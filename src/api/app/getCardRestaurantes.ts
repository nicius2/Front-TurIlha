import { api } from "@/lib/api";
import type { CardType } from "@/context/TurismContext";

interface Restaurante {
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
  cardsRestaurant: Restaurante[];
}

export async function getListCardRestaurantes(): Promise<Restaurante[]> {
  try {
    const response = await api.get<ApiWrapper>("/cards/restaurantes");

    // console.log("response de restaurante: ", response.data)

    if (response.data && Array.isArray(response.data.cardsRestaurant)) {
      return response.data.cardsRestaurant;
    } else {
      throw new Error(
        "A resposta da API não contém um array de restaurantes.",
      );
    }
  } catch (error) {
    console.error("Erro ao buscar a lista de restaurantes:", error);
    throw error;
  }
}