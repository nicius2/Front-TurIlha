// hooks/useRestaurantes.ts
import { useQuery } from "@tanstack/react-query";
import { getListCardRestaurantes } from "@/api/app/getCardRestaurantes";

export function useRestaurantes() {
  return useQuery({
    queryKey: ['restaurantes'],
    queryFn: getListCardRestaurantes,
  });
}