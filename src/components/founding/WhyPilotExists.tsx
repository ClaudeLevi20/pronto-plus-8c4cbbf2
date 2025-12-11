import { Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import waveLines from "@/assets/wave-lines.png";

export const WhyPilotExists = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();
  
  const problems = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "35% Missed Calls",
      description:
        "If a new patient hits voicemail, 75% hang up and call a competitor. You aren't just missing a call; you're donating a start.",
    },
    {
      icon: <span className="text-2xl">⚡</span>,
      title: "The Speed Trap",
      description: "Responding within 5 minutes increases conversion by 21x. An hour later? The opportunity is gone.",
    },
    {
      icon: <span className="text-2xl">😓</span>,
      title: "Front Desk Burnout",
      description:
        "Your staff is drowning in repetitive FAQs. Overwhelmed staff make mistakes, and mistakes cost money.",
    },
  ];

  return (
    <section id="problems" className="relative py-32 md:py-40 bg-background overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      {/* Wave texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${waveLines})`,
          backgroundSize: '800px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center space-y-6 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              The 3+1 Invisible Leaks
              <br />
              <span className="text-muted-foreground">Draining Your Practice.</span>
            </h2>
          </div>

          {/* 2x2 Grid Layout with Double-Width AI Threat Card */}
          <div 
            ref={cardsRef}
            className={`transition-all duration-700 delay-150 ${cardsVisible ? 'opacity-100' : 'opacity-100'}`}
          >
            {/* Top Row: 2 cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {problems.slice(0, 2).map((problem, index) => (
                <div
                  key={index}
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 space-y-5 hover:border-border hover:bg-card/80 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {problem.icon}
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 1 card + AI Threat spanning full or partial width */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Third problem card */}
              <div
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 space-y-5 hover:border-border hover:bg-card/80 transition-all duration-500"
                style={{ transitionDelay: `200ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {problems[2].icon}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{problems[2].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problems[2].description}</p>
                </div>
              </div>

              {/* AI Threat Card - Now in a 2x2 grid position */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-destructive/20 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-primary/5 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <span className="inline-flex items-center gap-2 text-xs font-medium bg-destructive/10 text-destructive px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                    NEW THREAT
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="text-3xl">🤖</div>
                    <h3 className="text-xl font-semibold tracking-tight">The AI Agent Evolution</h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Google is evolving from search engine to agent. If your practice can't talk to AI agents, you're invisible.
                  </p>
                </div>
              </div>
            </div>

            {/* Full-Width AI Threat Anchor Card */}
            <div className="mt-6 relative bg-card/50 backdrop-blur-sm border border-destructive/30 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/8 via-transparent to-primary/5 pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
                <p className="text-destructive font-semibold text-lg md:text-xl">
                  "If your practice can't talk to AI agents, you're invisible."
                </p>

                <p className="text-muted-foreground/80 text-sm max-w-xl mx-auto">
                  With missed calls, you know you lost 35% of calls. With AI routing? You won't even know patients are being sent to competitors' AI-ready practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
