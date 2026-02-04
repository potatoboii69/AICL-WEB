import { Briefcase, Users, Calendar, Banknote } from "lucide-react";

export default function TrustBanner() {
  const stats = [
    { 
      label: "Managed Assets", 
      value: "100 B+", 
      icon: <Briefcase className="w-6 h-6" /> 
    },
    { 
      label: "Professional Staff", 
      value: "60 +", 
      icon: <Users className="w-6 h-6" /> 
    },
    { 
      label: "Years of Existence", 
      value: "15 +", 
      icon: <Calendar className="w-6 h-6" /> 
    },
    { 
      label: "Total Revenue", 
      value: "500 M+", 
      icon: <Banknote className="w-6 h-6" /> 
    },
  ];

  return (
    <section className="w-full bg-red-400 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              
              {/* Icon Container */}
              <div className="mb-4 p-3 rounded-2xl bg-zinc-900 text-indigo-500 ring-1 ring-zinc-800 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                {stat.icon}
              </div>

              {/* Value */}
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-1">
                {stat.value}
              </h2>

              {/* Label */}
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-dark transition-colors group-hover:text-zinc-300">
                {stat.label}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}