
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const quotes = [
  {
    text: "The spiritual journey is the unlearning of fear and the acceptance of love.",
    author: "Marianne Williamson"
  },
  {
    text: "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
    author: "Pierre Teilhard de Chardin"
  },
  {
    text: "The wound is the place where the Light enters you.",
    author: "Rumi"
  },
  {
    text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    author: "Rumi"
  },
  {
    text: "The privilege of a lifetime is to become who you truly are.",
    author: "Carl Jung"
  },
  {
    text: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    author: "Buddha"
  },
  {
    text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    author: "Nikola Tesla"
  }
];

interface QuoteOfTheDayProps {
  className?: string;
}

const QuoteOfTheDay = ({ className }: QuoteOfTheDayProps) => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(index);
  }, []);

  const quote = quotes[quoteIndex];

  return (
    <Card className={cn(
      "overflow-hidden sacred-gradient animate-fade-in hover:shadow-md transition-shadow",
      className
    )}>
      <CardContent className="p-6 flex flex-col items-center">
        <div className="flex justify-center mb-4">
          <div className="h-0.5 w-12 bg-sacred-gold opacity-70"></div>
        </div>
        <p className="sacred-quote text-center text-lg md:text-xl mb-3">"{quote.text}"</p>
        <p className="text-sm font-medium text-foreground/70 text-center">— {quote.author}</p>
      </CardContent>
    </Card>
  );
};

export default QuoteOfTheDay;
