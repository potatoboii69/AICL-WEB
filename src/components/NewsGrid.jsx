import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewsGrid() {
  // 1. DATA: Simulating 40 items (In a real app, this might come from an API)
  const allPosts = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    date: "Oct 24, 2025",
    title: `Project Update ${i + 1}`,
    subheading: "AICL is driving urban transformation through strategic investments and innovative development.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  }));

  // 2. STATE & CONFIG
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Showing 8 items per page (2 rows of 4)

  // 3. PAGINATION MATH
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  // 4. HANDLERS
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll back to the start of the section
    document.getElementById("news-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="news-section" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Latest News</h2>
            <div className="h-1 w-20 bg-indigo-600 mt-2"></div>
          </div>
          <Link to={'/news'}>
            <button className="text-indigo-600 font-bold hover:underline hidden md:block">
              View All News
            </button>
          </Link>
        </div>

        {/* 4-Column Grid (Now rendering 'currentPosts' slice) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 right-0 bg-red-600 px-4 py-2 rounded-tl-2xl shadow-lg">
                  <span className="text-xs font-black text-white uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.subheading}
              </p>

              <button className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest group/btn">
                Read More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* 5. PAGINATION CONTROLS */}
        <div className="flex justify-center items-center gap-3 border-t border-slate-100 pt-10">
          <button 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-3 rounded-full border border-slate-200 disabled:opacity-20 hover:bg-slate-50 transition-all active:scale-90"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-12 h-12 rounded-2xl font-black text-sm transition-all duration-300 ${
                  currentPage === i + 1 
                  ? "bg-red-600 text-white shadow-xl shadow-red-200 scale-110" 
                  : "bg-white text-slate-400 border border-slate-100 hover:border-slate-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full border border-slate-200 disabled:opacity-20 hover:bg-slate-50 transition-all active:scale-90"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>

      </div>
    </section>
  );
}