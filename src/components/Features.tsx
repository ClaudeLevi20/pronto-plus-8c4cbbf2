import { Card } from "@/components/ui/card";
import { Phone, Calendar, MessageSquare, Clock, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Smart Call Handling",
    description: "AI answers calls instantly with natural conversation, understanding patient needs and scheduling appointments seamlessly.",
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Book, reschedule, and confirm appointments automatically while syncing with your practice management system.",
  },
  {
    icon: MessageSquare,
    title: "Patient Engagement",
    description: "Send appointment reminders, follow-ups, and answer common questions via phone, SMS, or email.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call again. Your AI receptionist works around the clock, even on holidays and weekends.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Reduce wait times to zero. Patients get immediate answers without being put on hold.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security ensures all patient information is protected and fully compliant.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything Your Front Desk Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI features that transform how orthodontist practices handle patient communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
