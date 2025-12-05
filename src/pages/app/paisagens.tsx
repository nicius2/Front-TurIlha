import { useQuery } from "@tanstack/react-query";
import { getListCardPaisagem } from "@/api/getCardPaisagem";
import React from "react";

export const Paisagens = React.memo(function Paisagens() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['paisagem'],
    queryFn: getListCardPaisagem
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar paisagens: {error?.message || "Erro desconhecido."}</div>;

  if (!data || data.length === 0) {
    return <div>Nenhuma paisagem encontrada.</div>;
  }

  return (
    <div>
      <h1>Paisagens</h1>
      {data.map((paisagem) => (
        <div key={paisagem.id}>
          <h3>{paisagem.name}</h3>
          <img src={paisagem.image} alt={`Imagem da paisagem: ${paisagem.name}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
});
