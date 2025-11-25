import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
  compact?: boolean;
}

export const CountdownTimer = ({ 
  targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Default: 7 days from now
  className = "",
  compact = false
}: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg ${className}`}>
        <Clock className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">
          {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
        </span>
      </div>
    );
  }

  return (
    <Card className={`border-primary/30 bg-primary/5 ${className}`}>
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Offer Ends In</span>
          </div>
          
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {String(timeRemaining.days).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Days</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {String(timeRemaining.hours).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Hours</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {String(timeRemaining.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Minutes</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {String(timeRemaining.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
