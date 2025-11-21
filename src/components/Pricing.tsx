import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DemoBookingModal } from "./DemoBookingModal";

const pricingTiers = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small practices getting started",
    features: [
      "AI-powered call handling",
      "Up to 200 calls/month",
      "Appointment scheduling",
      "Basic analytics",
      "Email support",
      "24/7 availability",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$699",
    description: "Ideal for growing orthodontic practices",
    features: [
      "Everything in Starter",
      "Up to 500 calls/month",
      "Advanced appointment management",
      "Patient data integration",
      "Priority phone support",
      "Custom voice training",
      "Detailed analytics dashboard",
      "Multi-location support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large practices and clinic chains",
    features: [
      "Everything in Professional",
      "Unlimited calls",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced reporting & insights",
      "White-label options",
      "SLA guarantee",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const Pricing = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your practice. All plans include a 30-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.popular ? "border-primary shadow-primary scale-105" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-8">
                <Button
                  variant={tier.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <DemoBookingModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  );
};
