// hooks/usePaisagens.ts
import { useQuery } from "@tanstack/react-query";
import { getListCardPaisagem } from "@/api/getCardPaisagem";

export function usePaisagens() {
  return useQuery({
    queryKey: ['paisagens'],
    queryFn: getListCardPaisagem,
    // Adicione os estados necessários
    onError: (error) => console.error(error)
  });
}