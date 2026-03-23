import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { StoreButtons } from "@/components/StoreButtons";

type Tab = "customers" | "vendors" | "riders";

export function Hero() {
  const [activeTab, setActiveTab] = useState<Tab>("customers");

  const tabContent = {
    customers: {
      subheadline: "Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
      cta: <StoreButtons variant="dark" />
    },
    vendors: {
      subheadline: "Reach thousands of new customers daily. Join Chowdeck to grow your restaurant's revenue and manage orders seamlessly.",
      cta: <Button size="lg" className="w-full sm:w-auto">Start selling</Button>
    },
    riders: {
      subheadline: "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
      cta: <Button size="lg" className="w-full sm:w-auto">Deliver happiness</Button>
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-secondary">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-[5.5rem] leading-[1.05] font-black text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Se o ti <span className="text-primary block mt-2">jeun?</span>
            </motion.h1>

            {/* Tabs */}
            <div className="flex p-1.5 bg-white/60 backdrop-blur-sm rounded-full w-fit mb-8 shadow-sm border border-black/5">
              {(["customers", "vendors", "riders"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2.5 text-sm font-bold capitalize tracking-wide rounded-full transition-colors ${
                    activeTab === tab ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="heroTab"
                      className="absolute inset-0 bg-primary rounded-full shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="min-h-[160px]"
              >
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-10 max-w-lg font-medium">
                  {tabContent[activeTab].subheadline}
                </p>
                {tabContent[activeTab].cta}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Image / Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white bg-white">
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-phone.png`} 
                alt="Chowdeck App Interface" 
                className="w-full h-full object-cover"
              />
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-black/5 flex items-center gap-3 hidden md:flex"
              >
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Order Status</p>
                  <p className="text-sm font-bold text-foreground">Out for delivery</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
