import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

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
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground tabular-nums">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
      {label}
    </span>
  </div>
);

const Separator = () => (
  <span className="text-2xl md:text-3xl font-light text-muted-foreground/50 mx-1">
    :
  </span>
);

export const CountdownTimer = ({
  targetDate,
  className = "",
  compact = false,
}: CountdownTimerProps) => {
  const targetTime = useMemo(() => {
    if (targetDate) {
      return targetDate.getTime();
    }
    // Default: 36 days from now
    return Date.now() + 36 * 24 * 60 * 60 * 1000;
  }, [targetDate]);

  const [timeRemaining, setTimeRemaining] = useState(() =>
    calculateTimeLeft(targetTime)
  );

  useEffect(() => {
    const updateTimer = () => {
      setTimeRemaining(calculateTimeLeft(targetTime));
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  if (compact) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-3 px-4 py-2 rounded-pill glass-subtle",
          className
        )}
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-sm font-medium text-foreground tabular-nums">
          {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m
        </span>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        Founding cohort closes in
      </p>
      <div
        className={cn(
          "inline-flex items-center gap-2 md:gap-4 px-6 py-4 rounded-2xl glass-subtle"
        )}
      >
        <TimeBlock value={timeRemaining.days} label="Days" />
        <Separator />
        <TimeBlock value={timeRemaining.hours} label="Hours" />
        <Separator />
        <TimeBlock value={timeRemaining.minutes} label="Min" />
        <Separator />
        <TimeBlock value={timeRemaining.seconds} label="Sec" />
      </div>
    </div>
  );
};
