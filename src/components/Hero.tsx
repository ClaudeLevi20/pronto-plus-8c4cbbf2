import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import waveLines from "@/assets/wave-lines.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={heroBg} 
            alt="AI Receptionist Interface" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Wave line decorations */}
      <div className="wave-decoration top-0 left-0" style={{ backgroundImage: `url(${waveLines})` }} />
      <div className="wave-decoration bottom-0 right-0 rotate-180" style={{ backgroundImage: `url(${waveLines})` }} />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/60 rounded-full animate-pulse delay-300" />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-700" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Receptionist for Orthodontists</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Never Miss a Patient
            <br />
            <span className="text-gradient">Call Again</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pronto's AI voice receptionist handles appointments, answers questions, and engages patients 24/7 - 
            so your team can focus on providing exceptional care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="group">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="w-4 h-4" />
              Book a Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Setup in 5 minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
