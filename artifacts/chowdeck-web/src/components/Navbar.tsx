import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { StoreButtons } from "./StoreButtons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeUserType, setActiveUserType] = useState<"customers" | "vendors" | "riders">("customers");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Company", href: "#company" },
    { name: "FAQs", href: "#faqs" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const userTypes = ["customers", "vendors", "riders"] as const;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white/80 backdrop-blur-sm py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <span className="text-2xl font-black font-display text-primary tracking-tight group-hover:opacity-90 transition-opacity">
              Chowdeck
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <div className="flex items-center gap-6 text-sm font-medium text-foreground/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Customer / Vendor / Rider Tabs */}
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              {userTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveUserType(type)}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-semibold capitalize rounded-full transition-all duration-200",
                    activeUserType === type
                      ? "text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                  aria-label={`Switch to ${type} view`}
                >
                  {activeUserType === type && (
                    <motion.div
                      layoutId="navTab"
                      className="absolute inset-0 bg-primary rounded-full shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{type}</span>
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-border/80 mx-1" />

            {/* Try the App button */}
            <a
              href="#"
              className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
              aria-label="Try the App"
            >
              Try the App
            </a>

            {/* Store download buttons — compact icon-only versions */}
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 bg-foreground text-white text-xs font-semibold rounded-xl hover:bg-foreground/90 transition-colors"
              aria-label="Download on Google Play"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3.5l13.5 8.5-13.5 8.5v-17z"/>
                <path d="M16.5 12l5-3-5-3-2 3 2 3z" opacity=".7"/>
              </svg>
              <span className="hidden xl:block">Google Play</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2 bg-foreground text-white text-xs font-semibold rounded-xl hover:bg-foreground/90 transition-colors"
              aria-label="Download on App Store"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 14c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.7-2-1.6-.2-3.1.9-3.9.9-.9 0-2.1-1-3.4-1-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.2 10.2.8 1.2 1.8 2.5 3.1 2.5 1.2 0 1.7-.8 3.2-.8 1.4 0 1.9.8 3.2.8 1.4-.1 2.3-1.3 3-2.5 1-1.4 1.4-2.8 1.4-2.8-.1 0-2-8-2-8.1zM14.5 5.7c.7-.8 1.1-2 1-3.1-1.1.1-2.4.7-3.1 1.6-.6.7-1.1 1.9-1 3 1.2.1 2.3-.6 3.1-1.5z"/>
              </svg>
              <span className="hidden xl:block">App Store</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {/* User type tabs */}
              <div className="flex gap-2 bg-gray-100 rounded-full p-1.5">
                {userTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveUserType(type)}
                    className={cn(
                      "flex-1 py-2 text-sm font-semibold capitalize rounded-full transition-all",
                      activeUserType === type
                        ? "bg-primary text-white"
                        : "text-foreground/70"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4 text-lg font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="border-b border-border pb-4 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-4">
                <a
                  href="#"
                  className="w-full text-center py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
                >
                  Try the App
                </a>
                <StoreButtons variant="dark" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
