import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LearnButton from "./ActionButton";
export default function ContentCarousel() {
  const [current, setCurrent] = useState(0);

  const partners = [
    { name: "Partner One", logo: "https://via.placeholder.com/200x100?text=Logo+1" },
    { name: "Partner Two", logo: "https://via.placeholder.com/200x100?text=Logo+2" },
    { name: "Partner Three", logo: "https://via.placeholder.com/200x100?text=Logo+3" },
    { name: "Partner Four", logo: "https://via.placeholder.com/200x100?text=Logo+4" },
    { name: "Partner Five", logo: "https://via.placeholder.com/200x100?text=Logo+5" },
  ];

  const maxIndex = partners.length - 3;

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        
        {/* Column 1: Static Content */}
        <div className="lg:col-span-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            Strategic <span className="text-indigo-600">Alliances</span>
          </h2>
          <p className="text-slate-600">
            AICL partners with global leaders to foster sustainable growth and commercial innovation across the region.
          </p>
          <div className="flex justify-center lg:justify-start">
            <LearnButton text="Partner with us" />
          </div>
        </div>

        {/* Column 2: Carousel with Side Buttons */}
        <div className="lg:col-span-2 relative group">
          
          {/* Side Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
            <button 
              onClick={prev} 
              className="p-3 bg-white border border-slate-200 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
            <button 
              onClick={next} 
              className="p-3 bg-white border border-slate-200 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* The Multi-Item Viewport */}
          <div className="overflow-hidden px-2 py-4">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="min-w-[calc(33.333%-16px)] h-32 bg-white border border-slate-200 rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator (Moved under the track) */}
          <div className="flex justify-center gap-2 mt-4">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? "w-6 bg-indigo-600" : "w-2 bg-slate-300"}`} 
                />
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}