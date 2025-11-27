import { Button } from "@/components/ui/button";
import foundingOrthodontist from "@/assets/founding-orthodontist.jpg";
import wave14 from "@/assets/wave-14.png";

interface FoundingCTAProps {
  onSignupClick: () => void;
}

export const FoundingCTA = ({ onSignupClick }: FoundingCTAProps) => {
  return (
    <section 
      className="py-24 bg-card/50 relative overflow-hidden"
      style={{
        backgroundImage: `url(${wave14})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={foundingOrthodontist} 
                alt="Confident orthodontist" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Become a <span className="text-gradient">Founding Member</span> for $1
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Try ProntoPlus for 30 days. Help shape the future of ortho AI. Unlock benefits for life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={onSignupClick}
                  className="text-lg px-8 py-6"
                >
                  Claim Your Spot
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-lg px-8 py-6"
                >
                  Learn More About ProntoPlus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
