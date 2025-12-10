import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioPreviewCardProps {
  onClick: () => void;
}

const AudioWaveform = () => {
  const [heights, setHeights] = useState([12, 24, 16, 28, 12, 20, 8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(prev => prev.map(() => Math.random() * 20 + 8));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1 h-10">
      {heights.map((height, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-primary transition-all duration-150"
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
        "group cursor-pointer bg-card rounded-3xl shadow-xl border overflow-hidden",
        "transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]",
        "w-full max-w-md mx-auto"
      )}
    >
      <div className="p-10 md:p-12 flex flex-col items-center space-y-8">
        {/* Play Button */}
        <div className={cn(
          "w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center",
          "bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
        )}>
          <Play className="w-10 h-10 md:w-12 md:h-12 text-primary ml-1" />
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h3 className="font-semibold text-xl md:text-2xl">Inbound Call: New Patient</h3>
          <p className="text-base text-muted-foreground">Listening to prompt...</p>
        </div>

        {/* Audio Waveform Animation */}
        <AudioWaveform />

        {/* Subtle CTA */}
        <p className="text-sm tracking-widest text-muted-foreground uppercase font-medium">
          Listen to Pronto Live
        </p>
      </div>
    </div>
  );
};
