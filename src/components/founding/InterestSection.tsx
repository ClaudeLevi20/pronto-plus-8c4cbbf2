import { Check } from "lucide-react";
import wave14 from "@/assets/wave-14.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const InterestSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();
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
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
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

            <div 
              ref={benefitsRef}
              className={`space-y-6 transition-all duration-700 delay-200 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        {benefit.points.map((point, i) => (
                          <p key={i}>{point}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div 
              ref={closingRef}
              className={`text-center pt-8 transition-all duration-700 delay-300 ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
