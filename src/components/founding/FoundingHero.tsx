import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { AudioPreviewCard } from "./AudioPreviewCard";
import { VoiceDemoModal } from "./VoiceDemoModal";

interface FoundingHeroProps {
  onSignupClick: () => void;
}

export const FoundingHero = ({ onSignupClick }: FoundingHeroProps) => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Floating Orbs - Apple-style decorative elements */}
        <div className="orb orb-primary w-[600px] h-[600px] -top-40 -right-40 animate-float-slow" />
        <div className="orb orb-secondary w-[400px] h-[400px] top-1/2 -left-32 animate-float-delayed" />
        <div className="orb orb-accent w-[300px] h-[300px] bottom-20 right-1/4 animate-float" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 geometric-grid opacity-30" />

        {/* Content */}
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge - Minimal Apple style */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill glass-subtle text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Attention: Orthodontists
              </div>

              {/* Headline - Tight, powerful */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-balance">
                Stop Losing Starts to{" "}
                <span className="text-gradient">Voicemail</span>
              </h1>

              {/* Subheadline - Clean, light */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The first AI Receptionist trained specifically for orthodontics. 
                Answers, books, and verifies insurance—so you never miss a patient again.
              </p>

              {/* Countdown - Refined */}
              <div className="pt-2">
                <CountdownTimer className="max-w-xl mx-auto lg:mx-0" />
              </div>

              {/* CTA - Prominent pill button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="xl" 
                  variant="hero"
                  onClick={onSignupClick}
                >
                  Join the Founders Cohort for $1
                </Button>
              </div>
            </div>

            {/* Right Column - Audio Preview */}
            <div className="lg:pl-8">
              <AudioPreviewCard onClick={() => setIsDemoOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      <VoiceDemoModal open={isDemoOpen} onOpenChange={setIsDemoOpen} autoStart={true} />
    </>
  );
};
