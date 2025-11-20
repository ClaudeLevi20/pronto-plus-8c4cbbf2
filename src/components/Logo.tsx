import logoHorizontal from "@/assets/logo-horizontal.svg";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logoHorizontal} alt="Pronto" className="h-8" />
    </div>
  );
};
