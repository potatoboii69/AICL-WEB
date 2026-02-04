import { Target, Compass } from "lucide-react";

export default function MissionVision() {
  const cards = [
    {
      id: "vision",
      title: "Our Vision",
      icon: <Target className="w-8 h-8 text-white" />,
      content: "To become a world-class, globally competitive, professional investment company.",
      frontBg: "bg-slate-900",
      backBg: "bg-red-600",
    },
    {
      id: "mission",
      title: "Our Mission",
      icon: <Compass className="w-8 h-8 text-white" />,
      content: "To build profitable business partnerships for the economic growth of the FCT while offering exceptional opportunities.",
      frontBg: "bg-indigo-950",
      backBg: "bg-indigo-600",
    }
  ];

  return (
    <section className="py-12 px-6 bg-white w-full"> {/* Match global padding */}
      <div className="max-w-7xl mx-auto"> {/* Match global width */}
        
        {/* Header Block - All margins removed except bottom-8 */}
        <div className="mb-8">
          <h4 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2">
            What we do
          </h4>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            What we <span className="text-indigo-600">stand for</span>
          </h2>
          <div className="h-1 w-16 bg-red-600 mt-3"></div>
        </div>

        {/* Flip Card Grid - Using gap-6 for a tighter fit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="group h-[240px] [perspective:1000px]">
              {/* Inner Mover */}
              <div className="relative h-full w-full rounded-xl transition-all duration-[700ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md">
                
                {/* FRONT SIDE */}
                <div className={`absolute inset-0 h-full w-full rounded-xl ${card.frontBg} flex flex-col items-center justify-center p-6 [backface-visibility:hidden]`}>
                  <div className="mb-3">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-widest">
                    {card.title}
                  </h3>
                </div>

                {/* BACK SIDE */}
                <div className={`absolute inset-0 h-full w-full rounded-xl ${card.backBg} p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center`}>
                  <div className="text-center">
                    <p className="text-base md:text-lg font-bold leading-snug">
                      {card.content}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}