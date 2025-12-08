import { Card, type CardProps } from "./card";
import { CardSkeleton } from "./cardSkeleton";

export function CardList({ isLoading, cards }: { isLoading: boolean; cards: CardProps[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => <CardSkeleton key={index} />)
        : cards.map((card, index) => <Card key={index} {...card} />)}
    </div>
  );
}
