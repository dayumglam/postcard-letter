import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-[#f9f9f9] min-h-screen overflow-hidden flex items-center justify-center" id="about">
      {/* Hero Background Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1683px] h-[1197px] pointer-events-none opacity-50">
        <img 
          src="/src/assets/hero-bg.png"
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 pt-32 pb-16">
        {/* Title and Description */}
        <div className="w-full max-w-[672px] mx-auto flex flex-col gap-4 items-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-[#18181b] text-center tracking-tight">
            Messages that wait for the right moment.
          </h1>
          <p className="font-sans text-lg md:text-xl leading-relaxed text-[#71717a] text-center">
            A quiet way to send meaningful postcards,
            <br />
            meant to be opened only when the moment feels right.
          </p>
          
          {/* CTA Button */}
          <button 
            className="flex items-center gap-3 px-6 py-4 bg-gradient-to-b from-[#ffffff] via-[#8c8c8d] to-[#18181b] rounded-xl shadow-lg mt-4 hover:shadow-xl transition-shadow"
          >
            <span className="font-semibold text-white text-lg">
              Create a postcard
            </span>
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Postcard Card */}
        <div className="w-full max-w-[946px] mx-auto bg-black/10 backdrop-blur-sm rounded-2xl shadow-2xl p-3">
          <img 
            src="/src/assets/postcard.png"
            alt="Postcard preview" 
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
