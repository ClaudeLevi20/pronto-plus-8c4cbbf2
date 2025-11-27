import prontoLogo from "@/assets/pronto-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo = ({ size = "md", className }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  return (
    <div className="flex items-center">
      <img 
        src={prontoLogo} 
        alt="Pronto" 
        className={cn(sizeClasses[size], className)} 
      />
    </div>
  );
};
