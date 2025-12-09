import { useState, useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
  compact?: boolean;
}
const calculateTimeLeft = (targetTime: number) => {
  const now = new Date().getTime();
  const difference = targetTime - now;
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      minutes: Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)),
      seconds: Math.floor(difference % (1000 * 60) / 1000)
    };
  }
  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
};
export const CountdownTimer = ({
  targetDate,
  className = "",
  compact = false
}: CountdownTimerProps) => {
  // Memoize the target timestamp to prevent re-renders
  const targetTime = useMemo(() => {
    if (targetDate) {
      return targetDate.getTime();
    }
    // Default: 36 days from now
    return Date.now() + 36 * 24 * 60 * 60 * 1000;
  }, [targetDate]);
  const [timeRemaining, setTimeRemaining] = useState(() => calculateTimeLeft(targetTime));
  useEffect(() => {
    const updateTimer = () => {
      setTimeRemaining(calculateTimeLeft(targetTime));
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);
  if (compact) {
    return <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg ${className}`}>
        <Clock className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">
          {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
        </span>
      </div>;
  }
  return <Card className={`border-primary/30 bg-primary/5 ${className}`}>
      
    </Card>;
};