import { steps } from '../../data/content';
import step1Img from '../../assets/step1.png';
import step2Img from '../../assets/step2.png';
import step3Img from '../../assets/step3.png';

const stepImages = [step1Img, step2Img, step3Img];

export function HowItWorks() {
  return (
    <section className="relative bg-[#f8f8f8] py-[120px] px-[138px]" id="works">
      {/* Section Header */}
      <div className="relative w-[672px] mx-auto flex flex-col gap-4 items-center text-center mb-20 tracking-[-0.5px]">
        <h2 className="font-serif text-[56px] leading-[64px] text-[#18181b]">
          How a postcard begins
        </h2>
        <p className="font-sans text-[20px] leading-7 text-[#71717a]">
          You write what your feel, set it aside and let the postcard wait patiently.
        </p>

        {/* Decorative underline */}
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

      {/* Steps */}
      <div className="flex items-center justify-center gap-0">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Card */}
            <div className="bg-[#f5f5f5] border-[7px] border-white rounded-[68.561px] shadow-[0px_9.364px_9.364px_0px_rgba(11,32,103,0.05),0px_1.338px_2.675px_0px_rgba(11,32,103,0.14),0px_34.862px_46.482px_0px_rgba(0,0,0,0.03)] w-[307px] h-[280px] flex flex-col overflow-hidden">
              {/* Image Container */}
              <div className="flex-1 p-2">
                <div 
                  className="relative w-full h-full rounded-[60px] overflow-hidden shadow-[0px_86.734px_12.251px_rgba(0,0,0,0),0px_55.373px_11.026px_rgba(0,0,0,0.01),0px_31.361px_9.31px_rgba(0,0,0,0.03),0px_13.721px_6.86px_rgba(0,0,0,0.05),0px_3.43px_3.92px_rgba(0,0,0,0.06)]"
                  style={{
                    boxShadow: 'inset 0px 1.47px 9.8px 0px rgba(255,255,255,0.2), inset 0px 11.271px 10.634px 0px rgba(255,255,255,0.34)',
                  }}
                >
                  <img 
                    src={stepImages[index]}
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
              <div className="backdrop-blur-[35.813px] px-10 py-4">
                <p className="text-center pb-5 font-semibold text-[24px] leading-[1.43] tracking-[-1.2px]">
                  <span className="text-[rgba(38,60,58,0.24)]">{step.prefix}</span>
                  <span className="text-[#263c3a]">{step.bold}</span>
                </p>
              </div>
            </div>

            {/* Progress Bar (connector) */}
            {index < steps.length - 1 && (
              <div className="w-[128px] h-[10.243px] flex items-center gap-2 px-4">
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
