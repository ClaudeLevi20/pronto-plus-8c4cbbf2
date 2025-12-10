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
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              The #1 AI Receptionist For Orthodontic Offices.
            </h2>
          </div>

          {/* Bento Grid */}
          <div 
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Row 1 */}
            <BentoCard 
              icon={Phone}
              title="Never Misses a Call"
              description="100% uptime. Whether covering after-hours or 24/7, Pronto+ answers every single inbound call."
            />
            <BentoCard 
              icon={Zap}
              title="Instant Response"
              description="Zero wait times. Patients hear a warm voice on ring one, every time."
              featured
            />
            <BentoCard 
              icon={Brain}
              title="Ortho IQ"
              description="Trained on real orthodontic workflows. Understands Phase 1, Invisalign, treatment plans, emergency protocols."
            />

            {/* Row 2 */}
            <BentoCard 
              icon={ArrowRightLeft}
              title="Seamless Handoff"
              description="When a call needs a human touch, the transition is warm and context-aware. Your staff knows exactly what to do."
            />
            <BentoCard 
              icon={Settings}
              title="You Stay in Control"
              description="Customize tone, responses, workflows, and permissions. Pronto+ works *your* way, not the other way around."
              featured
            />
            <BentoCard 
              icon={Database}
              title="PMS Integrated"
              description="Connects to all major Ortho PMS systems. Your patient data stays in sync automatically."
            />

            {/* Row 3 */}
            <BentoCard 
              icon={Shield}
              title="HIPAA Compliant"
              description="Enterprise-grade security out of the box. Your patient data is always protected."
            />
            <BentoCard 
              icon={Globe}
              title="Multi-Lingual"
              description="Serve Spanish-speaking families and beyond. Break down language barriers in your practice."
              featured
            />
          </div>

          {/* Bottom Row - Full width cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <BentoCard 
              icon={Bot}
              title="AI-to-AI Ready"
              description="As Google, OpenTable, and other AI agents evolve, Pronto+ speaks their language. Your practice won't get skipped in the agent-to-agent revolution."
              featured
              className="md:col-span-1"
            />
            <BentoCard 
              icon={FileCheck}
              title="Insurance Verification"
              description="Instant benefit checks. Parents get clear answers about coverage before you hang up. Removes friction from 'yes.'"
              className="md:col-span-1"
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
