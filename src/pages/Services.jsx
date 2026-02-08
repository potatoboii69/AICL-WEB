import React from 'react';
import { 
  Hammer, Truck, Building2, Briefcase, 
  BarChart3, Key, ChevronRight, ArrowUpRight 
} from "lucide-react";

import Footer from "../components/Footer"
const mainServices = [
  {
    id: "01",
    title: "Development",
    description: "AICL passionately pursues the development of start-up companies and public-private partnerships (PPP). We exploit numerous opportunities to create long-term value and returns in the FCT economy.",
    icon: <Hammer className="w-6 h-6" />,
    tags: ["PPP Projects", "Start-up Incubation", "Urban Planning"]
  },
  {
    id: "02",
    title: "Leasing Services",
    description: "Through our subsidiary, Powernoth AICL, we provide specialized equipment leasing services that power waste management and industrial services across Abuja.",
    icon: <Truck className="w-6 h-6" />,
    tags: ["Industrial Equipment", "Waste Management", "Fleet Logistics"]
  },
  {
    id: "03",
    title: "Facility Management",
    description: "We provide world-class management for Abuja's most vital commercial hubs and residential estates through AMML and APDC.",
    icon: <Building2 className="w-6 h-6" />,
    tags: ["Market Management", "Residential Estate", "Public Infrastructure"]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h4 className="text-red-500 font-black uppercase tracking-[0.4em] text-sm mb-4">What We Do</h4>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter max-w-4xl">
            Driving Growth Through <span className="text-indigo-500">Strategic Assets</span>
          </h1>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {mainServices.map((service) => (
            <div key={service.id} className="group border-t border-slate-200 pt-8 hover:border-indigo-600 transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <span className="text-slate-300 font-black text-4xl">{service.id}</span>
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SUBSIDIARY SYNERGY (Feature Section) */}
      <section className="bg-slate-950 py-24 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
              Our <span className="text-red-600">Subsidiary</span> <br />Network
            </h2>
            <div className="space-y-8">
                {[
                    { name: "APDC", full: "Abuja Property Development Company", desc: "Leading the city's residential and commercial expansion." },
                    { name: "AMML", full: "Abuja Markets Management Limited", desc: "Setting the standard for retail facility management." },
                    { name: "AUMTCO", full: "Abuja Urban Mass Transport Co.", desc: "The backbone of the FCT's public transportation system." }
                ].map((sub) => (
                    <div key={sub.name} className="flex gap-6 group cursor-pointer">
                        <div className="shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center font-bold text-xs group-hover:bg-white group-hover:text-black transition-all">
                            {sub.name}
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-sm">{sub.full}</h4>
                            <p className="text-slate-400 text-sm mt-1">{sub.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-indigo-600/10 rounded-full absolute -inset-10 blur-3xl animate-pulse"></div>
            <div className="relative bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl">
                <Briefcase className="w-16 h-16 text-red-600 mb-8" />
                <h3 className="text-3xl font-black mb-4 uppercase">Consulting & Advisory</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Leveraging 30+ years of local insight, we provide bespoke financial advice and investment evaluations for both local and international partners.
                </p>
                <button className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-xs hover:text-red-500 transition-colors">
                    Request a Consultation <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}