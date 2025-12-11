import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { 
  Phone, 
  Zap, 
  Brain, 
  ArrowRightLeft, 
  Settings, 
  Shield, 
  Globe, 
  Bot, 
  FileCheck,
  Clock,
  LucideIcon
} from "lucide-react";
import waveLines from "@/assets/wave-lines.png";

interface DesireSectionProps {
  onSignupClick: () => void;
}

const BentoCard = ({ 
  title, 
  description, 
  icon: Icon,
  size = "small",
  featured = false,
  index = 0
}: { 
  title: string; 
  description: string; 
  icon: LucideIcon;
  size?: "small" | "tall" | "wide" | "large";
  featured?: boolean;
  index?: number;
}) => {
  const { ref, isVisible } = useScrollReveal();
  
  const sizeClasses = {
    small: "",
    tall: "md:row-span-2",
    wide: "md:col-span-2",
    large: "md:col-span-2 md:row-span-2",
  };

  const paddingClasses = {
    small: "p-6",
    tall: "p-6 md:p-8",
    wide: "p-6 md:p-8",
    large: "p-8 md:p-12",
  };
  
  return (
    <div 
      ref={ref}
      className={`group relative rounded-3xl backdrop-blur-sm transition-all duration-500 ${sizeClasses[size]} ${paddingClasses[size]} ${
        featured 
          ? "bg-primary/10 border border-primary/20 hover:border-primary/40 hover:bg-primary/15" 
          : "bg-card/50 border border-border/50 hover:border-border hover:bg-card/80"
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Subtle glow on hover */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        featured ? 'bg-primary/10' : 'bg-primary/5'
      }`} />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className={`inline-flex p-2.5 rounded-2xl mb-4 w-fit ${
          featured ? 'bg-primary/20' : 'bg-muted/50'
        }`}>
          <Icon className={`${size === 'large' ? 'h-7 w-7' : 'h-5 w-5'} ${featured ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
        <h3 className={`font-semibold text-foreground mb-2 tracking-tight ${size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {title}
        </h3>
        <p className={`text-muted-foreground leading-relaxed ${size === 'large' ? 'text-base' : 'text-sm'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export const DesireSection = ({ onSignupClick }: DesireSectionProps) => {
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();
  const { ref: resultRef, isVisible: resultVisible } = useScrollReveal();

  return (
    <section 
      id="desire"
      className="relative py-32 md:py-40 overflow-hidden bg-background"
    >
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      
      {/* Wave texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url(${waveLines})`,
          backgroundSize: '1000px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* True Masonry/Bento Grid */}
          <div 
            ref={gridRef}
            className={`grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4 md:gap-5 transition-all duration-700 ${gridVisible ? 'opacity-100' : 'opacity-100'}`}
          >
            {/* Row 1 */}
            <BentoCard 
              icon={Phone}
              title="Never Misses a Call"
              description="100% uptime. Answers every inbound call instantly."
              index={0}
            />
            
            {/* AI-to-AI Ready - Large 2x2 (The killer feature) */}
            <BentoCard 
              icon={Bot}
              title="AI-to-AI Ready"
              description="The future is here. When Google sends AI agents to book appointments, Pronto+ speaks their language. Your practice stays visible while others become invisible."
              size="large"
              featured
              index={1}
            />
            
            <BentoCard 
              icon={Brain}
              title="Ortho IQ"
              description="Trained on real orthodontic workflows."
              index={2}
            />
            
            {/* Row 2 */}
            <BentoCard 
              icon={Zap}
              title="Instant Response"
              description="Zero wait times on ring one."
              featured
              index={3}
            />
            
            {/* 24/7 Coverage - Tall 1x2 */}
            <BentoCard 
              icon={Clock}
              title="24/7 Coverage"
              description="After-hours, weekends, holidays—Pronto+ never sleeps. Your patients always get answered."
              size="tall"
              featured
              index={4}
            />

            {/* Row 3 */}
            <BentoCard 
              icon={Shield}
              title="HIPAA Compliant"
              description="Enterprise-grade security."
              index={5}
            />
            <BentoCard 
              icon={ArrowRightLeft}
              title="Seamless Handoff"
              description="Warm transitions to staff."
              index={6}
            />
            <BentoCard 
              icon={Settings}
              title="You Stay in Control"
              description="Customize tone and workflows."
              index={7}
            />
            
            {/* Row 4 */}
            <BentoCard 
              icon={Globe}
              title="Multi-Lingual"
              description="Spanish-speaking families and beyond."
              index={8}
            />
            <BentoCard 
              icon={FileCheck}
              title="Insurance Verification"
              description="Instant benefit checks."
              index={9}
            />
          </div>

          {/* CTA Section */}
          <div 
            ref={resultRef}
            className={`text-center space-y-8 pt-16 md:pt-20 transition-all duration-700 delay-300 ${resultVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed tracking-tight">
              For a limited time, <span className="text-primary font-semibold">100 practices</span> can access Pronto+ in a way that will never be offered again.
            </p>
            <Button 
              size="xl" 
              onClick={onSignupClick} 
              className="text-lg px-10 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Join the Founding 100 for $1
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
