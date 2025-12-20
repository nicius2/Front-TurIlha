// hooks/usePaisagens.ts
import { useQuery } from "@tanstack/react-query";
import { getListCardPaisagem } from "@/api/app/getCardPaisagem";

export function usePaisagens() {
  return useQuery({
    queryKey: ['paisagens'],
    queryFn: getListCardPaisagem,
  });
}