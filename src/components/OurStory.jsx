import React from "react";
import { CheckCircle2 } from "lucide-react"; // Using Lucide for the blue ticks

export default function OurStory() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-start">
        
        {/* Column 1: Narrative */}
        <div className="lg:pr-20">
          <div className="space-y-6">
            <div className="inline-block">
              <h4 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-sm mb-2">Our Story</h4>
              <div className="h-1 w-12 bg-red-600"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
              We offer clients bespoke <br /> 
              <span className="text-indigo-600">investment opportunities</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
              <p>
                Incorporated in 1994, Abuja Investments Company Limited is 100% owned by the Federal Capital Development Authority (FCDA) and serves as the flagship investment and holding company for the FCT.
              </p>
              <p>
                Over the years the company has transformed from being a government funded and controlled entity into a fully independent, self-funded, commercially viable company operating under proper corporate governance principles and guidelines.
              </p>
              <p>
                AICL has thus grown to become a world class investment firm, fostering profitable global business partnerships. Utilizing the best international practices and leveraging on local knowledge, AICL offers clients bespoke investment opportunities and professional financial advice.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Visuals & Insight Blocks */}
        <div className="relative lg:pl-16 border-l-0 lg:border-l border-slate-200">
          
          {/* Shorter Image Container */}
          <div className="relative mb-12">
             {/* Creative Dot Pattern behind image */}
             <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 z-0">
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-indigo-600 rounded-full"></div>
                  ))}
                </div>
              </div>

            <div className="relative z-10 aspect-video lg:h-80 w-full rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" 
                alt="Abuja Skyline" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* New Insight Blocks with Blue Ticks */}
          <div className="space-y-10">
            {/* Block 1 */}
            <div className="flex gap-5 group">
              <div className="shrink-0">
                <CheckCircle2 className="w-8 h-8 text-indigo-600 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">
                  Unique local economic insight
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  AICL leverages over 25 years as a leading investor managing landmark assets in Abuja with strategic partnerships and stakeholders to offer second to none investment advisory in Abuja.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex gap-5 group">
              <div className="shrink-0">
                <CheckCircle2 className="w-8 h-8 text-indigo-600 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">
                  Sustainable Value
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  We look to provide a responsible and sustainable impact. AICL has a track record of developing projects that add long term sustainable value for the economic environment of Abuja.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}