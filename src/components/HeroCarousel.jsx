import { useState, useEffect } from "react";
import ActionButton from "./ActionButton"; // Using your generic button

const slides = [
  {
    id: 1,
    title: "Welcome to Abuja Investment Company Limited",
    subtitle: "Abuja Investments Company Limited is 100% owned by the Federal Capital Development Authority (FCDA) and serves as the flagship investment and holding company for the FCT.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    title: "Strategic Assets Management",
    subtitle: "Abuja investments Company Limited is a world class investment holding. AICL manages a diverse portfolio of investments and assets on behalf of the FCTA.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 3,
    title: "Infrastructural Development",
    subtitle: "Development of Commercial and Residential projects to improve commerce and economic activity as well as driving home ownership.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: 4,
    title: "Public-Private Partnerships",
    subtitle: "Abuja investments Company Limited is a knowledge based Company with expertise in making strategic investments in the economy of Abuja.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds gives more time for animations to play out
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Zoom Effect */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${
              index === current ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>

          {/* Content with Fade-Up logic */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
            {index === current && (
              <>
                <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase animate-fade-up">
                  {slide.title}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl leading-relaxed animate-fade-up [animation-delay:200ms]">
                  {slide.subtitle}
                </p>

                <div className="animate-fade-up [animation-delay:400ms]">
                   <ActionButton to="/about" variant="primary">
                     Learn More
                   </ActionButton>
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === i ? "w-12 bg-red-600" : "w-4 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}