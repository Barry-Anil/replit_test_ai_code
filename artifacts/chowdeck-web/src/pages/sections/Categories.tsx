import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    {
      id: "01",
      title: "African Food",
      color: "bg-orange-100",
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop"
    },
    {
      id: "02",
      title: "Continental",
      color: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop"
    },
    {
      id: "03",
      title: "Fast Food",
      color: "bg-red-100",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
    }
  ];

  const checkScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollState, { passive: true });
    checkScrollState();
    return () => el.removeEventListener("scroll", checkScrollState);
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 360;
    el.scrollBy({ left: direction === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black">Explore categories</h2>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              aria-label="Previous category"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-white hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              aria-label="Next category"
              className="w-12 h-12 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-foreground/90 transition-all shadow-md hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[280px] md:min-w-[350px] flex-shrink-0 snap-start rounded-[2rem] bg-white p-4 shadow-sm border border-black/5 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-4 pb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{cat.title}</h3>
                <span className="text-2xl font-black text-primary/30 font-display">{cat.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
