import { 
  BarChart3, 
  Building2, 
  Key, 
  Hammer, 
  Truck, 
  Briefcase 
} from "lucide-react";

// Note: You may need to install swiper: npm install swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function StrategicDomains() {
  const domains = [
    {
      id: 1,
      title: "Development",
      icon: <Hammer className="w-8 h-8 text-red-600" />,
      desc: "AICL passionately pursues the development of start-up companies and public-private partnerships to exploit value in the FCT economy."
    },
    {
      id: 2,
      title: "Leasing Services",
      icon: <Truck className="w-8 h-8 text-red-600" />,
      desc: "Providing equipment leasing through Powernoth AICL to impact the service sector and waste management services in Abuja."
    },
    {
      id: 3,
      title: "Facility Management",
      icon: <Building2 className="w-8 h-8 text-red-600" />,
      desc: "Providing leading facility management via world-class subsidiaries like Abuja Property Development Company and AMML."
    },
    {
      id: 4,
      title: "Consulting Advisory",
      icon: <Briefcase className="w-8 h-8 text-red-600" />,
      desc: "Deep understanding of opportunities in the local economy to support investors in achieving their strategic goals."
    },
    {
      id: 5,
      title: "Investment Asset Management",
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      desc: "Our goal is to grow the economy of Abuja while creating sustainable long-term value for all our stakeholders."
    },
    {
      id: 6,
      title: "Sales",
      icon: <Key className="w-8 h-8 text-red-600" />,
      desc: "Portfolio of high-quality real estate for sale to the public, designed to generate high returns and value."
    }
  ];

  return (
    <section className="py-16 px-6 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block - Aligned with previous sections */}
        <div className="mb-12">
          <h4 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2">
            Unique
          </h4>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">
            Our Strategic <span className="text-indigo-600">Domains</span>
          </h2>
          <p className="text-slate-500 max-w-2xl text-base leading-relaxed">
            Abuja Investments Company Limited (AICL) is dedicated to fostering economic growth and development within Abuja through a diverse range of strategic investment and business services.
          </p>
          <div className="h-1 w-16 bg-red-600 mt-6"></div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {domains.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-[320px] flex flex-col hover:shadow-md transition-shadow group">
                <div className="mb-6 p-3 bg-slate-50 rounded-xl inline-block w-fit group-hover:bg-red-50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">
                  {item.id}. {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #4f46e5 !important; /* Indigo-600 */
        }
      `}</style>
    </section>
  );
}