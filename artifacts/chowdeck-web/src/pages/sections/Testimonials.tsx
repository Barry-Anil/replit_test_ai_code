import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Teffy Billion Dollars",
    handle: "@Jegc_tola",
    initials: "TB",
    color: "bg-blue-100 text-blue-700",
    text: "My Yam and pepper sauce just came in from King Glab and Chowdeck and my Godddd! This is the best thing to happen to me this week!"
  },
  {
    name: "Folasade Daini",
    handle: "@folasade_daini",
    initials: "FD",
    color: "bg-green-100 text-green-700",
    text: "Chowdeck is the best Nigerian mobile app I have ever used. Yes, quote me."
  },
  {
    name: "Fisola",
    handle: "@TheFisola",
    initials: "F",
    color: "bg-purple-100 text-purple-700",
    text: "Chowdeck delivered in 20 minutes. Rider said “pardon my lateness” 💀"
  },
  {
    name: "THEE AWAZI",
    handle: "@THEAWAZI",
    initials: "TA",
    color: "bg-pink-100 text-pink-700",
    text: "Have you seen the new list of vendors on Chowdeck?? Omo. It is giving 🔥🔥"
  },
  {
    name: "Wine",
    handle: "@_chiisom",
    initials: "W",
    color: "bg-yellow-100 text-yellow-700",
    text: "Food!!! 🤤💚 So excited that I can now order through @chowdeck on the island. Go team Chowdeck!!!🚀"
  },
  {
    name: "Temz👑",
    handle: "@TheRealTemz",
    initials: "T",
    color: "bg-orange-100 text-orange-700",
    text: "I wan go baff but I can't. Because chowdeck riders move like thieves in the night. Before you cough, rider don reach your gate. The efficiency and speed is crazy 🥹🥹🥹🥹🥹🥹"
  },
  {
    name: "RedWhinee",
    handle: "@RedWhinee",
    initials: "RW",
    color: "bg-red-100 text-red-700",
    text: "I genuinely love @chowdeck A top app with with service"
  },
  {
    name: "Anon",
    handle: "@anon_user",
    initials: "A",
    color: "bg-indigo-100 text-indigo-700",
    text: "You'll order Chowdeck and say yeah I have about 20 minutes to get home. In 5 minutes, delivery man will tell you he's outside 😭"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">Join our community</h2>
        
        <div className="masonry-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="masonry-item bg-white p-6 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-display ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.handle}</p>
                  </div>
                </div>
                {/* X/Twitter Icon placeholder */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <p className="text-foreground/80 leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
