import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Systems",
    description: "Integrate Pronto with your practice management software in minutes. No technical expertise required.",
  },
  {
    number: "02",
    title: "Customize Your AI",
    description: "Train the AI on your practice's specific protocols, services, and frequently asked questions.",
  },
  {
    number: "03",
    title: "Go Live Instantly",
    description: "Activate your AI receptionist and start handling calls immediately. Monitor performance in real-time.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Contour line decorations */}
      <div className="contour-lines top-20 right-0" />
      <div className="contour-lines bottom-20 left-0" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Up and Running in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple setup process that gets your AI receptionist working for you immediately
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
