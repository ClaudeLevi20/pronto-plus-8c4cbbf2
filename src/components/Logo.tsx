import prontoLogo from "@/assets/pronto-logo.png";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={prontoLogo} alt="Pronto" className="h-8" />
    </div>
  );
};
