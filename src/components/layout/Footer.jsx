import { ArrowRight, User, Github, Instagram, Twitter } from 'lucide-react';
import footerBgImg from '../../assets/footer-bg.png';

export function Footer() {
  return (
    <section className="relative bg-[#f9f9f9] h-[975px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute bottom-[-211px] left-1/2 -translate-x-1/2 translate-x-[98.5px] w-[1683px] h-[1197px]">
        <img 
          src={footerBgImg}
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Content Container */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-[-131.5px] w-[1237px] bg-[#1c1c1e] rounded-[20px] px-6 pt-6 pb-7 flex flex-col gap-10">
        {/* Cards Section */}
        <div className="flex flex-wrap gap-3 items-center w-full">
          {/* Contact Card */}
          <div className="bg-[#27272a] rounded-2xl p-8 w-[588px] h-[268px] flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-[36px] leading-[48px] text-[#d4d4d8]">
                Have a question?
              </h3>
              <p className="font-sans text-[20px] leading-7 text-[#71717a] tracking-[-0.5px]">
                If there's anything you'd like to ask or clarify, we're here to llsten.
              </p>
            </div>
            <button 
              className="self-end flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-[#f1f8ff] via-[#f3f8ff] to-[#f1f8ff] rounded-xl shadow-[0px_13.073px_13.073px_0px_rgba(11,32,103,0.05),0px_1.868px_3.735px_0px_rgba(11,32,103,0.14),0px_48.673px_64.897px_0px_rgba(0,0,0,0.03)]"
            >
              <span className="font-semibold text-[#18181b] text-[20px] leading-6">
                Contact us
              </span>
              <ArrowRight className="w-6 h-6 text-[#18181b]" />
            </button>
          </div>

          {/* Brand Card */}
          <div className="bg-[#27272a] rounded-2xl p-8 w-[588px] h-[268px] flex flex-col justify-between">
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center self-start"
              style={{
                background: 'radial-gradient(16.001px at 50% -133.19px, rgba(255,255,255,1) 0%, rgba(197,197,198,1) 25%, rgba(168,168,170,1) 37.5%, rgba(140,140,141,1) 50%, rgba(111,111,113,1) 62.5%, rgba(82,82,84,1) 75%, rgba(53,53,56,1) 87.5%, rgba(38,38,41,1) 93.75%, rgba(24,24,27,1) 100%)',
              }}
            >
              <User className="w-5 h-5 text-white" strokeWidth={1.5} />
            </button>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-serif text-[36px] leading-[48px] text-[#d4d4d8]">
                Postcardku — words that wait.
              </h3>
              <p className="font-sans text-[20px] leading-7 text-[#71717a] tracking-[-0.5px]">
                A quiet way to send meaningful messages, opened only at the right moment.
              </p>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="bg-[#27272a] rounded-2xl px-8 py-7 w-[1189px] flex items-center gap-6">
            <h3 className="flex-1 font-serif text-[36px] leading-[48px] text-[#d4d4d8]">
              Visit Our Sosmed
            </h3>
            <Github className="w-8 h-8 text-[#d4d4d8]" />
            <Instagram className="w-8 h-8 text-[#d4d4d8]" />
            <svg className="w-8 h-8 text-[#d4d4d8]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17M2 12L12 17L22 12" />
            </svg>
            <Twitter className="w-8 h-8 text-[#d4d4d8]" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-start gap-4 pt-5 border-t border-[#27272a] text-[20px] leading-7 text-[#71717a] tracking-[-0.5px]">
          <p className="flex-1 font-sans">
            © 2026 Postcardku. Made with care.
          </p>
          <a href="#about" className="font-medium hover:text-[#d4d4d8] transition-colors">About</a>
          <a href="#" className="font-medium hover:text-[#d4d4d8] transition-colors">Contact</a>
          <a href="#faq" className="font-medium hover:text-[#d4d4d8] transition-colors">FAQ</a>
          <a href="#" className="font-medium hover:text-[#d4d4d8] transition-colors">TnC</a>
        </div>
      </div>
    </section>
  );
}
