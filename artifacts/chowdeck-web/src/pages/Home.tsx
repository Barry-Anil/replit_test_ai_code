import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "./sections/Hero";
import { NetworkCards } from "./sections/NetworkCards";
import { Categories } from "./sections/Categories";
import { Features } from "./sections/Features";
import { MapSection } from "./sections/MapSection";
import { Testimonials } from "./sections/Testimonials";
import { Stories } from "./sections/Stories";
import { FAQ } from "./sections/FAQ";
import { Newsletter } from "./sections/Newsletter";
import { Footer } from "./sections/Footer";

export default function Home() {
  // Simple scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <NetworkCards />
        <Categories />
        <Features />
        <MapSection />
        <Testimonials />
        <Stories />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
