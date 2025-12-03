import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneMissed, Clock, Users } from "lucide-react";
import wave15 from "@/assets/wave-15.png";

export const WhyPilotExists = () => {
  const problems = [
    {
      icon: PhoneMissed,
      title: "Missed Calls (During + After Hours)",
      stats: [
        "Orthodontic practices miss 32–38% of inbound calls.",
        "75% of callers who hit voicemail never call back.",
        "Missing just one new patient call per day can approach $1M/year in lost potential production.",
      ],
      translation: "Every missed call is a start you may never recover.",
    },
    {
      icon: Clock,
      title: "Slow Answer Times",
      stats: [
        "Families won't wait.",
        "If calls aren't answered fast, they hang up and book elsewhere.",
        "Responding within 3 rings makes callers 21x more likely to convert.",
        "Most practices can't hit that consistently—especially during peak hours.",
      ],
      translation: "Even answered calls become lost opportunities when the response is slow.",
    },
    {
      icon: Users,
      title: "Front-Desk Overload",
      stats: [
        "Your team is doing everything—checking in patients, managing schedules, handling emergencies, and answering nonstop calls.",
        "63% of dental team members report frequent burnout",
        "Front desk roles have the highest turnover",
        "Each departure costs $10k–$70k+ in lost productivity",
      ],
      translation: "When your team is stretched thin, calls slip… and revenue slips with them.",
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
              The Three Silent Problems{" "}
              <span className="text-gradient">Hurting Ortho Practices</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {problem.stats.map((stat, i) => (
                      <li key={i} className="leading-relaxed">{stat}</li>
                    ))}
                  </ul>
                  <p className="text-primary font-semibold text-sm italic border-t border-border/50 pt-4">
                    {problem.translation}
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
