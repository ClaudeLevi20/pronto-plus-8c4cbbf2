import { Phone } from "lucide-react";

export const WhyPilotExists = () => {
  const problems = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "35% Missed Calls",
      description: "If a new patient hits voicemail, 75% hang up and call a competitor. You aren't just missing a call; you're donating a start.",
    },
    {
      icon: <span className="text-2xl">⚡</span>,
      title: "The Speed Trap",
      description: "Responding within 5 minutes increases conversion by 21x. An hour later? The opportunity is gone.",
    },
    {
      icon: <span className="text-2xl">😓</span>,
      title: "Front Desk Burnout",
      description: "Your staff is drowning in repetitive FAQs. Overwhelmed staff make mistakes, and mistakes cost money.",
    },
  ];

  return (
    <section 
      id="problems"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="orb orb-secondary w-[500px] h-[500px] -top-40 -left-40" />
      <div className="orb orb-primary w-[400px] h-[400px] bottom-20 -right-32" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-display font-display font-semibold tracking-tight text-foreground">
              The 3 Invisible Leaks
              <br />
              <span className="text-muted-foreground">Draining Your Practice.</span>
            </h2>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="glass-subtle rounded-2xl p-8 space-y-5 hover:shadow-float transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{problem.title}</h3>
                <p className="text-muted-foreground text-body leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* AI Agent Evolution Card */}
          <div className="glass rounded-3xl p-10 md:p-12 relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium bg-destructive/10 text-destructive px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                NEW THREAT
              </span>
              
              <div className="text-4xl">🤖</div>
              
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                The AI Agent Evolution
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Google Search Labs now lets opted-in U.S. users book restaurants and services directly from AI Mode. Bookings for local services are next. Google is evolving from search engine to agent.
              </p>
              
              <p className="text-destructive font-semibold text-lg">
                If your practice can't talk to AI agents, you're invisible.
              </p>
              
              <p className="text-muted-foreground/80 italic text-sm max-w-xl mx-auto">
                With missed calls, you know you lost 35% of calls. With this? You won't even know patients are being routed to competitors' AI-ready practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
