import { CheckCircle2, Target, Play } from "lucide-react";
import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";

export default function MediaSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Video Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Corporate Insight & <span className="text-indigo-600">Vision</span>
            </h2>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Replace URL with your actual video source */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="AICL Corporate Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Link to='/services'>
            <ActionButton/>
            </Link>
          </div>

          {/* Column 2: Text & Bullet Points */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
                Our Strategic Impact
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                AICL is committed to transforming Abuja's economic landscape through sustainable 
                investments and world-class advisory services.
              </p>
            </div>

            <div className="space-y-6">
              {/* Bullet Point 1 */}
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-200 transition-hover hover:shadow-md">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Mission Driven</h4>
                  <p className="text-slate-500 text-sm">
                    Focused on long-term value creation for every stakeholder in the city.
                  </p>
                </div>
              </div>

              {/* Bullet Point 2 */}
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-200 transition-hover hover:shadow-md">
                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Proven Excellence</h4>
                  <p className="text-slate-500 text-sm">
                    A decade of successful projects and strategic public-private partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}