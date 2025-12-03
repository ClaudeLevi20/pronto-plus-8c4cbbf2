import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneMissed, Clock, Users, Bot } from "lucide-react";
import wave15 from "@/assets/wave-15.png";

export const WhyPilotExists = () => {
  const problems = [
    {
      icon: PhoneMissed,
      title: "Missed Calls = Missed Revenue",
      description: "Parents call when they can — often after work, during lunch, or in a rush. But orthodontic practices miss far more calls than they realize. And every missed call is a patient you may never speak to again.",
    },
    {
      icon: Clock,
      title: "Slow Answer Times = Lost Patients",
      description: "Most families don't wait. If your practice doesn't pick up fast, they call the next office on Google. Speed matters. Slow phones quietly drain revenue every single day.",
    },
    {
      icon: Users,
      title: "Front Desk Overload = Burnout",
      description: "Your team is doing everything they can. But they're being pulled in every direction: check-ins, scheduling, emergencies, phones ringing nonstop, insurance questions. Even the best front desk staff can't be everywhere at once. When they're overwhelmed… patients feel the stress too.",
    },
    {
      icon: Bot,
      title: "The AI-Agent Shift Is Coming",
      description: "Soon, parents will be able to book appointments straight from Google… without calling your office. Practices that aren't AI-ready will fall behind fast. Practices that prepare now will lead their markets. This shift is coming — faster than most realize.",
    },
  ];

  return (
    <section 
      id="problems"
      className="py-24 bg-card/50 relative overflow-hidden"
      style={{
        backgroundImage: `url(${wave15})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Four Silent Problems{" "}
              <span className="text-gradient">Hurting Ortho Practices</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <problem.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
