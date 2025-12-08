import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./CountdownTimer";
import foundingHero from "@/assets/founding-hero.jpg";
import wave14 from "@/assets/wave-14.png";

interface FoundingHeroProps {
  onSignupClick: () => void;
}

export const FoundingHero = ({ onSignupClick }: FoundingHeroProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-40"
      style={{
        backgroundImage: `url(${wave14})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={foundingHero} 
          alt="Welcoming orthodontic reception area" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="border-primary text-primary px-6 py-2 text-sm font-semibold">
            FOUNDING 100
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            3 Reasons Orthodontic Practices Lose Over{" "}
            <span className="text-gradient">$330k/Year</span>{" "}
            — and the $1 Tool That Fixes All Three
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Missed calls, slow response times, and front-desk overload quietly drain hundreds of thousands from even the best practices. Pronto+ addresses all these challenges—protecting your revenue, easing your team's workload, and giving patients a smoother experience.
          </p>

          <div className="flex justify-center pt-4">
            <CountdownTimer className="max-w-2xl w-full" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={onSignupClick}
              className="text-lg px-8 py-6"
            >
              Join the Founders Cohort for $1
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
