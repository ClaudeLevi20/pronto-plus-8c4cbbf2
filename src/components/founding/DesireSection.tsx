import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { 
  Phone, 
  Zap, 
  Brain, 
  ArrowRightLeft, 
  Settings, 
  Database, 
  Shield, 
  Globe, 
  Bot, 
  FileCheck,
  LucideIcon
} from "lucide-react";

interface DesireSectionProps {
  onSignupClick: () => void;
}

const BentoCard = ({ 
  title, 
  description, 
  icon: Icon,
  className = "",
  featured = false,
  index = 0
}: { 
  title: string; 
  description: string; 
  icon: LucideIcon;
  className?: string;
  featured?: boolean;
  index?: number;
}) => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div 
      ref={ref}
      className={`group relative p-6 rounded-3xl backdrop-blur-sm transition-all duration-500 ${
        featured 
          ? "bg-primary/10 border border-primary/20 hover:border-primary/40 hover:bg-primary/15" 
          : "bg-card/50 border border-border/50 hover:border-border hover:bg-card/80"
      } ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Subtle glow on hover */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        featured ? 'bg-primary/10' : 'bg-primary/5'
      }`} />
      
      <div className="relative z-10">
        <div className={`inline-flex p-2.5 rounded-2xl mb-4 ${
          featured ? 'bg-primary/20' : 'bg-muted/50'
        }`}>
          <Icon className={`h-5 w-5 ${featured ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Bento Grid */}
          <div 
            ref={gridRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 transition-all duration-700 ${gridVisible ? 'opacity-100' : 'opacity-100'}`}
          >
            {/* Row 1 */}
            <BentoCard 
              icon={Phone}
              title="Never Misses a Call"
              description="100% uptime. Answers every inbound call."
              index={0}
            />
            <BentoCard 
              icon={Zap}
              title="Instant Response"
              description="Zero wait times on ring one."
              featured
              index={1}
            />
            <BentoCard 
              icon={Brain}
              title="Ortho IQ"
              description="Trained on real orthodontic workflows."
              index={2}
            />
            <BentoCard 
              icon={Database}
              title="PMS Integrated"
              description="Syncs with major Ortho PMS systems."
              index={3}
            />

            {/* Row 2 - with center hero card */}
            <BentoCard 
              icon={ArrowRightLeft}
              title="Seamless Handoff"
              description="Warm, context-aware transitions to staff."
              index={4}
            />
            
            {/* Center Hero Card - spans 2 columns and 2 rows */}
            <div className="col-span-2 row-span-2 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 border border-primary/30 flex flex-col items-center justify-center text-center shadow-lg shadow-primary/20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight tracking-tight">
                The #1 AI Receptionist For Orthodontic Offices.
              </h2>
            </div>
            
            <BentoCard 
              icon={Settings}
              title="You Stay in Control"
              description="Customize tone, responses, and workflows."
              featured
              index={5}
            />

            {/* Row 3 */}
            <BentoCard 
              icon={Shield}
              title="HIPAA Compliant"
              description="Enterprise-grade security built in."
              index={6}
            />
            <BentoCard 
              icon={Globe}
              title="Multi-Lingual"
              description="Serve Spanish-speaking families and beyond."
              featured
              index={7}
            />

            {/* Row 4 */}
            <BentoCard 
              icon={Bot}
              title="AI-to-AI Ready"
              description="Speaks the language of evolving AI agents."
              featured
              index={8}
            />
            <BentoCard 
              icon={FileCheck}
              title="Insurance Verification"
              description="Instant benefit checks before you hang up."
              index={9}
            />
            <BentoCard 
              icon={Zap}
              title="24/7 Coverage"
              description="After-hours or around the clock."
              index={10}
            />
            <BentoCard 
              icon={ArrowRightLeft}
              title="Smart Routing"
              description="Calls go exactly where they need to."
              index={11}
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
