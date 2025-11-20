import { Shield, Lock, FileCheck, Zap } from "lucide-react";

const integrations = [
  { name: "Dolphin", description: "Practice Management" },
  { name: "OrthoTrac", description: "Scheduling System" },
  { name: "Ortho2", description: "Patient Records" },
  { name: "DentalIntel", description: "Analytics Platform" },
];

const certifications = [
  { 
    name: "HIPAA", 
    description: "Compliant",
    icon: Shield,
    color: "text-primary"
  },
  { 
    name: "SOC 2", 
    description: "Type II Certified",
    icon: Lock,
    color: "text-primary"
  },
  { 
    name: "SSL", 
    description: "Encrypted",
    icon: FileCheck,
    color: "text-primary"
  },
  { 
    name: "99.9%", 
    description: "Uptime SLA",
    icon: Zap,
    color: "text-primary"
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 px-6 bg-secondary/20 border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* Security Certifications */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Enterprise-Grade Security
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={cert.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${cert.color}`} />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-foreground">{cert.name}</div>
                    <div className="text-xs text-muted-foreground">{cert.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Partners */}
        <div>
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Seamless Integrations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration) => (
              <div 
                key={integration.name}
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-lg font-bold text-foreground tracking-tight">
                  {integration.name}
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  {integration.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Trusted by over 500+ orthodontic practices nationwide. Your patient data is encrypted end-to-end 
            and stored securely in HIPAA-compliant data centers.
          </p>
        </div>
      </div>
    </section>
  );
};
