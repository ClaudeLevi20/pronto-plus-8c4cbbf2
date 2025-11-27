import { Card, CardContent } from "@/components/ui/card";
import { SpotsCounter } from "./SpotsCounter";
import { CountdownTimer } from "./CountdownTimer";
import { Clock, Lock, Star, TrendingUp } from "lucide-react";
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
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <SpotsCounter className="justify-center" />
            
            <h2 className="text-4xl md:text-5xl font-bold">
              This Offer Will <span className="text-gradient">Never Be Repeated</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Once 100 practices join, the pilot closes permanently.
            </p>

            <div className="flex justify-center pt-4">
              <CountdownTimer className="max-w-2xl w-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/50 bg-primary/5">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Founders Get:</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>After-hours free forever</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Grandfathered rates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Priority access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Founding Member status</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-2xl font-bold text-muted-foreground">Everyone After the Pilot Will Pay:</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="text-3xl font-bold">$499</span>
                    <span>/month for After-Hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-3xl font-bold">$699</span>
                    <span>/month for Full Coverage</span>
                  </li>
                  <li className="pt-4 font-semibold">
                    No exceptions.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
