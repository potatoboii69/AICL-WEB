import { 
  Building2, Recycle, Sprout, ArrowUpRight, 
  ShieldCheck, Gem, Handshake 
} from "lucide-react";

export default function ServicesGrid() {
 const investments = [
    {
      title: "Commercial Infrastructure",
      description: "AICL has major investments in commercial real-estate to spur commerce in the city.",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-blue-600",
    },
    {
      title: "Recycling",
      description: "AICL investments in waste recycling impacts the environment of Abuja.",
      icon: <Recycle className="w-8 h-8" />,
      color: "bg-green-600",
    },
    {
      title: "Agribusiness Value Chain",
      description: "AICL actively partners with stakeholder in Agriculture to promote growth in the sector.",
      icon: <Sprout className="w-8 h-8" />,
      color: "bg-orange-600",
    },
    {
      title: "Value Assessments",
      description: "Our investments and partnerships are designed to provide value for all stakeholders.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-indigo-600",
    },
    {
      title: "Quality Service",
      description: "AICL gives expert advice and world class consulting services.",
      icon: <Gem className="w-8 h-8" />,
      color: "bg-purple-600",
    },
    {
      title: "Partnerships",
      description: "AICL’s profitable Partnerships with the private sector is an esteemed value of our corporate culture.",
      icon: <Handshake className="w-8 h-8" />,
      color: "bg-teal-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 w-1/2">
          <h2 className="text-2xl font-black text-slate-700 mb-4">What We Do</h2>
          <h2 className="text-3xl font-black text-slate-700 mb-4">Our Approach To Project Development And Asset Management: Leverages Public Private Partnerships</h2>
          <div className="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investments.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 p-8 rounded-3xl border border-slate-200 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon Circle */}
              <div className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:rotate-6`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Action Link */}
              <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                LEARN MORE
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}