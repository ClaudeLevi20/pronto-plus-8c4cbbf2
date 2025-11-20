import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              AI-powered receptionist for orthodontist clinics
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#help" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Pronto. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#terms" className="hover:text-primary transition-colors">Terms</a>
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#cookies" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
