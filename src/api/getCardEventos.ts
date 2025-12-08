import { api } from "@/lib/api";

export interface Eventos {
  id: number
  name: string  
  image: string  
}

export type ApiResponse = Eventos[];

export const getListCardEventos = async (): Promise<Eventos[]> => {
  try {
    const response = await api.get<Eventos[]>("/eventos");

    console.log("🔥Response completo:", response.data);

    // Verifica se o response.data é um array
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Formato inesperado da resposta:", response.data);
      throw new Error("A resposta da API não é um array.");
    }
  } catch (error) {
    console.error("Erro ao buscar a lista de paisagens:", error);
    throw error;
  }
};