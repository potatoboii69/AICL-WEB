export default function BlueBanner() {
    return(
        <>
        <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#001f3f]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Text Content Block */}
        <div className="block max-w-2xl mb-10">
          <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-4">
            Talk To Us
          </p>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Need to know more about our Company?
          </h2>
          
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Talk to us! We are available <span className="text-white font-bold underline decoration-red-600 underline-offset-4">24/7</span> to answer all your questions regarding anything investment in Nigeria!
          </p>
        </div>

        {/* Buttons Flex Row */}
        <div className="flex flex-row flex-wrap gap-4">
          <ActionButton 
            text="Contact Us"
            variant="primary" 
            to="/contact"
            className="px-6 py-3 text-xs" // Slightly smaller padding/text
          >
          </ActionButton>
          
          <ActionButton 
            text="REQUEST A CALL BACK"
            variant="outline" 
            to="/callback"
            className="px-6 py-3 text-xs"
          >
          </ActionButton>
        </div>
      </div>
    </section>
        </>
    )
}

import ActionButton from "./ActionButton"