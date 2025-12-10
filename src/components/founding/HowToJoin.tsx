import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import waveDecoration from "@/assets/wave-decoration-ai.png";

interface HowToJoinProps {
  onSignupClick?: () => void;
}

const BenefitCard = ({ 
  title, 
  description, 
  index 
}: { 
  title: string; 
  description: string; 
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div 
      ref={ref}
      className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 hover:border-border hover:bg-card/80 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const HowToJoin = ({ onSignupClick }: HowToJoinProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: exchangeRef, isVisible: exchangeVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

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
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center space-y-6 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
              Lock In Your Founders Advantage.<br />
              <span className="text-primary">Limited to 100 Practices.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This is a one-time offer. Once the Pronto+ Founders Cohort closes, these benefits will never be available again at this price or with these terms.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            ))}
          </div>

          {/* Exchange Card */}
          <div 
            ref={exchangeRef}
            className={`relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-10 text-center transition-all duration-700 ${exchangeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-foreground">In exchange:</span>{" "}
              <span className="text-muted-foreground">
                Share honest feedback as you use Pronto+ (weekly check-ins) and optionally provide a case study or testimonial to help other orthodontists discover the power of AI-augmented front desks.
              </span>
            </p>
          </div>

          {/* CTA */}
          <div 
            ref={ctaRef}
            className={`text-center space-y-6 transition-all duration-700 delay-200 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button 
              size="xl" 
              onClick={onSignupClick}
              className="px-12 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Lock In My Founders Advantage ($1)
            </Button>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              This offer is limited to 100 practices or until enrollment closes. Once we hit 100, the doors close permanently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
