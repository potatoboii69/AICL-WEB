import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");

  // This would typically come from an API or a larger data file
  const allNews = [
    { id: 1, date: "Oct 24, 2025", title: "New Commercial Hub", subheading: "AICL breaks ground on the latest city-center trade monument.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" },
    { id: 2, date: "Nov 12, 2025", title: "Sustainable Recycling", subheading: "Expanding our waste-to-energy initiatives across Abuja.", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800" },
    { id: 3, date: "Dec 05, 2025", title: "Agribusiness Growth", subheading: "New partnerships formed to support local small-scale farmers.", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800" },
    { id: 4, date: "Jan 18, 2026", title: "Corporate Strategy", subheading: "A look into AICL's 2026 vision for urban development.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
    { id: 5, date: "Feb 01, 2026", title: "Tech Innovation Lab", subheading: "Launching a new incubator for local tech startups.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800" },
    { id: 6, date: "Feb 10, 2026", title: "Housing Expansion", subheading: "Phase 2 of the affordable housing project is now complete.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <header className="bg-slate-900 py-20 px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          News & <span className="text-red-600">Insights</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Stay updated with the latest developments, project milestones, and corporate announcements from AICL.
        </p>
      </header>

      {/* Filter & Search Bar */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-slate-700">
            <SlidersHorizontal className="w-4 h-4" />
            Filter By Category
          </button>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allNews.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 right-0 bg-red-600 px-4 py-2 rounded-tl-2xl shadow-lg">
                  <span className="text-xs font-black text-white uppercase tracking-widest">{post.date}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-4">{post.subheading}</p>
              <button className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest group/btn">
                Read Full Story
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}