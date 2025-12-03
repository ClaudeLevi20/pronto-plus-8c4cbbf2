import { Button } from "@/components/ui/button";
import foundingDashboard from "@/assets/founding-dashboard.jpg";
import wave12 from "@/assets/wave-12.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface DesireSectionProps {
  onSignupClick: () => void;
}

export const DesireSection = ({ onSignupClick }: DesireSectionProps) => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section 
      id="desire"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card/80"
      style={{
        backgroundImage: `url(${wave12})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              ref={contentRef}
              className={`space-y-6 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet <span className="text-gradient">ProntoPlus</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The Ortho-First AI Receptionist That Supports Your Team
              </p>
              <p className="text-lg text-foreground">
                ProntoPlus was built only for orthodontic practices. Not general dentistry. Not medical. Just ortho.
              </p>
              <p className="text-muted-foreground">
                It understands:
              </p>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <span>• Consult workflows</span>
                <span>• Phase 1 vs Phase 2</span>
                <span>• Emergencies</span>
                <span>• Aligner concerns</span>
                <span>• Braces issues</span>
                <span>• Parent questions</span>
                <span>• Teen communication</span>
                <span>• Scheduling rules unique to ortho</span>
                <span className="col-span-2">• Insurance coverage that matters in ortho</span>
              </div>
              <p className="text-lg font-semibold text-primary pt-4">
                This is AI that actually helps your team — not replaces them.
              </p>
              <Button size="lg" onClick={onSignupClick} className="text-lg px-8 py-6">
                Join the Founding 100 for $1
              </Button>
            </div>
            
            <div 
              ref={imageRef}
              className={`transition-all duration-700 delay-200 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <img 
                src={foundingDashboard} 
                alt="ProntoPlus dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
