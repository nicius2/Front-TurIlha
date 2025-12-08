import { useQuery } from "@tanstack/react-query";
import { getListCardAtividades } from "@/api/getCardAtividades";
import React from "react";
import { Helmet } from "react-helmet-async";

export const Atividades = React.memo(function Atividades() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['atividades'],
    queryFn: getListCardAtividades
  });

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar atividades: {error?.message || "Erro desconhecido."}</div>;

  if (!data || data.length === 0) {
    return <div>Nenhuma atividade encontrada.</div>;
  }

  return (
    <>
      <Helmet title="Atividades" />
      <div>
        <h1>Atividades</h1>
        {data.map((atividades) => (
          <div key={atividades.id}>
            <h3>{atividades.name}</h3>
            <img src={atividades.image} alt={`Imagem da atividade: ${atividades.name}`} loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
});
