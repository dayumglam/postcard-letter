export function Footer() {
  return (
    <section className="relative bg-[#e8e8e8] py-12 px-6 overflow-visible min-h-[400px] flex items-start justify-center">
      {/* Main Container */}
      <div className="relative max-w-[680px] w-full bg-[#1f1f1f] rounded-[28px] p-5 shadow-2xl z-10">
        {/* Top Row - Two Cards Side by Side */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Contact Card - Left */}
          <div className="bg-[#2a2a2a] rounded-[18px] p-6 flex flex-col justify-between min-h-[160px]">
            <div className="flex flex-col gap-2">
              <h3 className="font-['Instrument_Serif'] text-[20px] leading-snug text-[#d1d1d1]">
                Have a question?
              </h3>
              <p className="font-['Inter'] text-[12px] leading-relaxed text-[#737373]">
                If there's anything you'd like to ask or clarify, we're here to listen.
              </p>
            </div>
            <button 
              className="self-center flex items-center gap-2 px-5 py-2 rounded-lg text-[#1f1f1f] text-[13px] font-['Plus_Jakarta_Sans'] font-semibold bg-white hover:bg-gray-100 transition-colors mt-3"
            >
              <span>Contact us</span>
              <span className="text-base">→</span>
            </button>
          </div>

          {/* Brand Card - Right */}
          <div className="bg-[#353535] rounded-[18px] p-6 flex flex-col gap-3 min-h-[160px]">
            <div 
              className="w-9 h-9 rounded-full flex items-center justify-center self-start"
              style={{
                background: 'radial-gradient(circle at 50% 20%, rgba(160,160,160,0.5) 0%, rgba(80,80,80,0.7) 60%, rgba(30,30,30,0.9) 100%)'
              }}
            >
              <div className="w-5 h-5 rounded-full border-[1.5px] border-dashed border-gray-400"></div>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="font-['Instrument_Serif'] text-[20px] leading-snug text-[#d1d1d1]">
                Postcardku — words that wait.
              </h3>
              <p className="font-['Inter'] text-[12px] leading-relaxed text-[#737373]">
                A quiet way to send meaningful messages, opened only at the right moment.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Card - Full Width */}
        <div className="bg-[#2a2a2a] rounded-[18px] px-6 py-4 mb-3 flex items-center justify-between">
          <h3 className="font-['Instrument_Serif'] text-[20px] text-[#d1d1d1]">
            Visit Our Sosmed
          </h3>
          <div className="flex items-center gap-5">
            <svg className="w-6 h-6 text-white cursor-pointer hover:opacity-70 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <svg className="w-6 h-6 text-white cursor-pointer hover:opacity-70 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <svg className="w-6 h-6 text-white cursor-pointer hover:opacity-70 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-.543-1.934-1.476-3.387-2.775-4.32C16.43 2.926 14.56 2.422 12.2 2.407 9.122 2.393 6.82 3.387 5.394 5.35c-1.32 1.816-2.01 4.415-2.036 7.633v.017c.025 3.22.715 5.82 2.034 7.635 1.423 1.96 3.723 2.952 6.8 2.938 2.344-.015 4.218-.538 5.579-1.555 1.302-.973 2.207-2.398 2.691-4.24l2.034.569c-.597 2.282-1.761 4.116-3.458 5.449-1.804 1.416-4.138 2.147-6.932 2.171z"/>
            </svg>
            <svg className="w-6 h-6 text-white cursor-pointer hover:opacity-70 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex items-center justify-between pt-3 border-t border-[#2f2f2f] text-[11px] text-[#737373]">
          <p className="font-['Inter']">
            © 2026 Postcardku. Made with care.
          </p>
          <div className="flex items-center gap-4">
            <a href="#about" className="font-['Inter'] hover:text-[#d1d1d1] transition-colors">
              About
            </a>
            <a href="#contact" className="font-['Inter'] hover:text-[#d1d1d1] transition-colors">
              Contact
            </a>
            <a href="#faq" className="font-['Inter'] hover:text-[#d1d1d1] transition-colors">
              FAQ
            </a>
            <a href="#tnc" className="font-['Inter'] hover:text-[#d1d1d1] transition-colors">
              TnC
            </a>
          </div>
        </div>
      </div>

      {/* Background Image - Grass at bottom - positioned behind */}
      <div className="absolute left-0 right-0 bottom-0 w-full h-[250px] pointer-events-none">
        <img 
          src="/hero-bg.png" 
          alt="" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
}
