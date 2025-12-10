import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Pill-shaped with subtle glow
        default: "bg-primary text-primary-foreground rounded-pill hover:brightness-110 shadow-soft hover:shadow-primary active:scale-[0.98]",
        
        // Destructive - Clean and minimal
        destructive: "bg-destructive text-destructive-foreground rounded-pill hover:brightness-110 active:scale-[0.98]",
        
        // Outline - Glass-like with subtle border
        outline: "rounded-pill border border-border/50 bg-transparent text-foreground hover:bg-secondary/50 hover:border-primary/30 active:scale-[0.98]",
        
        // Secondary - Subtle background
        secondary: "bg-secondary text-secondary-foreground rounded-pill hover:bg-secondary/80 active:scale-[0.98]",
        
        // Ghost - Minimal hover state
        ghost: "rounded-lg hover:bg-secondary/50 hover:text-foreground active:scale-[0.98]",
        
        // Link - Underline animation
        link: "text-primary underline-offset-4 hover:underline",
        
        // Hero - Large, prominent CTA with glow
        hero: "bg-primary text-primary-foreground rounded-pill font-semibold shadow-primary hover:brightness-110 hover:shadow-glow active:scale-[0.98]",
        
        // Glass - Frosted glass effect
        glass: "glass rounded-pill text-foreground hover:bg-secondary/30 active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
