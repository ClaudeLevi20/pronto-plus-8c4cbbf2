import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";
import { VoiceDemoCard } from "./VoiceDemoCard";
import foundingHero from "@/assets/founding-hero.jpg";
import wave14 from "@/assets/wave-14.png";

interface FoundingHeroProps {
  onSignupClick: () => void;
}

export const FoundingHero = ({ onSignupClick }: FoundingHeroProps) => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${wave14})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={foundingHero} alt="Welcoming orthodontic reception area" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 text-center lg:text-left">
            <Badge variant="outline" className="border-primary text-primary px-6 py-2 text-sm font-semibold">
              FOUNDING 100
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              How To Stop Losing Starts to <span className="text-gradient">Voicemail & IVR</span> And Future Proof Your
              Practice
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              The first AI Receptionist trained specifically for orthodontics. It answers, books, and verifies
              insurance—so you never miss a patient again.
            </p>

            <div className="pt-2">
              <CountdownTimer className="max-w-xl mx-auto lg:mx-0" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button size="lg" onClick={onSignupClick} className="text-lg px-8 py-6">
                Join the Founders Cohort for $1
              </Button>
            </div>
          </div>

          {/* Right Column - Demo */}
          <div className="lg:pl-4">
            <VoiceDemoCard />
          </div>
        </div>
      </div>
    </section>
  );
};
