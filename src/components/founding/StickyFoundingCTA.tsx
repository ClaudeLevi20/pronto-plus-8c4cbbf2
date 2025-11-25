import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { X } from "lucide-react";

interface StickyFoundingCTAProps {
  onSignupClick: () => void;
}

export const StickyFoundingCTA = ({ onSignupClick }: StickyFoundingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-lg border-t border-primary/30 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Spots Counter and Timer */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-lg">87/100</span>
                <span className="text-muted-foreground">spots left</span>
              </div>
              <CountdownTimer compact className="text-xs" />
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <Button 
                size="lg" 
                onClick={onSignupClick}
                className="text-base px-6 hover:scale-105 transition-transform"
              >
                Reserve Your Spot for $1
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDismissed(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
