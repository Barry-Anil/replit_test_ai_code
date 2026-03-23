import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Features() {
  const features = [
    "Quick and easy onboarding",
    "Quality meal choices",
    "Live updates on orders",
    "Highly rated riders",
    "24/7 support for customers and vendors"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Chowdeck has <br/>
              <span className="text-primary relative inline-block">
                you covered
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q50 20 100 10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
              Hungry? Too tired to cook? Have friends over, or do you simply need to chop life? Download Chowdeck, and let's deliver happiness to your doorstep in minutes.
            </p>

            <ul className="space-y-5">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" stroke="white" />
                  <span className="text-lg font-bold text-foreground/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto bg-secondary rounded-full flex items-center justify-center relative">
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-50" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30" />
              
              <img 
                src={`${import.meta.env.BASE_URL}images/feature-delivery.png`} 
                alt="Delivery Illustration" 
                className="relative z-10 w-4/5 h-auto object-contain hover:-translate-y-4 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
