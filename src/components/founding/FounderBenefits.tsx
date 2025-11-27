import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Zap, Lock, HeadphonesIcon } from "lucide-react";
import foundingDashboard from "@/assets/founding-dashboard.jpg";
import wave11 from "@/assets/wave-11.png";

interface FounderBenefitsProps {
  onSignupClick: () => void;
}

export const FounderBenefits = ({ onSignupClick }: FounderBenefitsProps) => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <img 
        src={wave11}
        alt="Wave decoration"
        className="absolute inset-0 w-full h-full object-contain opacity-85 pointer-events-none"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Founding Member <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground">What you get for just $1</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">After-Hours AI Receptionist — Free for Life*</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Your practice never misses an after-hours call again. Evenings, weekends, holidays — always covered.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">
                  *Free for as long as the practice keeps an active ProntoPlus account. If pilot steps aren't completed, after-hours remains free for one full year.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Full 30-Day Access to Complete Suite</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Try every agent inside ProntoPlus with full 24/7 usage during the entire pilot.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">Receptionist Agent</p>
                  <p className="text-sm text-muted-foreground">Handles all inbound conversations with human-like warmth.</p>
                </div>
                <div>
                  <p className="font-semibold">Booking Agent</p>
                  <p className="text-sm text-muted-foreground">Schedules consults directly into your PMS.</p>
                </div>
                <div>
                  <p className="font-semibold">Insurance Agent</p>
                  <p className="text-sm text-muted-foreground">Checks benefits, explains coverage, and guides parents with clarity.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Lock className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Grandfathered "Founders Only" Pricing</CardTitle>
                </div>
                <CardDescription className="text-base">
                  A locked-in rate for full ProntoPlus that never increases. Exclusive access to pricing the public will never see again.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Post-pilot public pricing:</p>
                  <p className="text-lg">After-Hours Only: <span className="font-bold">$499/month</span></p>
                  <p className="text-lg">Full 24/7 Coverage: <span className="font-bold">$699/month</span></p>
                </div>
                <p className="text-primary font-semibold">
                  Founders receive preferred pricing that remains fixed for life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HeadphonesIcon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Priority Support + Founding Status</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Direct access to onboarding, calibration, and feedback calls.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Plus, a permanent badge that marks your clinic as part of the original 100 inside the platform.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <img 
              src={foundingDashboard} 
              alt="ProntoPlus dashboard" 
              className="rounded-lg shadow-2xl mx-auto mb-8"
            />
            <Button size="lg" onClick={onSignupClick} className="text-lg px-8 py-6">
              Join the Founding 100 for $1
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
