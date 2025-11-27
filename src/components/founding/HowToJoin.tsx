import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import wave15 from "@/assets/wave-15.png";

export const HowToJoin = () => {
  const steps = [
    {
      number: "1",
      title: "Reserve Your Spot",
      description: "Only the first 100 clinics are accepted.",
    },
    {
      number: "2",
      title: "Activate ProntoPlus",
      description: "Turn on your after-hours receptionist with just a few clicks.",
    },
    {
      number: "3",
      title: "Complete Your 30-Day Trial",
      description: "Use all three AI agents with full access.",
    },
    {
      number: "4",
      title: "Join Quick Check-In Calls",
      description: "Attend at least two of three short calls so we can support your setup and gather feedback.",
    },
    {
      number: "5",
      title: "Unlock Lifetime Benefits",
      description: "Keep after-hours free and receive Founders-only pricing options.",
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
              Becoming a Founding Member Is <span className="text-gradient">Simple</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <Card key={step.number} className="text-center border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-3xl font-bold text-primary mx-auto mb-4">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
