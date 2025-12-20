import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { CardList } from "@/components/cardList";
import { type CardProps } from "@/components/card";
import { Dialog } from "@/components/ui/dialog";
import { usePaisagens } from "@/hooks/usePaisagens";

export const Paisagens = React.memo(() => {
  const { data,isLoading, isError, error } = usePaisagens()

  // console.log("response dentro do paisagens: ", data)
  
  // Adapta os dados da API para o formato do Card
  const cards = useMemo(() => {
    if(!data) {return []}
    
    return data.map((item) => ({
      ...item,
      type: 'paisagens',
      distance: item.mapsUrl,
    }))
  }, [data])

  if (isLoading) {
    return (
      <>
        <Helmet title="Paisagens" />
        <CardList isLoading={true} cards={[]} />
      </>
    );
  }

  {isError && <div>Erro: {error.message}</div>}

  if (!cards.length) {
    return (
      <>
        <Helmet title="Paisagens" />
        <div className="p-4">Nenhuma paisagem encontrada.</div>
      </>
    );
  }

  return (
    <>
      <Helmet title="Paisagens" />
      <Dialog>
        <CardList isLoading={false} cards={cards as CardProps[]} />
      </Dialog>
    </>
  );
});