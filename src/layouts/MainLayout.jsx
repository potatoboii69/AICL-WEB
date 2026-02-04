// src/layouts/MainLayout.jsx
import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/news" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Updated Nav: Dark Blue Background */}
      <nav className="bg-[#001f3f] border-b border-white/10 px-8 py-6 flex gap-10 justify-center sticky top-0 z-50 shadow-xl">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="group relative text-lg md:text-xl font-bold text-white transition-colors duration-300"
          >
            {link.name}
            
            {/* The Blue Highlight Underline */}
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}