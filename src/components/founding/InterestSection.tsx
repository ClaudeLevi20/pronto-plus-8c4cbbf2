import { Check } from "lucide-react";
import wave14 from "@/assets/wave-14.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BenefitItem = ({ 
  benefit, 
  index 
}: { 
  benefit: { title: string; points: string[] }; 
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal();
  const isEven = index % 2 === 0;
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${
        isEven ? '' : 'md:flex-row-reverse'
      } ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
      }`}
    >
      {/* Icon side */}
      <div className={`flex-shrink-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
          <Check className="h-10 w-10 text-primary" />
        </div>
      </div>
      
      {/* Content side */}
      <div 
        className={`flex-1 p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors text-center md:text-left ${isEven ? '' : 'md:text-right'}`}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          {benefit.title}
        </h3>
        <div className="space-y-1 text-muted-foreground">
          {benefit.points.map((point, i) => (
            <p key={i}>{point}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export const InterestSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: closingRef, isVisible: closingVisible } = useScrollReveal();

  const benefits = [
    {
      title: "Answer Every Call — Even After Hours",
      points: [
        "No more missed new patients.",
        "No more silent revenue leaks.",
      ],
    },
    {
      title: "Respond Instantly, Every Time",
      points: [
        "No holds. No voicemail.",
        "Just fast, caring support that keeps families from calling another practice.",
      ],
    },
    {
      title: "Give Your Front Desk Room to Breathe",
      points: [
        "Repetitive questions handled.",
        "Emergencies triaged.",
        "Peak call times smoothed out.",
        "Your team finally gets to focus on people, not pressure.",
      ],
    },
    {
      title: "Deliver a Better Patient Experience",
      points: [
        "Parents get clarity.",
        "Teens feel supported.",
        "New patients book without friction.",
      ],
    },
    {
      title: "Stay Ahead of the Coming AI-Agent Shift",
      points: [
        "As booking moves from \"phone calls\" to \"AI-to-AI interactions,\"",
        "your practice is already ready.",
      ],
    },
  ];

  return (
    <section 
      id="interest"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${wave14})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            <div 
              ref={headerRef}
              className={`text-center space-y-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                What If These Problems{" "}
                <span className="text-gradient">Disappeared Overnight?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Imagine if your practice could:
              </p>
            </div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} benefit={benefit} index={index} />
              ))}
            </div>

            <div 
              ref={closingRef}
              className={`text-center pt-8 transition-all duration-700 ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-xl md:text-2xl text-foreground font-semibold max-w-3xl mx-auto">
                There is a way to fix all three revenue leaks at once — with a tool built specifically for{" "}
                <span className="text-gradient">orthodontic practices</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
