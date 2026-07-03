import { steps } from '../../data/content';

export function HowItWorks() {
  return (
    <section className="relative bg-[#f8f8f8] py-24 px-8 md:px-16" id="works">
      {/* Section Header */}
      <div className="relative w-full max-w-[672px] mx-auto flex flex-col gap-4 items-center text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#18181b]">
          How a postcard begins
        </h2>
        <p className="font-sans text-lg md:text-xl leading-relaxed text-[#71717a]">
          You write what your feel, set it aside and let the postcard wait patiently.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-4">
            {/* Step Card */}
            <div className="bg-[#f5f5f5] border-8 border-white rounded-[4rem] shadow-lg w-full max-w-[307px] h-[280px] flex flex-col overflow-hidden">
              {/* Image Container */}
              <div className="flex-1 p-2">
                <div 
                  className="relative w-full h-full rounded-[3.75rem] overflow-hidden shadow-inner"
                >
                  <img 
                    src={step.image}
                    alt={`Step ${step.number}`}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 mix-blend-overlay"
                    style={{ 
                      backgroundColor: index === 0 ? 'rgba(0,0,0,0.4)' : index === 1 ? 'rgba(0,0,0,0.28)' : 'rgba(0,0,0,0.5)' 
                    }}
                  />
                  {/* Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p 
                      className="text-[10rem] leading-none font-black uppercase"
                      style={{
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
              <div className="backdrop-blur-sm px-10 py-4">
                <p className="text-center font-semibold text-xl md:text-2xl leading-tight">
                  <span className="text-gray-400">{step.prefix}</span>
                  <span className="text-[#263c3a]">{step.bold}</span>
                </p>
              </div>
            </div>

            {/* Progress Bar (connector) */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex w-[128px] h-[10px] items-center gap-2 px-4">
                <div className="h-[2px] bg-gray-300 flex-1" />
                <div className="w-2 h-2 rounded-full bg-gray-300" />
                <div className="h-[2px] bg-gray-300 flex-1" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
