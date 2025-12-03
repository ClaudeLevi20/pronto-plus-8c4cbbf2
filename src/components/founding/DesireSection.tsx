import { Button } from "@/components/ui/button";
import { Check, Phone, Calendar, Shield, Zap, Users, Settings } from "lucide-react";
import foundingDashboard from "@/assets/founding-dashboard.jpg";
import wave12 from "@/assets/wave-12.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface DesireSectionProps {
  onSignupClick: () => void;
}

export const DesireSection = ({ onSignupClick }: DesireSectionProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
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
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center space-y-4 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet <span className="text-gradient">Pronto+</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              The AI Receptionist Built Only for Orthodontists
            </p>
          </div>

          {/* Bento Grid */}
          <div 
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-6 gap-4 transition-all duration-700 delay-100 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Main intro - spans 4 cols */}
            <div className="md:col-span-4 p-8 rounded-2xl bg-card/70 border border-border/50 hover:border-primary/30 transition-all">
              <p className="text-xl text-foreground leading-relaxed">
                Pronto+ solves the <span className="text-primary font-semibold">three biggest revenue leaks</span> in ortho practices with one simple, supportive system.
              </p>
            </div>

            {/* Dashboard image - spans 2 cols, 2 rows */}
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all">
              <img 
                src={foundingDashboard} 
                alt="Pronto+ dashboard" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ortho-First Intelligence - spans 2 cols */}
            <div className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Ortho-First Intelligence</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Not generic dental AI. Understands braces, aligners, Phase 1 vs. Phase 2, emergencies, and parent/teen questions.
              </p>
            </div>

            {/* Supports Your Team - spans 2 cols */}
            <div className="md:col-span-2 p-6 rounded-2xl bg-card/70 border border-border/50 hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Supports Your Team</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Handles repetitive work so your front desk can focus on people:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Calls", "FAQs", "Triage", "Insurance", "Scheduling"].map((item) => (
                  <span key={item} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Set Up in Minutes - spans 2 cols */}
            <div className="md:col-span-2 p-6 rounded-2xl bg-card/70 border border-border/50 hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Set Up in Minutes</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                No IT. No hardware. You control the tone, the rules, and when calls hand off to humans.
              </p>
            </div>

            {/* Three Agents - spans full width */}
            <div className="md:col-span-6 p-6 rounded-2xl bg-card/70 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                Three Specialized Agents Working Together
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-all">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Receptionist Agent</h4>
                    <p className="text-sm text-muted-foreground">Answers instantly & guides patients</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-all">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Booking Agent</h4>
                    <p className="text-sm text-muted-foreground">Schedules consults & follow-ups</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-all">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Insurance Agent</h4>
                    <p className="text-sm text-muted-foreground">Checks benefits & explains coverage</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6 text-sm">
                All seamless. All 24/7. <span className="text-primary font-medium">All designed for ortho.</span>
              </p>
            </div>

            {/* The Result - spans 3 cols */}
            <div className="md:col-span-3 p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">The Result</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">✓ A calmer team</p>
                <p className="text-muted-foreground">✓ Happier patients</p>
                <p className="text-muted-foreground">✓ Fewer lost starts</p>
                <p className="text-primary font-semibold">✓ More predictable growth</p>
              </div>
            </div>

            {/* CTA - spans 3 cols */}
            <div className="md:col-span-3 p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex flex-col justify-center items-center text-center">
              <p className="text-foreground font-medium mb-4">
                For a limited time, <span className="text-gradient font-bold">100 practices</span> can access Pronto+ in a way that will never be offered again.
              </p>
              <Button size="lg" onClick={onSignupClick} className="text-lg px-8 py-6">
                Join the Founding 100 for $1
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
