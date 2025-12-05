import { useQuery } from "@tanstack/react-query";
import { getListCardEventos } from "@/api/getCardEventos";
import React from "react";

export const Eventos = React.memo(function Eventos() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['eventos'],
    queryFn: getListCardEventos
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar eventos: {error?.message || "Erro desconhecido."}</div>;

  if (!data || data.length === 0) {
    return <div>Nenhum evento encontrado.</div>;
  }

  return (
    <div>
      <h1>Eventos</h1> 
      {data.map((evento) => (
        <div key={evento.id}>
          <h3>{evento.name}</h3>
          <img src={evento.image} alt={`Imagem do evento: ${evento.name}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
});
