import { Button } from "@/components/ui/button";
import wave15 from "@/assets/wave-15.png";

interface HowToJoinProps {
  onSignupClick?: () => void;
}

export const HowToJoin = ({ onSignupClick }: HowToJoinProps) => {
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
      description: "As long as you're an active Pronto+ customer, your after-hours receptionist stays free. Founders only.",
    },
    {
      title: "Early Bird Pricing Lock",
      description: "Lock in a grandfathered rate on 24/7 coverage. Pricing never increases. Ever.",
    },
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${wave15})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic">
              Lock In Your Founders Advantage.<br />
              Limited to 100 Practices.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              This is a one-time offer. Once the Pronto+ Founders Cohort closes, these benefits will never be available again at this price or with these terms. The practices that join today will have advantages for life.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-bold italic mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Exchange Card */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
            <p className="text-base md:text-lg">
              <span className="font-bold italic">In exchange:</span>{" "}
              <span className="text-muted-foreground">
                Share honest feedback as you use Pronto+ (weekly check-ins) and optionally provide a case study or testimonial to help other orthodontists discover the power of AI-augmented front desks.
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <Button 
              size="lg" 
              variant="hero"
              className="px-12 py-6 text-lg rounded-full"
              onClick={onSignupClick}
            >
              Lock In My Founders Advantage ($1)
            </Button>
            <p className="text-sm text-muted-foreground">
              This offer is limited to 100 practices or until enrollment closes. Once we hit 100, the doors close permanently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
