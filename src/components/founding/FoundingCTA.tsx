import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import foundingOrthodontist from "@/assets/founding-orthodontist.jpg";

interface FoundingCTAProps {
  onSignupClick: () => void;
}

export const FoundingCTA = ({ onSignupClick }: FoundingCTAProps) => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section className="relative py-32 md:py-40 bg-muted/30 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <div 
              ref={imageRef}
              className={`transition-all duration-700 ${imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
                <img 
                  src={foundingOrthodontist} 
                  alt="Friendly orthodontist team at front desk" 
                  className="relative rounded-3xl shadow-2xl shadow-primary/10"
                />
              </div>
            </div>
            
            {/* Content */}
            <div 
              ref={contentRef}
              className={`space-y-8 transition-all duration-700 delay-150 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                Become Part of the{" "}
                <span className="text-primary">Founding 100</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Try ProntoPlus. Reduce stress. Improve patient experience. Protect your revenue.
              </p>

              <p className="text-lg text-foreground/80">
                This is your chance to get in early — before the shift — and lock in lifetime benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="xl" 
                  onClick={onSignupClick}
                  className="rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Join the Founding 100 for $1
                </Button>
                <Button 
                  size="xl" 
                  variant="outline"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="rounded-full border-border/50 hover:border-border hover:bg-card/50 transition-all duration-300"
                >
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
