import React from "react";
import { StoreButtons } from "@/components/StoreButtons";
import { Button } from "@/components/Button";

export function Newsletter() {
  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Place your <br/> order in seconds
            </h2>
            <div className="mt-8 mb-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl inline-block">
              <div className="text-sm font-medium text-white/80 uppercase tracking-widest mb-2">Promo Code</div>
              <div className="text-5xl font-black font-display tracking-widest mb-2">CDNWEB</div>
              <p className="text-white/90">Get ₦300 off your first order when you use this promo code!</p>
            </div>
            <StoreButtons variant="outline" />
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-foreground shadow-2xl">
            <h3 className="text-3xl font-black mb-2">Cool stuff only</h3>
            <p className="text-muted-foreground mb-8 text-lg">Subscribe to our newsletter</p>
            
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="yourname@email.com" 
                required
                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl outline-none transition-all text-lg"
              />
              <Button size="lg" className="w-full text-lg shadow-primary/25">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              We respect your privacy. No spam, ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
