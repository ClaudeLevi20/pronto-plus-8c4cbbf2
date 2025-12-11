import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Check } from "lucide-react";
import waveDecoration from "@/assets/wave-decoration-ai.png";

interface HowToJoinProps {
  onSignupClick?: () => void;
}

export const HowToJoin = ({ onSignupClick }: HowToJoinProps) => {
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal();

  const benefits = [
    {
      title: "$1 to Secure Your Spot",
      description: "Lock in your Founders status today. No long-term contracts. No hidden fees.",
    },
    {
      title: "30 Days of Full Access",
      description: "Try every Pronto+ feature risk-free. Get the full experience before you decide.",
    },
    {
      title: "Free After-Hours Forever",
      description: "As long as you're an active Pronto+ customer, your after-hours receptionist stays free.",
    },
    {
      title: "Early Bird Pricing Lock",
      description: "Lock in a grandfathered rate on 24/7 coverage. Pricing never increases. Ever.",
    },
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-background">
      {/* Floating orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      
      {/* Wave texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url(${waveDecoration})`,
          backgroundSize: '700px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Centered Monolith Card */}
          <div 
            ref={cardRef}
            className={`relative transition-all duration-700 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl" />
            
            {/* Main Card */}
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-primary/10">
              {/* Header */}
              <div className="text-center mb-10 md:mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-medium bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  LIMITED TO 100 PRACTICES
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                  Lock In Your<br />
                  <span className="text-primary">Founders Advantage.</span>
                </h2>
              </div>

              {/* Benefits List */}
              <div className="space-y-6 mb-10 md:mb-12">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Exchange Note */}
              <div className="bg-muted/30 rounded-2xl p-5 mb-10 md:mb-12">
                <p className="text-sm text-center text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">In exchange:</span>{" "}
                  Share honest feedback as you use Pronto+ (weekly check-ins) and optionally provide a testimonial.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center space-y-4">
                <Button 
                  size="xl" 
                  onClick={onSignupClick}
                  className="w-full sm:w-auto px-12 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Lock In My Founders Advantage ($1)
                </Button>
                <p className="text-xs text-muted-foreground">
                  Once we hit 100, the doors close permanently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
