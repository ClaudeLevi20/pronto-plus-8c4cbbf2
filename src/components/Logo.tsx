import prontoLogo from "@/assets/pronto-logo.png";
import prontoLogomark from "@/assets/pronto-logomark.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  compact?: boolean;
}

export const Logo = ({ size = "md", className, compact = false }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  return (
    <div className="flex items-center">
      {/* Show logomark on mobile, full logo on desktop */}
      <img 
        src={prontoLogomark} 
        alt="Pronto" 
        className={cn(sizeClasses[size], "md:hidden")} 
      />
      <img 
        src={prontoLogo} 
        alt="Pronto" 
        className={cn(sizeClasses[size], "hidden md:block", className)} 
      />
    </div>
  );
};
