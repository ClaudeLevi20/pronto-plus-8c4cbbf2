import { Phone } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
        <div className="relative bg-primary rounded-full p-2">
          <Phone className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
      <span className="text-2xl font-bold">Pronto</span>
    </div>
  );
};
