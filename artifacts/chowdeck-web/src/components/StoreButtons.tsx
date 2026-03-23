import React from "react";
import { cn } from "@/lib/utils";

interface StoreButtonsProps {
  className?: string;
  variant?: "light" | "dark" | "outline";
}

export function StoreButtons({ className, variant = "dark" }: StoreButtonsProps) {
  const getStyles = () => {
    switch (variant) {
      case "light":
        return "bg-white text-foreground hover:bg-gray-50 border border-border";
      case "outline":
        return "bg-transparent text-white border-2 border-white hover:bg-white/10";
      case "dark":
      default:
        return "bg-foreground text-white hover:bg-foreground/90";
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      <a
        href="#"
        className={cn(
          "flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 hover:-translate-y-1 active:scale-95",
          getStyles()
        )}
        aria-label="Download on Google Play"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 2.5v19l14.5-9.5-14.5-9.5z" opacity=".2"/>
          <path d="M3 3.5l13.5 8.5-13.5 8.5v-17z"/>
          <path d="M16.5 12l5-3-5-3-2 3 2 3z" opacity=".5"/>
        </svg>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-wider opacity-80">Download on</span>
          <span className="text-sm font-bold font-display">Google Play</span>
        </div>
      </a>
      <a
        href="#"
        className={cn(
          "flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 hover:-translate-y-1 active:scale-95",
          getStyles()
        )}
        aria-label="Download on the App Store"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 14c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.7-2-1.6-.2-3.1.9-3.9.9-.9 0-2.1-1-3.4-1-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.2 10.2.8 1.2 1.8 2.5 3.1 2.5 1.2 0 1.7-.8 3.2-.8 1.4 0 1.9.8 3.2.8 1.4-.1 2.3-1.3 3-2.5 1-1.4 1.4-2.8 1.4-2.8-.1 0-2-8-2-8.1zM14.5 5.7c.7-.8 1.1-2 1-3.1-1.1.1-2.4.7-3.1 1.6-.6.7-1.1 1.9-1 3 1.2.1 2.3-.6 3.1-1.5z"/>
        </svg>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-wider opacity-80">Download on</span>
          <span className="text-sm font-bold font-display">App Store</span>
        </div>
      </a>
    </div>
  );
}
