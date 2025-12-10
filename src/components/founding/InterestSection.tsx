import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import waveDecoration from "@/assets/wave-decoration-ai.png";

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
      className={`group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-700 hover:bg-card/80 hover:border-border hover:shadow-lg ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const InterestSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const benefits = [
    {
      title: "Your Receptionists Do More of What They Love",
      description: "Pronto+ takes rescheduling, FAQs, and after-hours calls off their plate. They focus on the relationships and moments that actually matter—greeting patients, solving real problems, building trust.",
    },
    {
      title: "Less Burnout. Better Retention.",
      description: "Repetitive tasks drain energy. When your staff spends time on human work—conversations, problem-solving, care—they stay engaged, motivated, and with you longer.",
    },
    {
      title: "Better Patient Experience",
      description: "With Pronto+ handling the busywork, your receptionists have mental space and time to give patients genuine attention. That human touch is irreplaceable.",
    },
  ];

  return (
    <section 
      id="interest"
      className="relative py-32 md:py-40 bg-muted/30 overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Wave texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url(${waveDecoration})`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 md:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Meet Pronto+.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your front desk superpower. Handles the repetitive. Frees your team for what matters.
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index} 
                title={benefit.title}
                description={benefit.description}
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
