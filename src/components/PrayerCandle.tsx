
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrayerCandleProps {
  className?: string;
  onLight?: () => void;
  intention?: string;
}

const PrayerCandle = ({ className, onLight, intention }: PrayerCandleProps) => {
  const [isLit, setIsLit] = useState(false);

  const handleLightCandle = () => {
    setIsLit(true);
    if (onLight) onLight();
  };

  return (
    <div className={cn("flex flex-col items-center p-6", className)}>
      <div className="relative">
        {/* Candle Base */}
        <div className="w-12 h-32 mx-auto bg-gradient-to-b from-amber-50 to-amber-100 rounded-md relative mb-2">
          {/* Wick */}
          <div className="w-0.5 h-3 bg-gray-800 absolute left-1/2 -translate-x-1/2 -top-2"></div>
          
          {/* Flame when lit */}
          {isLit && (
            <>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-10">
                <div className="absolute w-6 h-10 bg-orange-300 rounded-full blur-md animate-candle-flicker opacity-50"></div>
                <div className="absolute w-4 h-8 bg-yellow-200 rounded-full blur-sm top-1 left-1/2 -translate-x-1/2 animate-candle-flicker"></div>
                <div className="absolute w-2 h-6 bg-white rounded-full top-2 left-1/2 -translate-x-1/2 animate-candle-flicker"></div>
              </div>
              {/* Glow effect */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-orange-300 rounded-full blur-xl opacity-20"></div>
            </>
          )}
        </div>

        {intention && isLit && (
          <div className="mt-6 text-center animate-fade-in">
            <p className="text-sm italic text-muted-foreground">"{intention}"</p>
          </div>
        )}

        <Button 
          onClick={handleLightCandle} 
          disabled={isLit}
          variant={isLit ? "secondary" : "default"} 
          className="mt-6"
        >
          <Flame className="mr-2 h-4 w-4" />
          {isLit ? "Candle Lit" : "Light Candle"}
        </Button>
      </div>
    </div>
  );
};

export default PrayerCandle;
