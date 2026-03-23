import React from "react";
import { motion } from "framer-motion";
import { Store, Bike, Users, ArrowRight } from "lucide-react";

export function NetworkCards() {
  const cards = [
    {
      icon: <Store className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50",
      title: "Start selling",
      desc: "Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
      link: "#"
    },
    {
      icon: <Bike className="w-8 h-8 text-primary" />,
      bg: "bg-primary/10",
      title: "Deliver happiness",
      desc: "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
      link: "#"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50",
      title: "Behind the scenes",
      desc: "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-black max-w-sm">Join our growing network</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-2xl ${card.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {card.desc}
              </p>
              <a href={card.link} className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-3 transition-all">
                see more <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
