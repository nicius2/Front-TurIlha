import type { CardType } from "@/context/TurismContext";
import { api } from "@/lib/api";

interface Paisagem {
  id: string
  title: string
  description: string
  imageUrl: string
  mapsUrl: string
  cardType: CardType
  createdAt: string
  latitude: number
  longitude: number  
}

interface ApiWrapper {
  sucess: boolean;
  cardsPaisagens: Paisagem[];
}

export const getListCardPaisagem = async (): Promise<Paisagem[]> => {
  try {
    const response = await api.get<ApiWrapper>("/cards/paisagens");

    if (response.data && Array.isArray(response.data.cardsPaisagens)) {
      return response.data.cardsPaisagens; // Retorna APENAS o array de paisagens
    } else {
      // Tratar caso o formato seja inesperado, mas não gere exceção HTTP
      console.error(
        "Formato inesperado da resposta: A propriedade 'cardsPaisagens' não é um array.",
        response.data,
      );
      throw new Error(
        "A resposta da API não contém a lista de cards esperada.",
      );
    }
  } catch (error) {
    console.error("Erro ao buscar a lista de paisagens:", error);
    throw error;
  }
};