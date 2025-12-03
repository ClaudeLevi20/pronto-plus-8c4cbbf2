import { Card, CardContent } from "@/components/ui/card";
import { SpotsCounter } from "./SpotsCounter";
import { CountdownTimer } from "./CountdownTimer";
import { Clock, Lock, Star, TrendingUp, Zap, Bot } from "lucide-react";
import wave14 from "@/assets/wave-14.png";

export const ScarcitySection = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${wave14})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Why Now Matters Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="text-gradient">Now</span> Matters
            </h2>
          </div>

          {/* AI Agent Era */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Bot className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">1. The AI Agent Era Is Arriving Fast</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Soon, booking a consultation will look like ordering from DoorDash — instant, automated, and AI-driven.
              </p>
              <p className="text-muted-foreground text-lg">
                Practices that are not AI-ready will struggle in the new search environment.
              </p>
              <p className="text-foreground font-semibold text-lg">
                ProntoPlus prepares your practice today, so you stay ahead tomorrow.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">2. This Founding Offer Will Never Be Repeated</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                We're selecting only 100 orthodontic practices to join our Founding Cohort.
              </p>
            </div>
          </div>

          {/* Spots and Timer */}
          <div className="space-y-6 text-center">
            <SpotsCounter className="justify-center" />
            <CountdownTimer className="max-w-2xl mx-auto w-full" />
          </div>

          {/* Founders vs Future Pricing */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/50 bg-primary/5">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Founders Receive:</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>After-hours Pronto receptionist free for life</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Full access to all three Pronto agents for 30 days</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Grandfathered pricing that never increases</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Priority onboarding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Direct influence on the product</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Founding Member recognition in the platform</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-2xl font-bold text-muted-foreground">Future Clinics Will Pay:</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-3xl font-bold">$499</span>
                    <span>/month for After-Hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-3xl font-bold">$699</span>
                    <span>/month for Full 24/7 Coverage</span>
                  </li>
                </ul>
                <p className="text-foreground font-semibold pt-4">
                  Founders will always pay less AND keep more benefits.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground text-lg">
            Once the 100 spots are filled — or once the 35-day window closes — this offer disappears permanently.
          </p>
        </div>
      </div>
    </section>
  );
};
