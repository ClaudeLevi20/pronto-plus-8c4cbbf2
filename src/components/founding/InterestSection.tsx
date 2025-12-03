import { Check } from "lucide-react";
import wave14 from "@/assets/wave-14.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const InterestSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();
  const { ref: closingRef, isVisible: closingVisible } = useScrollReveal();

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
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div 
              ref={headerRef}
              className={`space-y-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                What If Every One of Those Problems{" "}
                <span className="text-gradient">Disappeared?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                What if your practice could:
              </p>
            </div>

            <div 
              ref={benefitsRef}
              className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto transition-all duration-700 delay-200 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-left p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <p 
              ref={closingRef}
              className={`text-xl text-muted-foreground pt-4 transition-all duration-700 delay-300 ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              What if all of that worked together…<br />
              <span className="text-foreground font-semibold">seamlessly, reliably, and with zero extra effort from your team?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
