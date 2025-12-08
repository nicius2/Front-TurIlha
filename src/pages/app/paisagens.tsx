import React from "react";
import { Helmet } from "react-helmet-async";
import { CardList } from "@/components/cardList";
import { usePaisagens } from "@/hooks/usePaisagens";
import { Card } from "@/components/card";

export type CardType = "paisagens" | "atividades" | "eventos";
export interface CardProps {
  type: CardType;
  title: string;
  distance: string;
  imageUrl: string;
}

export const Paisagens = React.memo(function Paisagens() {
  // Remova ou comente esta linha se não estiver usando:
  // const { data } = usePaisagens();

  // Adapta os dados da API para o formato do Card
  const cards: CardProps[] = [
    { type: "paisagens", title: "...", distance: "...", imageUrl: "..." },
  ];

  if (isLoading) {
    return (
      <>
        <Helmet title="Paisagens" />
        <CardList isLoading={true} cards={[]} />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Helmet title="Paisagens" />
        <div className="text-red-500 p-4">Erro ao carregar paisagens: {error?.message || "Erro desconhecido."}</div>
      </>
    );
  }

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
      <CardList isLoading={false} cards={cards as CardProps[]} />
      {cards.map(card => (
        <Card
          key={card.title}
          title={card.title}
          distance={card.distance}
          imageUrl={card.imageUrl} type={"paisagens"}        />
      ))}
    </>
  );
});