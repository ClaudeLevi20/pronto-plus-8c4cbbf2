import { Button } from "@/components/ui/button";
import { Check, Phone, Calendar, Shield } from "lucide-react";
import foundingDashboard from "@/assets/founding-dashboard.jpg";
import wave12 from "@/assets/wave-12.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface DesireSectionProps {
  onSignupClick: () => void;
}

export const DesireSection = ({ onSignupClick }: DesireSectionProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();
  const { ref: agentsRef, isVisible: agentsVisible } = useScrollReveal();
  const { ref: resultRef, isVisible: resultVisible } = useScrollReveal();

  const features = [
    {
      title: "Ortho-First Intelligence",
      description: "Not generic dental AI.",
      subtext: "Pronto+ understands braces, aligners, Phase 1 vs. Phase 2, emergencies, and parent/teen questions.",
    },
    {
      title: "Supports Your Team, Not Replaces Them",
      description: "Pronto+ handles the repetitive work so your front desk can focus on people:",
      points: [
        "Answering every call",
        "Managing FAQs",
        "Triage",
        "Insurance questions",
        "Simple scheduling",
      ],
      footer: "Your team stays calm. Your patients feel cared for.",
    },
    {
      title: "Set Up in Minutes",
      description: "No IT. No hardware.",
      subtext: "You control the tone, the rules, and when calls hand off to humans.",
    },
  ];

  const agents = [
    {
      icon: Phone,
      name: "Receptionist Agent",
      description: "answers instantly and guides patients",
    },
    {
      icon: Calendar,
      name: "Booking Agent",
      description: "schedules consults and follow-ups",
    },
    {
      icon: Shield,
      name: "Insurance Agent",
      description: "checks benefits and explains coverage clearly",
    },
  ];

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
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center space-y-6 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet <span className="text-gradient">Pronto+</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              The AI Receptionist Built Only for Orthodontists
            </p>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Pronto+ solves the three biggest revenue leaks in ortho practices with one simple, supportive system.
            </p>
          </div>

          {/* Features Grid */}
          <div 
            ref={featuresRef}
            className={`space-y-6 transition-all duration-700 delay-100 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                    {feature.subtext && (
                      <p className="text-foreground">{feature.subtext}</p>
                    )}
                    {feature.points && (
                      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                        {feature.points.map((point, i) => (
                          <li key={i} className="text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    {feature.footer && (
                      <p className="text-primary font-medium pt-2">{feature.footer}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Three Agents Section */}
          <div 
            ref={agentsRef}
            className={`space-y-8 transition-all duration-700 delay-200 ${agentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-primary/10 flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Three Specialized Agents Working Together
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {agents.map((agent, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-card/70 border border-border/50 hover:border-primary/30 transition-colors text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <agent.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{agent.name}</h4>
                  <p className="text-muted-foreground text-sm">{agent.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground">
              All seamless. All 24/7. <span className="text-primary font-medium">All designed for ortho.</span>
            </p>
          </div>

          {/* The Result + Transition */}
          <div 
            ref={resultRef}
            className={`space-y-8 transition-all duration-700 delay-300 ${resultVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center p-8 rounded-lg bg-card/70 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Result</h3>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg text-muted-foreground">
                <span>A calmer team.</span>
                <span>Happier patients.</span>
                <span>Fewer lost starts.</span>
                <span className="text-primary font-semibold">More predictable growth.</span>
              </div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-xl md:text-2xl text-foreground font-semibold max-w-3xl mx-auto">
                And for a limited time, <span className="text-gradient">100 practices</span> can access Pronto+ in a way that will never be offered again.
              </p>
              <Button size="lg" onClick={onSignupClick} className="text-lg px-8 py-6">
                Join the Founding 100 for $1
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
