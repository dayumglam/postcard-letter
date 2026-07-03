import { features } from '../../data/content';

export function Features() {
  return (
    <section className="relative bg-[#fdfdfd] py-24 px-8 md:px-16 overflow-hidden" id="feature">
      {/* Background Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] h-[1050px] opacity-10 pointer-events-none">
        <img 
          src="/src/assets/section-bg.png"
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Section Header */}
      <div className="relative w-full max-w-[672px] mx-auto flex flex-col gap-4 items-center text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#18181b]">
          A different way to send a message
        </h2>
        <p className="font-sans text-lg md:text-xl leading-relaxed text-[#71717a]">
          each postcard waits quietly until the moment you choose comes, it's small pause in a fast world. A message that arrives with intention
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative flex flex-wrap gap-8 justify-center max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex w-full md:w-[580px] min-h-[188px] rounded-3xl border-4 border-white shadow-lg overflow-hidden"
            style={{ backgroundColor: feature.color }}
          >
            {/* Icon Container */}
            <div className="w-[124px] flex-shrink-0 flex items-center justify-center backdrop-blur-sm">
              <feature.icon className="w-16 h-16 text-[#18181b]" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="flex-1 bg-white flex flex-col gap-2 justify-center p-6">
              <h3 className="font-serif text-3xl leading-tight text-[#18181b]">
                {feature.name}
              </h3>
              <p className="font-sans text-lg leading-relaxed text-[#71717a]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
