import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { DemoBookingModal } from "./DemoBookingModal";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const scrolled = useScroll(50);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500",
        scrolled 
          ? "bg-background/95 border-border shadow-lg shadow-primary/5" 
          : "bg-background/80 border-border/50"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo size="md" />

          {/* Desktop Navigation - Now shows on tablets */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden lg:inline-flex">
              Sign In
            </Button>
            <Button 
              variant="default" 
              className="hidden md:inline-flex"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Get Started
            </Button>
            
            {/* Mobile/Tablet Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg text-foreground hover:text-primary transition-colors py-2"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-3 pt-6 border-t border-border">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDemoModalOpen(true);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      <DemoBookingModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </nav>
  );
};
