import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Shield } from "lucide-react";
import foundingAgentsDiagram from "@/assets/founding-agents-diagram.jpg";
import wave15 from "@/assets/wave-15.png";

export const HowProntoWorks = () => {
  return (
    <section 
      className="py-24 bg-card/50 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${wave15})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Three AI Agents, One Seamless <span className="text-gradient">Ortho Phone System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ProntoPlus combines three specialty agents into a single flawless experience
            </p>
          </div>

          <div className="text-center">
            <img 
              src={foundingAgentsDiagram} 
              alt="Three-agent system diagram" 
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">1. Receptionist Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Answers instantly</p>
                <p>• Handles new patient questions</p>
                <p>• Provides warm, human-like interactions</p>
                <p>• Manages emergency calls with calm accuracy</p>
                <p>• Gives parents the confidence to move forward</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">2. Booking Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Schedules consults directly into your PMS</p>
                <p>• Follows your clinic's specific scheduling rules</p>
                <p>• Manages reschedules and timing preferences</p>
                <p>• Creates a consistent, reliable booking experience</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">3. Insurance Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Looks up benefits</p>
                <p>• Explains coverage in simple language parents understand</p>
                <p>• Reduces front-desk verification workload</p>
                <p>• Helps parents say "yes" with clarity and confidence</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-xl text-center text-foreground font-semibold">
            Together, these agents eliminate missed calls, reduce staff workload, and increase new patient conversions.
          </p>
        </div>
      </div>
    </section>
  );
};
