import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Zap, Calendar, Shield, AlertCircle, Users, ArrowRightLeft, Settings } from "lucide-react";
import foundingHappyParent from "@/assets/founding-happy-parent.jpg";
import wave11 from "@/assets/wave-11.png";

export const WhyOrthoLove = () => {
  const features = [
    { icon: Clock, title: "24/7 Phone Coverage", description: "Never miss a new patient again." },
    { icon: Heart, title: "Human-Like Conversations", description: "Warm, confident, natural responses." },
    { icon: Zap, title: "Speed-to-Lead Advantage", description: "Instant answer + zero wait time = more starts." },
    { icon: Calendar, title: "Appointment Booking + PMS Integration", description: "No manual work for your team." },
    { icon: Shield, title: "Insurance Benefits Checker", description: "Gives parents real answers upfront." },
    { icon: AlertCircle, title: "Emergency Call Handling", description: "Broken brackets, lost aligners, poking wires — handled flawlessly." },
    { icon: Users, title: "Makes Your Team Superhuman", description: "Front desk focuses on in-clinic care while Pronto handles repetitive tasks." },
    { icon: ArrowRightLeft, title: "AI-to-Human Handover", description: "Call gets transferred seamlessly when needed." },
    { icon: Settings, title: "Setup in Minutes", description: "No IT. No hardware. No learning curve." },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <img 
        src={wave11}
        alt="Wave decoration"
        className="absolute inset-0 w-full h-full object-contain opacity-85 pointer-events-none"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Built Exclusively for <span className="text-gradient">Orthodontics</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Generic AI phone systems don't understand specialty workflows. ProntoPlus does.
              </p>
            </div>
            <div>
              <img 
                src={foundingHappyParent} 
                alt="Happy parent on phone" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 space-y-3">
                  <feature.icon className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
