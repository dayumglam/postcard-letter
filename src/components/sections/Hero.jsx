import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';
import postcardImg from '../../assets/postcard.png';
import heroBgImg from '../../assets/hero-bg.png';

export function Hero() {
  return (
    <section className="relative bg-[#f9f9f9] h-[1317px] overflow-hidden" id="about">
      {/* Hero Background Image */}
      <div className="absolute bottom-[-157px] left-1/2 -translate-x-1/2 translate-x-[77.5px] w-[1683px] h-[1197px] pointer-events-none">
        <img 
          src={heroBgImg}
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Description */}
      <div className="absolute left-1/2 top-[205px] -translate-x-1/2 -translate-x-[1px] w-[672px] flex flex-col gap-4 items-center z-10">
        <h1 className="font-serif text-[72px] leading-[84px] text-[#18181b] text-center tracking-[-0.5px]">
          Messages that wait for the right moment.
        </h1>
        <p className="font-sans text-[20px] leading-8 text-[#71717a] text-center tracking-[-0.5px]">
          A quiet way to send meaningful postcards,
          <br />
          meant to be opened only when the moment feels right.
        </p>
        
        {/* CTA Button */}
        <button 
          className="flex items-center gap-3 px-6 py-4 bg-gradient-to-b from-white via-[#a5a5a6] to-[#18181b] rounded-xl shadow-[0px_28.054px_39.403px_0px_rgba(255,255,255,0.22)] mt-4 relative overflow-hidden group"
          style={{
            background: 'radial-gradient(22.401px at 50% -186.47px, rgba(255,255,255,1) 0%, rgba(197,197,198,1) 25%, rgba(168,168,170,1) 37.5%, rgba(140,140,141,1) 50%, rgba(111,111,113,1) 62.5%, rgba(82,82,84,1) 75%, rgba(53,53,56,1) 87.5%, rgba(38,38,41,1) 93.75%, rgba(24,24,27,1) 100%)',
            boxShadow: 'inset 0px 2px 1.5px 0px rgba(255,255,255,0.6), inset 0px 2px 0px 0px rgba(255,255,255,0.25), inset 0px 1px 3px 0px white, inset 0px 1px 2px 0px rgba(255,255,255,0.5), 0px 28.054px 39.403px 0px rgba(255,255,255,0.22)',
          }}
        >
          <span className="font-semibold text-white text-[20px] leading-6">
            Create a postcard
          </span>
          <ArrowRight className="w-6 h-6 text-white" />
        </button>

        {/* Decorative underline */}
        <div className="absolute left-[131px] top-[78px] w-[422px] h-[100px]">
          <svg viewBox="0 0 422 100" className="w-full h-full">
            <path 
              d="M 10 50 Q 211 20, 412 50" 
              stroke="#18181b" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Postcard Card */}
      <div className="absolute left-1/2 -translate-x-1/2 translate-x-[5px] top-[586px] w-[946px] bg-black/25 backdrop-blur-sm rounded-[18px] shadow-[0px_0px_0px_1px_#eae7e4] p-3 z-20">
        <img 
          src={postcardImg}
          alt="Postcard preview" 
          className="w-full h-[643px] rounded-xl object-cover"
        />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[319px] flex items-center justify-center pointer-events-none">
        <div className="w-[1440px] h-[319px] -rotate-90 bg-gradient-to-r from-transparent to-[#fffafa]" />
      </div>
    </section>
  );
}
