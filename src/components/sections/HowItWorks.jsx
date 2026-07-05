import { steps } from '@/data/content';

export function HowItWorks() {
  return (
    <section className="relative bg-[#f8f8f8] py-[120px] px-8" id="works">
      {/* Section Header */}
      <div className="relative w-full max-w-[672px] mx-auto text-center mb-20 tracking-[-0.5px]">
        <h2 className="font-serif text-[56px] leading-[64px] text-[#18181b] mb-4">
          How a postcard begins
        </h2>
        <p className="font-sans text-[20px] leading-7 text-[#71717a]">
          You write what your feel, set it aside and let the postcard wait patiently.
        </p>

        {/* Decorative Vector */}
        <div className="absolute right-[-344px] top-[117px] w-[143px] h-[67px]">
          <svg viewBox="0 0 143 67" className="w-full h-full">
            <path 
              d="M 10 34 Q 71.5 10, 133 34" 
              stroke="#18181b" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Steps - Horizontal with Connectors */}
      <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-0">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Card */}
            <div className="bg-[#f5f5f5] border-[7px] border-white rounded-[68.561px] shadow-[0px_9.364px_9.364px_0px_rgba(11,32,103,0.05),0px_1.338px_2.675px_0px_rgba(11,32,103,0.14),0px_34.862px_46.482px_0px_rgba(0,0,0,0.03)] w-[307px] h-[280px] flex flex-col overflow-hidden">
              {/* Image Container */}
              <div className="flex-1 p-2">
                <div 
                  className="relative w-full h-full rounded-[60px] overflow-hidden"
                  style={{
                    boxShadow: 'inset 0px 1.47px 9.8px 0px rgba(255,255,255,0.2), inset 0px 11.271px 10.634px 0px rgba(255,255,255,0.34), 0px 86.734px 12.251px rgba(0,0,0,0), 0px 55.373px 11.026px rgba(0,0,0,0.01), 0px 31.361px 9.31px rgba(0,0,0,0.03), 0px 13.721px 6.86px rgba(0,0,0,0.05), 0px 3.43px 3.92px rgba(0,0,0,0.06)',
                  }}
                >
                  <img 
                    src={step.image}
                    alt={`Step ${step.number}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay */}
                  <div 
                    className="absolute inset-0 mix-blend-overlay"
                    style={{ 
                      backgroundColor: index === 0 ? 'rgba(0,0,0,0.4)' : index === 1 ? 'rgba(0,0,0,0.28)' : 'rgba(0,0,0,0.5)' 
                    }}
                  />
                  {/* Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p 
                      className="text-[157.567px] leading-[1.18] tracking-[-4.727px] uppercase font-black"
                      style={{
                        fontFamily: 'SF Pro Rounded, system-ui, sans-serif',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.61) 0%, rgba(255,255,255,0.12) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {step.number}
                    </p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="backdrop-blur-[35.813px] px-10 py-4 flex items-center justify-center pb-5">
                <p className="text-center font-semibold text-[24px] leading-[1.43] tracking-[-1.2px]">
                  <span className="text-[rgba(38,60,58,0.24)]">{step.prefix}</span>
                  <span className="text-[#263c3a]">{step.bold}</span>
                </p>
              </div>
            </div>

            {/* Progress Bar Connector */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex w-[128px] h-[10.243px] items-center justify-center flex-shrink-0">
                <svg width="128" height="11" viewBox="0 0 128 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="5.5" x2="54" y2="5.5" stroke="#d1d5db" strokeWidth="2"/>
                  <circle cx="64" cy="5.5" r="4" fill="#d1d5db"/>
                  <line x1="74" y1="5.5" x2="128" y2="5.5" stroke="#d1d5db" strokeWidth="2"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
