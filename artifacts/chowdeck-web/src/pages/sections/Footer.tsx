import React from "react";

export function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: ["Customers", "Vendors", "Riders", "Storefront", "About", "Careers", "FAQs", "Blog", "Contact", "Terms of Use", "Privacy Policy"]
    },
    {
      title: "Cuisines near you",
      links: ["Pasta near me", "Rice near me", "Fast food near me", "Asian food in Lagos", "African food in Lagos", "Breakfast menu in Lagos", "Fitfam stores in Lagos", "American food in Lagos", "Pastries in Lagos", "Salad in Lagos", "Fruits in Lagos"]
    },
    {
      title: "Popular Locations",
      links: ["Surulere", "Ogudu", "Yaba", "Ikeja", "Lekki"]
    },
    {
      title: "Top Restaurants",
      links: ["King Glab", "Korede Spaghetti", "Iyan Aladuke", "Food Fusion", "Belefull"]
    }
  ];

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          
          <div className="col-span-2 lg:col-span-1">
            <div className="text-3xl font-black font-display text-primary tracking-tight mb-8">
              Chowdeck
            </div>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "Facebook", "LinkedIn"].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold" aria-label={social}>
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i}>
              <h4 className="font-bold text-lg mb-6 text-white/90">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-white/60 hover:text-white hover:underline transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© All Rights Reserved. 2022, Chowdeck Logistics Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
