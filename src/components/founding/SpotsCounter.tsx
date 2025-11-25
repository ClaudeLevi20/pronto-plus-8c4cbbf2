import { Badge } from "@/components/ui/badge";

interface SpotsCounterProps {
  spotsRemaining?: number;
  totalSpots?: number;
  className?: string;
}

export const SpotsCounter = ({ 
  spotsRemaining = 87, 
  totalSpots = 100,
  className = "" 
}: SpotsCounterProps) => {
  const spotsTaken = totalSpots - spotsRemaining;
  const percentageFilled = (spotsTaken / totalSpots) * 100;

  return (
    <div className={`inline-flex flex-col gap-3 ${className}`}>
      <Badge variant="outline" className="border-primary text-primary px-4 py-2 text-lg font-semibold animate-pulse">
        Founding Spots Remaining: {spotsRemaining} / {totalSpots}
      </Badge>
      
      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto space-y-2">
        <div className="relative h-4 bg-muted rounded-full overflow-hidden border border-border">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out"
            style={{ width: `${percentageFilled}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{spotsTaken} spots claimed</span>
          <span>{spotsRemaining} spots left</span>
        </div>
      </div>
    </div>
  );
};
