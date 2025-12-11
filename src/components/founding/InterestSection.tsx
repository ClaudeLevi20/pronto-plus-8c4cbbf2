import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import waveDecoration from "@/assets/wave-decoration-ai.png";

export const InterestSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: row1Ref, isVisible: row1Visible } = useScrollReveal();
  const { ref: row2Ref, isVisible: row2Visible } = useScrollReveal();
  const { ref: row3Ref, isVisible: row3Visible } = useScrollReveal();

  return (
    <section 
      id="interest"
      className="relative py-32 md:py-40 bg-muted/30 overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Wave texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url(${waveDecoration})`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-20 md:mb-28 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Meet Pronto+.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your front desk superpower. Handles the repetitive. Frees your team for what matters.
            </p>
          </div>

          {/* Zig-Zag Layout */}
          <div className="space-y-20 md:space-y-32">
            {/* Row 1: Text Left, Visual Right */}
            <div 
              ref={row1Ref}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-700 ${row1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-medium bg-primary/10 text-primary px-4 py-2 rounded-full">
                  FOR YOUR TEAM
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Your Receptionists Do More of What They Love
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pronto+ takes rescheduling, FAQs, and after-hours calls off their plate. They focus on the relationships and moments that actually matter—greeting patients, solving real problems, building trust.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 md:p-12 border border-primary/20">
                  <div className="text-6xl md:text-8xl mb-6">💬</div>
                  <p className="text-sm text-muted-foreground italic">
                    "I finally have time to actually talk to patients instead of being glued to the phone."
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Visual Left, Text Right */}
            <div 
              ref={row2Ref}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-700 ${row2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent rounded-3xl p-8 md:p-12 border border-secondary/20">
                  <div className="text-6xl md:text-8xl mb-6">❤️</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">87%</span>
                    <span>reduction in repetitive task time</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 text-xs font-medium bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full">
                  FOR RETENTION
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Less Burnout. Better Retention.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Repetitive tasks drain energy. When your staff spends time on human work—conversations, problem-solving, care—they stay engaged, motivated, and with you longer.
                </p>
              </div>
            </div>

            {/* Row 3: Text Left, Visual Right */}
            <div 
              ref={row3Ref}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-700 ${row3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-medium bg-accent/10 text-foreground px-4 py-2 rounded-full">
                  FOR PATIENTS
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Better Patient Experience
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With Pronto+ handling the busywork, your receptionists have mental space and time to give patients genuine attention. That human touch is irreplaceable.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-3xl p-8 md:p-12 border border-accent/20">
                  <div className="text-6xl md:text-8xl mb-6">✨</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 rounded-full bg-background/50 text-muted-foreground">Genuine attention</span>
                    <span className="px-3 py-1 rounded-full bg-background/50 text-muted-foreground">Mental space</span>
                    <span className="px-3 py-1 rounded-full bg-background/50 text-muted-foreground">Human touch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
