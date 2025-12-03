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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Never Miss Another{" "}
            <span className="text-gradient">Patient Call</span>{" "}
            Again
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Become a Founding Member and Get After-Hours AI Receptionist Coverage for <span className="text-primary font-bold">$1</span>
          </p>

          <div className="space-y-4 text-lg text-foreground">
            <p>
              Parents call when life is busy. Teens call after school. Emergencies happen at all hours.
            </p>
            <p className="text-muted-foreground">
              And every missed call, long wait time, or overwhelmed front desk leads to:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-primary font-semibold">
              <span>Lost starts</span>
              <span>•</span>
              <span>Stressed staff</span>
              <span>•</span>
              <span>Frustrated patients</span>
            </div>
            <p className="text-xl font-semibold pt-2">
              ProntoPlus fixes all three.
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
              Join the Founding 100 for $1
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
