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
          {/* Asymmetric Split: 40/60 */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
            {/* Left Column (40%) - Tight punchy content */}
            <div className="lg:col-span-2 space-y-8 text-center lg:text-left">
              {/* Badge - Minimal Apple style */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill glass-subtle text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Attention: Orthodontists
              </div>

              {/* Headline - Huge, tight */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-balance leading-[1.1]">
                Stop Losing Starts to <span className="text-gradient">Voicemail.</span>
              </h1>

              {/* Subheadline - Clean, light */}
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                The first AI Receptionist trained specifically for orthodontics.
              </p>

              {/* Countdown - Refined */}
              <div className="pt-2">
                <CountdownTimer className="max-w-lg" />
              </div>

              {/* CTA - Prominent pill button */}
              <div className="pt-4">
                <Button size="xl" variant="hero" onClick={onSignupClick}>
                  Join the Founders Cohort for $1
                </Button>
              </div>
            </div>

            {/* Right Column (60%) - Visual bleeding off-screen */}
            <div className="lg:col-span-3 relative">
              {/* Card that bleeds off the right edge */}
              <div className="lg:translate-x-8 xl:translate-x-16 lg:-mr-8 xl:-mr-16">
                <AudioPreviewCard onClick={() => setIsDemoOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VoiceDemoModal open={isDemoOpen} onOpenChange={setIsDemoOpen} autoStart={true} />
    </>
  );
};
