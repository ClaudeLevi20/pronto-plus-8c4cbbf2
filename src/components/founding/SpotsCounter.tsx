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
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Badge variant="outline" className="border-primary text-primary px-4 py-2 text-lg font-semibold animate-pulse">
        Founding Spots Remaining: {spotsRemaining} / {totalSpots}
      </Badge>
    </div>
  );
};
