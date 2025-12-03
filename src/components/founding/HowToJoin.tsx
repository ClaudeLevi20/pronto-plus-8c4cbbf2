import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Zap, MessageSquare } from "lucide-react";
import wave15 from "@/assets/wave-15.png";

export const HowToJoin = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "1",
      title: "Claim Your Spot",
      description: "Only 100 clinics accepted.",
    },
    {
      icon: Zap,
      number: "2",
      title: "Activate ProntoPlus",
      description: "Takes just minutes — no IT needed.",
    },
    {
      icon: MessageSquare,
      number: "3",
      title: "Attend Your Check-In Calls",
      description: "Meet us at least twice and share your feedback. You help shape the future of ortho communication.",
    },
  ];

  return (
    <section 
      className="py-24 bg-card/50 relative overflow-hidden"
      style={{
        backgroundImage: `url(${wave15})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              How to <span className="text-gradient">Join the Pilot</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <Card key={step.number} className="text-center border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-semibold mb-2">Step {step.number}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-xl text-foreground font-semibold">
              Once complete →{" "}
              <span className="text-primary">Your after-hours AI receptionist stays free for life.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
