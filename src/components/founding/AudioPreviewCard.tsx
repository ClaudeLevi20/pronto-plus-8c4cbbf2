import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPreviewCardProps {
  onClick: () => void;
}

const AudioWaveform = () => {
  const [heights, setHeights] = useState([12, 24, 16, 28, 12, 20, 8, 16, 24]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(prev => prev.map(() => Math.random() * 24 + 8));
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-[3px] h-12">
      {heights.map((height, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-primary/60 to-primary transition-all duration-100 ease-out"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
};

export const AudioPreviewCard = ({ onClick }: AudioPreviewCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group cursor-pointer glass rounded-3xl overflow-hidden",
        "transition-all duration-500 ease-apple",
        "hover:shadow-float hover:scale-[1.02]",
        "w-full max-w-md mx-auto",
        "border-glow"
      )}
    >
      <div className="p-10 md:p-14 flex flex-col items-center space-y-8">
        {/* Play Button - Refined with glow */}
        <div className={cn(
          "relative w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center",
          "bg-primary/10 border border-primary/20",
          "group-hover:bg-primary/15 transition-all duration-500 ease-apple",
          "animate-pulse-glow"
        )}>
          {/* Inner glow ring */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
          <Play className="w-12 h-12 md:w-14 md:h-14 text-primary ml-1.5 relative z-10" />
        </div>

        {/* Title - Clean typography */}
        <div className="text-center space-y-2">
          <h3 className="font-semibold text-xl md:text-2xl tracking-tight">
            Inbound Call: New Patient
          </h3>
          <p className="text-base text-muted-foreground">
            Hear Pronto in action
          </p>
        </div>

        {/* Audio Waveform Animation */}
        <AudioWaveform />

        {/* Subtle CTA - Minimal */}
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-medium">
          Listen to Pronto Live →
        </p>
      </div>
    </div>
  );
};
