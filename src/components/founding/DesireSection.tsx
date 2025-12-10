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
  featured = false
}: { 
  title: string; 
  description: string; 
  icon: LucideIcon;
  className?: string;
  featured?: boolean;
}) => (
  <div className={`p-6 rounded-2xl transition-all ${
    featured 
      ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary/40" 
      : "bg-card/80 border border-border/50 hover:border-primary/30"
  } ${className}`}>
    <Icon className={`h-6 w-6 mb-3 ${featured ? 'text-primary' : 'text-muted-foreground'}`} />
    <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export const DesireSection = ({ onSignupClick }: DesireSectionProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();
  const { ref: resultRef, isVisible: resultVisible } = useScrollReveal();

  return (
    <section 
      id="desire"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Bento Grid - Apple M2 Max style with center hero */}
          <div 
            ref={gridRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Row 1 */}
            <BentoCard 
              icon={Phone}
              title="Never Misses a Call"
              description="100% uptime. Answers every inbound call."
            />
            <BentoCard 
              icon={Zap}
              title="Instant Response"
              description="Zero wait times on ring one."
              featured
            />
            <BentoCard 
              icon={Brain}
              title="Ortho IQ"
              description="Trained on real orthodontic workflows."
            />
            <BentoCard 
              icon={Database}
              title="PMS Integrated"
              description="Syncs with major Ortho PMS systems."
            />

            {/* Row 2 - with center hero card */}
            <BentoCard 
              icon={ArrowRightLeft}
              title="Seamless Handoff"
              description="Warm, context-aware transitions to staff."
            />
            
            {/* Center Hero Card - spans 2 columns and 2 rows */}
            <div className="col-span-2 row-span-2 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 border-2 border-primary/30 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
                The #1 AI Receptionist For Orthodontic Offices.
              </h2>
            </div>
            
            <BentoCard 
              icon={Settings}
              title="You Stay in Control"
              description="Customize tone, responses, and workflows."
              featured
            />

            {/* Row 3 */}
            <BentoCard 
              icon={Shield}
              title="HIPAA Compliant"
              description="Enterprise-grade security built in."
            />
            <BentoCard 
              icon={Globe}
              title="Multi-Lingual"
              description="Serve Spanish-speaking families and beyond."
              featured
            />

            {/* Row 4 */}
            <BentoCard 
              icon={Bot}
              title="AI-to-AI Ready"
              description="Speaks the language of evolving AI agents."
              featured
            />
            <BentoCard 
              icon={FileCheck}
              title="Insurance Verification"
              description="Instant benefit checks before you hang up."
            />
            <BentoCard 
              icon={Zap}
              title="24/7 Coverage"
              description="After-hours or around the clock."
            />
            <BentoCard 
              icon={ArrowRightLeft}
              title="Smart Routing"
              description="Calls go exactly where they need to."
            />
          </div>

          {/* CTA Section */}
          <div 
            ref={resultRef}
            className={`text-center space-y-6 pt-8 transition-all duration-700 delay-200 ${resultVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
