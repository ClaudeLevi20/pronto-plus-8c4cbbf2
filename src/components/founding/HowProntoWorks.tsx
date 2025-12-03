import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, Shield, DollarSign, Heart, Users } from "lucide-react";
import foundingAgentsDiagram from "@/assets/founding-agents-diagram.jpg";
import wave15 from "@/assets/wave-15.png";

export const HowProntoWorks = () => {
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
        <div className="max-w-6xl mx-auto space-y-16">
          {/* 3-Agent System Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              How ProntoPlus Works:{" "}
              <span className="text-gradient">The 3-Agent System</span>
            </h2>
          </div>

          {/* Diagram */}
          <div className="text-center">
            <img 
              src={foundingAgentsDiagram} 
              alt="Receptionist Agent → Booking Agent → Insurance Agent" 
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>

          {/* 3 Agent Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/30">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">1. Receptionist Agent</CardTitle>
                <p className="text-primary font-medium">Warm, human-like, always available</p>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Answers instantly</p>
                <p>• Handles common questions</p>
                <p>• Recognizes emergencies</p>
                <p>• Knows when to hand off to a human</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">2. Booking Agent</CardTitle>
                <p className="text-primary font-medium">Fast, accurate scheduling</p>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Books new patient consults</p>
                <p>• Follows your exact scheduling rules</p>
                <p>• Manages reschedules</p>
                <p>• Syncs with your PMS</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">3. Insurance Agent</CardTitle>
                <p className="text-primary font-medium">The Benefit Maximizer</p>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Checks benefits in seconds</p>
                <p>• Explains coverage clearly</p>
                <p>• Helps patients feel confident booking</p>
                <p>• Passes verified info to your staff when needed</p>
              </CardContent>
            </Card>
          </div>

          {/* Three Things Section */}
          <div className="space-y-8 pt-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center">
              ProntoPlus Improves the Three Things{" "}
              <span className="text-gradient">Ortho Owners Care About Most</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">1. It Protects Your Revenue</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>No more missed calls.</p>
                  <p>No more slow answer times.</p>
                  <p>No more lost new patients.</p>
                  <p className="text-foreground font-semibold pt-2">Your practice becomes reachable 24/7.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">2. It Reduces Stress and Burnout</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>Your team gets to breathe again.</p>
                  <p>ProntoPlus handles the repetitive work so your staff can focus on people, not pressure.</p>
                  <p className="text-foreground font-semibold pt-2">A calmer front desk → a smoother practice → a happier doctor.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">3. It Elevates the Patient Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2">
                  <p>Families feel heard.</p>
                  <p>They get answers fast.</p>
                  <p>They can book appointments anytime.</p>
                  <p>Emergencies are handled with care.</p>
                  <p className="text-foreground font-semibold pt-2">A modern, gentle, friction-free experience every time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
