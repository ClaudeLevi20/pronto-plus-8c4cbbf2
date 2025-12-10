import { Card, CardContent } from "@/components/ui/card";
import { Phone, Zap } from "lucide-react";

export const WhyPilotExists = () => {
  const problems = [
    {
      icon: <Phone className="h-8 w-8 text-foreground" />,
      title: "35% Missed Calls",
      description: "If a new patient hits voicemail, 75% hang up and call a competitor. You aren't just missing a call; you're donating a start.",
    },
    {
      icon: <span className="text-3xl">⚡</span>,
      title: "The Speed Trap",
      description: "Responding within 5 minutes increases conversion by 21x. An hour later? The opportunity is gone.",
    },
    {
      icon: <span className="text-3xl">😓</span>,
      title: "Front Desk Burnout",
      description: "Your staff is drowning in repetitive FAQs. Overwhelmed staff make mistakes, and mistakes cost money.",
    },
  ];

  return (
    <section 
      id="problems"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              The 3 Invisible Leaks<br />
              Draining Your Practice.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="border-border/30 bg-card shadow-sm">
                <CardContent className="pt-6 space-y-4">
                  <div className="mb-2">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Agent Evolution Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6 space-y-4 relative">
              <span className="absolute top-4 right-4 text-xs font-semibold bg-primary/20 text-primary px-3 py-1 rounded-full">
                NEW THREAT
              </span>
              <div className="text-3xl">🤖</div>
              <h3 className="text-xl font-bold text-primary">The AI Agent Evolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Google Search Labs now lets opted-in U.S. users book restaurants and services directly from AI Mode. Bookings for local services are next. Google is evolving from search engine to agent.
              </p>
              <p className="text-destructive font-semibold">
                If your practice can't talk to AI agents, you're invisible.
              </p>
              <p className="text-muted-foreground italic text-sm">
                With missed calls, you know you lost 35% of calls. With this? You won't even know patients are being routed to competitors' AI-ready practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
