import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { CardType } from "@/context/TurismContext";
import { getAvailability } from "@/lib/getAvailability";

interface CardDialogProps {
  title: string
  description: string
  imageUrl?: string
  cardType: CardType
}

export function CardDialog({ title, description, imageUrl, cardType }: CardDialogProps) {

  const availability = getAvailability({cardType});

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 flex w-full items-center justify-center rounded-lg bg-orange-500 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          Conhecer
          <span className="ml-2">
            <ArrowRight size={24} />
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="border-none p-0 bg-transparent shadow-none">
      <div className="w-full max-w-lg mx-auto relative">
        <div className="relative bg-neutral-900 text-white rounded-3xl shadow-2xl overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
          <div className="p-8">
            <div className="flex justify-between opacity-70 text-sm">
            {availability && (
                <span className="flex items-center gap-2">
                  <span className={`w-2 h-2 ${availability.color} rounded-full`}></span>
                  {availability.text}
                </span>
              )}
              <span className="capitalize">{cardType}</span>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
              <p className="text-neutral-300 mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
    </Dialog>
  );
}