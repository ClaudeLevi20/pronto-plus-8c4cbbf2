import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";
import foundingHero from "@/assets/founding-hero.jpg";
import wave11 from "@/assets/wave-11.png";

interface FoundingHeroProps {
  onSignupClick: () => void;
}

export const FoundingHero = ({ onSignupClick }: FoundingHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={foundingHero} 
          alt="AI-powered orthodontic receptionist" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        <img 
          src={wave11}
          alt="Wave decoration"
          className="absolute inset-0 w-full h-full object-contain opacity-85 pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="border-primary text-primary px-6 py-2 text-sm font-semibold">
            FOUNDING 100
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Never Miss Another{" "}
            <span className="text-gradient">Orthodontic Patient Call</span>{" "}
            Again
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Join the Founding 100 and Get After-Hours AI Receptionist Coverage for <span className="text-primary font-bold">$1</span>
          </p>

          <div className="space-y-4">
            <p className="text-lg text-foreground">
              Premium AI receptionist designed exclusively for orthodontic practices.<br />
              Answers every call. Books consults. Checks insurance. Handles emergencies.<br />
              Works 24/7. Never gets tired. Never misses.
            </p>
            
            <p className="text-xl font-semibold text-primary">
              Only 100 practices will ever get this offer.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <CountdownTimer className="max-w-2xl w-full" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={onSignupClick}
              className="text-lg px-8 py-6"
            >
              Reserve Your Founding Member Spot
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              See What's Included
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
