import { Phone, Mail, MapPin, FileText } from "lucide-react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const subsidiaries = [
    "Abuja Property & Development Company",
    "Abuja Markets Management Limited",
    "Abuja Film Village International Ltd",
    "Abuja Urban Mass Transport Company",
    "PowerNoth/AICL Equipment Leasing Co",
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Our Team", to: "/team" },
    { name: "Our Services", to: "/services" },
    { name: "Privacy Policy", to: "/privacy" },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-8 border-t border-white/10">
      {/* Optimization: Added 'lg:grid-cols-3' and 'md:grid-cols-2' 
          This ensures tablets get a 2-column view instead of a cramped 3-column view.
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
        
        {/* Column 1: Branding Stack */}
        <div className="flex flex-col items-start gap-8 lg:pr-10">
          <img 
            src="/logo-top.png" 
            alt="AICL Logo" 
            className="h-20 w-auto object-contain" 
            loading="lazy"
          />
          <p className="text-slate-200 text-xl leading-relaxed font-medium">
            Abuja Investments Company Limited is 100% owned by the Federal Capital Development Authority (FCDA) and serves as the flagship investment and holding company for the FCT.
          </p>
          <img 
            src="/logo-bottom.png" 
            alt="FCDA Logo" 
            className="h-14 w-auto object-contain opacity-90" 
            loading="lazy"
          />
        </div>

        {/* Column 2: Links - Subdivided into two smaller columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-lg border-b-4 border-red-600 pb-2 inline-block">
              Subsidiaries
            </h4>
            <ul className="space-y-6">
              {subsidiaries.map((item) => (
                <li key={item}>
                  <button className="text-slate-400 text-lg hover:text-white transition-all text-left leading-tight">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-lg border-b-4 border-red-600 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-slate-400 text-lg hover:text-white transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Contact & Downloads */}
        <div className="flex flex-col gap-10">
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-lg border-b-4 border-red-600 pb-2 inline-block">
              Contact
            </h4>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-red-600 rounded-xl shrink-0 shadow-lg shadow-red-600/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-white text-lg font-bold space-y-1">
                  <p className="block">+234 (0) 809 111 0792</p>
                  <p className="block">+234 (0) 809 111 0794</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="p-3 bg-red-600 rounded-xl shrink-0 shadow-lg shadow-red-600/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-lg font-bold break-all">online@abujainvestments.com</p>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3 bg-red-600 rounded-xl shrink-0 shadow-lg shadow-red-600/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-white text-lg leading-relaxed font-bold">
                  4 Nkwere Street, off Muhammadu Buhari Way, Garki II Abuja, Nigeria.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-white text-slate-900 rounded-2xl hover:bg-red-600 hover:text-white transition-all text-lg font-black uppercase tracking-widest shadow-xl">
              <FileText className="w-7 h-7" />
              Download Reports
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em] text-center md:text-left">
          © {new Date().getFullYear()} Abuja Investments Company Limited.
        </p>
        <div className="flex gap-8">
          <button className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest">Privacy Policy</button>
          <button className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest">Terms of Use</button>
        </div>
      </div>

      <div className="bg-black py-6 px-8 border-t border-white/5 mt-5">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* Copyright Text */}
    <p className="text-slate-500 text-[11px] uppercase tracking-[0.2em] font-medium">
      Copyright © 2026 Abuja Investments Company Limited. All Rights Reserved.
    </p>

    {/* Social Links */}
    <div className="flex items-center gap-8">
      <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
        <Facebook className="w-4 h-4" />
        <span className="text-[10px] font-black uppercase tracking-widest">Facebook</span>
      </a>
      
      <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
        <Linkedin className="w-4 h-4" />
        <span className="text-[10px] font-black uppercase tracking-widest">Linkedin</span>
      </a>

      <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
        <Instagram className="w-4 h-4" />
        <span className="text-[10px] font-black uppercase tracking-widest">Instagram</span>
      </a>
    </div>
  </div>
</div>
    </footer>
    
  );
}