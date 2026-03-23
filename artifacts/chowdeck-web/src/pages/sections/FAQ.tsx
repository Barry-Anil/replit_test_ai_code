import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "What is Chowdeck?",
      a: "Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city."
    },
    {
      q: "What locations do we currently deliver to?",
      a: "We deliver to multiple locations across Lagos. Check the app for the latest coverage areas as we are constantly expanding to serve you better."
    },
    {
      q: "What is Chowdeck wallet?",
      a: "The Chowdeck wallet is a digital payment feature that allows you to store funds and pay for orders easily within the app without needing a card for every transaction."
    },
    {
      q: "What is Chowscore?",
      a: "Chowscore is our loyalty and rating system that rewards frequent customers with perks and discounts based on their order history and activity."
    },
    {
      q: "What is Service fee?",
      a: "A small fee charged per order to support our platform and ensure quality service delivery across the network."
    },
    {
      q: "Why do we charge Service fee?",
      a: "The service fee helps us maintain our platform, support our riders with better equipment, and continue providing excellent, reliable service."
    },
    {
      q: "What is Surge fee?",
      a: "A surge fee may apply during high-demand periods or extreme weather to incentivize more riders to be available so you still get your food fast."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black mb-4">FAQs.</h2>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-xl font-bold text-muted-foreground">Ans.</span>
            </div>
          </div>

          <div className="md:w-2/3 flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <span className="text-lg font-bold pr-8">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
