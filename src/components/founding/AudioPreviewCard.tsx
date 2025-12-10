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
        "max-w-sm mx-auto"
      )}
    >
      <div className="p-8 flex flex-col items-center space-y-6">
        {/* Play Button */}
        <div className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center",
          "bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
        )}>
          <Play className="w-8 h-8 text-primary ml-1" />
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-lg">Inbound Call: New Patient</h3>
          <p className="text-sm text-muted-foreground">Listening to prompt...</p>
        </div>

        {/* Audio Waveform Animation */}
        <AudioWaveform />

        {/* Subtle CTA */}
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-medium">
          Listen to Pronto Live
        </p>
      </div>
    </div>
  );
};
