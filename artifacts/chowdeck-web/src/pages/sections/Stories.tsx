import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Stories() {
  const stories = [
    {
      title: "Chowdeck Joins Y Combinator's S'22 Batch",
      excerpt: "Chowdeck has been accepted to Y Combinator's Summer Batch 2022, joining a league of extraordinary companies that are dis...",
      category: "News",
      /* YC orange gradient */
      bg: "bg-gradient-to-br from-orange-400 to-red-500",
      /* YC event/team stock */
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop"
    },
    {
      title: "Champions: Kingsley Agbinya",
      excerpt: "Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j...",
      category: "Stories",
      bg: "bg-primary",
      /* delivery rider portrait */
      image: "https://images.unsplash.com/photo-1606836474163-f22fba08fb2a?w=600&h=400&fit=crop"
    },
    {
      title: "Champions: Anthony Agam",
      excerpt: "Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck.",
      category: "Stories",
      bg: "bg-blue-600",
      /* delivery rider portrait 2 */
      image: "https://images.unsplash.com/photo-1621570273760-4ddc6e613b53?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-black">Stories</h2>
          <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            See all stories <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6">
                <div className={`absolute inset-0 ${story.bg} mix-blend-multiply opacity-40 group-hover:opacity-20 transition-opacity z-10`} />
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {story.category}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {story.excerpt}
              </p>
              
              <div className="mt-auto inline-flex items-center text-primary font-bold gap-2 group-hover:gap-3 transition-all">
                Read More <ArrowRight size={18} />
              </div>
            </motion.article>
          ))}
        </div>
        
        <button className="mt-10 md:hidden w-full py-4 rounded-xl border-2 border-border font-bold text-foreground flex justify-center items-center gap-2">
          See all stories <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
