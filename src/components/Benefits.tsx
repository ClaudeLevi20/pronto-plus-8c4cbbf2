import { Card } from "@/components/ui/card";
import clinicOffice from "@/assets/clinic-office.jpg";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Convert more inquiries into booked appointments with instant response times and professional service.",
  },
  {
    icon: Users,
    title: "Improve Patient Satisfaction",
    description: "Provide exceptional service with zero wait times and consistent, friendly communication 24/7.",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Lower staffing costs while handling unlimited calls simultaneously without compromising quality.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Transform Your Practice
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See measurable results from day one with Pronto's AI receptionist
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all" />
            <div className="relative overflow-hidden rounded-2xl border border-border/50">
              <img 
                src={clinicOffice} 
                alt="Modern Orthodontist Clinic" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
