// hooks/usePaisagens.ts
import { useQuery } from "@tanstack/react-query";
import { getListCardEventos } from "@/api/app/getCardEventos";

export function useEventos() {
  return useQuery({
    queryKey: ['eventos'],
    queryFn: getListCardEventos,
  });
}