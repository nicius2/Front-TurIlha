import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { CardList } from "@/components/cardList";
import { type CardProps } from "@/components/card";
import { Dialog } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { getListCardRestaurantes } from "@/api/app/getCardRestaurantes";

export function Restaurantes() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['restaurantes'],
    queryFn: getListCardRestaurantes
  });

  const cards = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map((item) => ({
      ...item,
      type: 'restaurantes',
      distance: item.mapsUrl,
    }));
  }, [data]);

  if (isLoading) {
    return (
      <>
        <Helmet title="Restaurantes" />
        <CardList isLoading={true} cards={[]} />
      </>
    );
  }

  if (isError) {
    return <div>Erro: {error.message}</div>;
  }

  if (!cards.length) {
    return (
      <>
        <Helmet title="Restaurantes" />
        <div className="p-4">Nenhum restaurante encontrado.</div>
      </>
    );
  }

  return (
    <>
      <Helmet title="Restaurantes" />
      <Dialog>
        <CardList isLoading={false} cards={cards as CardProps[]} />
      </Dialog>
    </>
  );
}