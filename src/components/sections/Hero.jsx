import { UserCircle, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white min-h-screen overflow-hidden flex flex-col" id="about">
      {/* Navigation Bar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-[#2a2a2a] rounded-full px-6 py-2.5 flex items-center gap-6 shadow-lg">
          <button className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            <UserCircle className="w-4 h-4 text-white" strokeWidth={2} />
          </button>
          <a href="#about" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">About</a>
          <a href="#works" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Works</a>
          <a href="#feature" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Feature</a>
          <a href="#faq" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">FAQ</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-32 pb-16">
        {/* Title and Description */}
        <div className="max-w-2xl text-center mb-8">
          <h1 className="font-serif text-6xl leading-tight text-[#1a1a1a] mb-4">
            Messages that wait for the right moment.
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            A quiet way to send meaningful postcards,
            <br />
            meant to be opened only when the moment feels right.
          </p>
          
          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-colors text-sm font-medium shadow-lg">
            <span>Create a postcard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Postcard with stamp border */}
        <div className="relative max-w-4xl w-full">
          {/* Decorative stamp border */}
          <div 
            className="relative bg-white rounded-xl p-4 shadow-2xl"
            style={{
              background: 'repeating-linear-gradient(135deg, transparent, transparent 10px, #a8c9a8 10px, #a8c9a8 20px), repeating-linear-gradient(45deg, transparent, transparent 10px, #a8c9a8 10px, #a8c9a8 20px), white',
              backgroundSize: '100% 12px, 100% 12px, 100% 100%',
              backgroundPosition: 'top, bottom, center',
              backgroundRepeat: 'repeat-x, repeat-x, no-repeat',
              padding: '12px',
            }}
          >
            <div 
              className="relative bg-white rounded-lg overflow-hidden"
              style={{
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderImage: 'repeating-linear-gradient(0deg, #a8c9a8 0, #a8c9a8 10px, transparent 10px, transparent 20px) 12',
              }}
            >
              <img 
                src="/src/assets/postcard.png"
                alt="Postcard preview" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grass at bottom */}
      <div className="relative w-full h-32 mt-auto">
        <img 
          src="/src/assets/hero-bg.png"
          alt="" 
          className="absolute bottom-0 w-full h-full object-cover object-top"
          style={{ maskImage: 'linear-gradient(to top, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)' }}
        />
      </div>
    </section>
  );
}
