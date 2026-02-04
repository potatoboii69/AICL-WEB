import { ArrowRight } from "lucide-react";

export default function ActiveButton({ text = "Learn More", onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`
        group flex items-center gap-2 px-6 py-3 
        bg-indigo-600 hover:bg-indigo-700 
        text-white font-bold text-sm uppercase tracking-widest
        rounded transition-all duration-300
        hover:shadow-lg hover:shadow-indigo-500/30
        active:scale-95 
        ${className}
      `}
    >
      <span>{text}</span>
      
      {/* Animated Arrow */}
      <ArrowRight 
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
      />
    </button>
  );
}