import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { DemoBookingModal } from "./DemoBookingModal";
import waveLines from "@/assets/wave-lines.png";

export const CTA = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      {/* Wave line decorations */}
      <div className="wave-decoration top-0 left-0" style={{ backgroundImage: `url(${waveLines})` }} />
      <div className="wave-decoration bottom-0 right-0 rotate-180" style={{ backgroundImage: `url(${waveLines})` }} />
      

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Start Your Free Trial Today</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Transform Your
            <br />
            <span className="text-gradient">Practice Communication?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join leading orthodontist practices using Pronto to deliver exceptional patient experiences 
            while reducing operational costs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Schedule Demo Call
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
      
      <DemoBookingModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </section>
  );
};
