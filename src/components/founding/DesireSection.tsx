import { Button } from "@/components/ui/button";
import { Phone, Calendar, Shield, Zap, Users, Settings, Clock, CheckCircle } from "lucide-react";
import wave12 from "@/assets/wave-12.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface DesireSectionProps {
  onSignupClick: () => void;
}

export const DesireSection = ({ onSignupClick }: DesireSectionProps) => {
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();
  const { ref: resultRef, isVisible: resultVisible } = useScrollReveal();

  return (
    <section 
      id="desire"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card/80"
      style={{
        backgroundImage: `url(${wave12})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Bento Grid */}
          <div 
            ref={gridRef}
            className={`grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Row 1 */}
            {/* Ortho-First */}
            <div className="col-span-1 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-center">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <p className="text-xs text-muted-foreground">Built for</p>
              <p className="text-lg font-bold text-foreground">Orthodontics</p>
              <p className="text-xs text-muted-foreground mt-1">Only</p>
            </div>

            {/* 24/7 */}
            <div className="col-span-1 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-center items-center text-center">
              <p className="text-xs text-muted-foreground">Available</p>
              <p className="text-3xl md:text-4xl font-bold text-gradient">24/7</p>
              <p className="text-xs text-muted-foreground">Coverage</p>
            </div>

            {/* No missed calls */}
            <div className="col-span-1 p-5 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all flex flex-col justify-center">
              <p className="text-primary text-2xl md:text-3xl font-bold">0</p>
              <p className="text-sm text-foreground font-medium">Missed Calls</p>
              <p className="text-xs text-muted-foreground">Ever again</p>
            </div>

            {/* Set up time */}
            <div className="col-span-1 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-center items-center text-center">
              <Clock className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="text-xs text-muted-foreground">Set up in</p>
              <p className="text-2xl font-bold text-foreground">Minutes</p>
            </div>

            {/* No IT */}
            <div className="col-span-1 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-center">
              <Settings className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="text-sm font-medium text-foreground">No IT</p>
              <p className="text-xs text-muted-foreground">No hardware</p>
            </div>

            {/* Row 2 */}
            {/* Understands */}
            <div className="col-span-1 md:row-span-2 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all">
              <p className="text-xs text-muted-foreground mb-3">Understands</p>
              <div className="space-y-2">
                {["Braces", "Aligners", "Phase 1 & 2", "Emergencies", "Parent Qs"].map((item) => (
                  <p key={item} className="text-sm text-foreground">{item}</p>
                ))}
              </div>
            </div>

            {/* CENTER - Meet Pronto+ */}
            <div className="col-span-2 md:col-span-3 row-span-2 p-8 rounded-3xl bg-gradient-to-br from-card via-card/90 to-card/80 border-2 border-primary/30 hover:border-primary/50 transition-all flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
              <div className="relative z-10">
                <p className="text-sm text-muted-foreground mb-2">Introducing</p>
                <h2 className="text-4xl md:text-6xl font-bold mb-2">
                  <span className="text-gradient">Pronto+</span>
                </h2>
                <p className="text-lg md:text-xl text-foreground font-medium mb-4">
                  AI Receptionist
                </p>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Solves the three biggest revenue leaks in ortho practices with one simple system
                </p>
              </div>
            </div>

            {/* Supports team */}
            <div className="col-span-1 md:row-span-2 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-between">
              <Users className="h-8 w-8 text-primary" />
              <div className="mt-auto">
                <p className="text-lg font-bold text-foreground">Supports</p>
                <p className="text-sm text-muted-foreground">Your Team</p>
                <p className="text-xs text-muted-foreground mt-2">Not replaces them</p>
              </div>
            </div>

            {/* Row 3 - Agents */}
            {/* Receptionist Agent */}
            <div className="col-span-1 p-4 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all">
              <Phone className="h-6 w-6 text-primary mb-2" />
              <p className="text-sm font-semibold text-foreground">Receptionist</p>
              <p className="text-xs text-muted-foreground">Agent</p>
            </div>

            {/* Booking Agent */}
            <div className="col-span-1 p-4 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all">
              <Calendar className="h-6 w-6 text-primary mb-2" />
              <p className="text-sm font-semibold text-foreground">Booking</p>
              <p className="text-xs text-muted-foreground">Agent</p>
            </div>

            {/* Insurance Agent */}
            <div className="col-span-1 p-4 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all">
              <Shield className="h-6 w-6 text-primary mb-2" />
              <p className="text-sm font-semibold text-foreground">Insurance</p>
              <p className="text-xs text-muted-foreground">Agent</p>
            </div>

            {/* Row 4 */}
            {/* Calmer team */}
            <div className="col-span-1 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-center">
              <CheckCircle className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium text-foreground">Calmer Team</p>
            </div>

            {/* Happier patients */}
            <div className="col-span-1 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-center">
              <CheckCircle className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-medium text-foreground">Happier Patients</p>
            </div>

            {/* The Result - spans 2 */}
            <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/20 flex flex-col justify-center items-center text-center">
              <p className="text-xs text-muted-foreground">The Result</p>
              <p className="text-xl md:text-2xl font-bold text-gradient">Predictable Growth</p>
              <p className="text-xs text-muted-foreground">Fewer lost starts</p>
            </div>

            {/* All designed for ortho */}
            <div className="col-span-1 p-5 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all flex flex-col justify-center items-center text-center">
              <p className="text-xs text-muted-foreground">All designed for</p>
              <p className="text-lg font-bold text-primary">Ortho</p>
            </div>
          </div>

          {/* CTA Section */}
          <div 
            ref={resultRef}
            className={`text-center space-y-6 transition-all duration-700 delay-200 ${resultVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-xl md:text-2xl text-foreground font-semibold max-w-3xl mx-auto">
              For a limited time, <span className="text-gradient">100 practices</span> can access Pronto+ in a way that will never be offered again.
            </p>
            <Button size="lg" onClick={onSignupClick} className="text-lg px-8 py-6">
              Join the Founding 100 for $1
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
