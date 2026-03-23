import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "secondary" | "dark";
  size?: "default" | "sm" | "lg" | "icon" | "pill";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";
    
    const variants = {
      default: "bg-primary text-primary-foreground shadow-[0_8px_20px_rgb(26,158,92,0.2)] hover:bg-primary/90 hover:shadow-[0_12px_25px_rgb(26,158,92,0.3)] hover:-translate-y-0.5",
      dark: "bg-foreground text-background shadow-lg hover:bg-foreground/90 hover:-translate-y-0.5",
      outline: "border-2 border-primary/20 bg-transparent text-primary hover:border-primary hover:bg-primary/5",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-primary/10 hover:text-primary text-muted-foreground",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-10 rounded-lg px-4 text-sm",
      lg: "h-14 rounded-2xl px-8 text-lg",
      icon: "h-12 w-12",
      pill: "h-10 rounded-full px-6 text-sm font-bold",
    };

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
