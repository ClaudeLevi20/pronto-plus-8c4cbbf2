import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
      className={`transition-all duration-700 delay-${index * 100} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-xl font-bold text-primary mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
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
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet Pronto+.
            </h2>
            <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto">
              Your front desk superpower. Handles the repetitive. Frees your team for what matters.
            </p>
          </div>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-12">
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
