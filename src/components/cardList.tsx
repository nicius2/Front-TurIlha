import { Card, type CardProps } from "./card";
import { CardSkeleton } from "./cardSkeleton";

interface CardListProps {
  isLoading: boolean;
  cards: CardProps[];
}

export function CardList({ isLoading, cards }: CardListProps) {
  return (
    <div className="grid grid-cols-2 gap-4 p-1 md:grid-cols-4 justify-items-center">
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        : cards.map((card, index) => <Card key={index} {...card} />)}
    </div>
  );
}