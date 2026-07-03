import { ArrowRight, User, Github, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <section className="relative bg-[#f9f9f9] min-h-[600px] py-24 px-8 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1683px] h-full opacity-30">
        <img 
          src="/src/assets/footer-bg.png"
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Content Container */}
      <div className="relative z-10 w-full max-w-6xl bg-[#1c1c1e] rounded-3xl p-6 flex flex-col gap-10">
        {/* Cards Section */}
        <div className="flex flex-col md:flex-row flex-wrap gap-3">
          {/* Contact Card */}
          <div className="bg-[#27272a] rounded-2xl p-8 flex-1 min-w-[280px] flex flex-col justify-between">
            <div className="flex flex-col gap-3 mb-6">
              <h3 className="font-serif text-3xl leading-tight text-[#d4d4d8]">
                Have a question?
              </h3>
              <p className="font-sans text-lg leading-relaxed text-[#71717a]">
                If there's anything you'd like to ask or clarify, we're here to listen.
              </p>
            </div>
            <button 
              className="self-start flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-[#f1f8ff] to-[#e8f4ff] rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="font-semibold text-[#18181b] text-lg">
                Contact us
              </span>
              <ArrowRight className="w-5 h-5 text-[#18181b]" />
            </button>
          </div>

          {/* Brand Card */}
          <div className="bg-[#27272a] rounded-2xl p-8 flex-1 min-w-[280px] flex flex-col justify-between">
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center self-start mb-6 bg-gradient-to-b from-white via-[#8c8c8d] to-[#18181b]"
            >
              <User className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-3xl leading-tight text-[#d4d4d8]">
                Postcardku — words that wait.
              </h3>
              <p className="font-sans text-lg leading-relaxed text-[#71717a]">
                A quiet way to send meaningful messages, opened only at the right moment.
              </p>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="bg-[#27272a] rounded-2xl px-8 py-6 w-full flex flex-col md:flex-row items-center gap-6">
            <h3 className="flex-1 font-serif text-2xl md:text-3xl leading-tight text-[#d4d4d8]">
              Visit Our Sosmed
            </h3>
            <div className="flex gap-4">
              <Github className="w-8 h-8 text-[#d4d4d8] cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-8 h-8 text-[#d4d4d8] cursor-pointer hover:text-white transition-colors" />
              <svg className="w-8 h-8 text-[#d4d4d8] cursor-pointer hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <Twitter className="w-8 h-8 text-[#d4d4d8] cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center gap-4 pt-5 border-t border-[#27272a] text-lg text-[#71717a]">
          <p className="flex-1 font-sans text-center md:text-left">
            © 2026 Postcardku. Made with care.
          </p>
          <div className="flex gap-4">
            <a href="#about" className="font-medium hover:text-[#d4d4d8] transition-colors">About</a>
            <a href="#" className="font-medium hover:text-[#d4d4d8] transition-colors">Contact</a>
            <a href="#faq" className="font-medium hover:text-[#d4d4d8] transition-colors">FAQ</a>
            <a href="#" className="font-medium hover:text-[#d4d4d8] transition-colors">TnC</a>
          </div>
        </div>
      </div>
    </section>
  );
}
