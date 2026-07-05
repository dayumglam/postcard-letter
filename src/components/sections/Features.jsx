import { features } from '@/data/content';

export function Features() {
  return (
    <section className="relative bg-[#fdfdfd] py-[120px] px-8 overflow-hidden" id="feature">
      {/* Background Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-[11px] w-[1440px] h-[1050px] opacity-10 pointer-events-none">
        <img 
          src="/section-bg.png"
          alt="" 
          className="w-full h-full object-bottom"
        />
      </div>

      {/* Section Header */}
      <div className="relative w-full max-w-[672px] mx-auto text-center mb-20 tracking-[-0.5px]">
        <h2 className="font-['Instrument_Serif'] text-[56px] leading-[64px] text-[#18181b] mb-4">
          A different way to send a message
        </h2>
        <p className="font-['Inter'] text-[20px] leading-7 text-[#71717a]">
          each postcard waits quietly until the moment you choose comes, it's small pause in a fast world. A message that arrives with intention
        </p>

        {/* Decorative Curve */}
        <div className="absolute right-[-194.49px] top-[123.45px] w-[174.511px] h-[67.043px]">
          <img 
            src="/feature-curve.png" 
            alt="" 
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Feature Cards - 2x2 Grid */}
      <div className="relative max-w-[1202px] mx-auto flex flex-wrap gap-8 justify-center">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex w-full md:w-[580px] h-[188px] rounded-[32px] border-4 border-white shadow-[0px_21.03px_22.947px_0px_rgba(0,0,0,0.03),0px_17.196px_15.279px_0px_rgba(0,0,0,0.02),0px_4.313px_9.969px_0px_rgba(0,0,0,0.04)] overflow-hidden"
            style={{ backgroundColor: feature.color }}
          >
            {/* Icon Container */}
            <div className="w-[124px] h-full flex items-center justify-center backdrop-blur-[5.599px] rounded-[8.463px] flex-shrink-0 p-5">
              <img 
                src={feature.icon} 
                alt={feature.name}
                className="w-16 h-16"
              />
            </div>

            {/* Content */}
            <div className="flex-1 bg-white flex flex-col gap-2 justify-center p-6 min-w-0">
              <h3 className="font-['Instrument_Serif'] text-[36px] leading-[48px] text-[#18181b]">
                {feature.name}
              </h3>
              <p className="font-['Inter'] text-[20px] leading-7 text-[#71717a] tracking-[-0.5px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
