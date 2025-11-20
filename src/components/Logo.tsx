import logomark from "@/assets/logomark.svg";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <img src={logomark} alt="Pronto" className="w-full h-full" />
      </div>
      <span className="text-2xl font-bold">Pronto</span>
    </div>
  );
};
