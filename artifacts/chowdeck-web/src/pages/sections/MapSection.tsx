import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function MapSection() {
  const restaurants = [
    "Sweet Sensation",
    "Mr Biggs- Agidingbi",
    "Magrellos",
    "Old English Superstore and Bakery",
    "Goodypot foodies enterprises",
    "Belle First.Com",
    "So Fresh - Ogudu",
    "Mr Biggs- Ikoyi",
    "Street Cred"
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
            Click on any live location to order from restaurants near you
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-4">Restaurants</h3>
            <ul className="space-y-4">
              {restaurants.map((name, i) => (
                <li key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                    <MapPin size={16} />
                  </div>
                  <span className="font-medium text-white/90 group-hover:text-white transition-colors">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8 relative aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-[#E8F5E9] shadow-2xl">
            <img 
              src={`${import.meta.env.BASE_URL}images/map-illustration.png`} 
              alt="Lagos Map" 
              className="w-full h-full object-cover opacity-90"
            />
            
            {/* Simulated Pins */}
            {[
              { t: "20%", l: "30%" },
              { t: "40%", l: "60%" },
              { t: "60%", l: "40%" },
              { t: "30%", l: "70%" },
              { t: "70%", l: "80%" },
              { t: "50%", l: "20%" },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.5 + (i * 0.1) }}
                className="absolute flex flex-col items-center group cursor-pointer"
                style={{ top: pos.t, left: pos.l }}
              >
                <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg translate-y-2 group-hover:translate-y-0">
                  {restaurants[i]}
                </div>
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-[0_0_0_4px_rgba(255,255,255,0.5)] animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
