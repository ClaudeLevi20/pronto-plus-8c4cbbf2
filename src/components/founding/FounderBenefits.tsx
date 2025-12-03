import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import foundingDashboard from "@/assets/founding-dashboard.jpg";
import wave14 from "@/assets/wave-14.png";

interface FounderBenefitsProps {
  onSignupClick: () => void;
}

export const FounderBenefits = ({ onSignupClick }: FounderBenefitsProps) => {
  const benefits = [
    "Answer every call instantly",
    "Help every parent within seconds",
    "Give your team breathing room",
    "Provide warm, human-like service 24/7",
    "Handle emergencies with confidence",
    "Check insurance benefits on the call",
    "Book appointments automatically",
    "Never stress about staffing shortages again",
    "And be ready for the new AI booking world",
  ];

  return (
    <section 
      id="benefits"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${wave14})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* What If Section */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              What If Every One of Those Problems{" "}
              <span className="text-gradient">Disappeared?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What if your practice could:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-left p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-xl text-muted-foreground pt-4">
              What if all of that worked together…<br />
              <span className="text-foreground font-semibold">seamlessly, reliably, and with zero extra effort from your team?</span>
            </p>
          </div>

          {/* Meet ProntoPlus Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center pt-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Meet <span className="text-gradient">ProntoPlus</span>
              </h3>
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
            
            <div>
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
