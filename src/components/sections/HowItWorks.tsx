import { Container } from '../common/Container';
import { SectionTitle, Highlight } from '../common/SectionTitle';
import { steps } from '../../data/content';

export function HowItWorks() {
  return (
    <section className="py-24 bg-brand-bg" id="works">
      <Container>
        <SectionTitle 
          title={
            <>
              How a postcard <Highlight>begins</Highlight>
            </>
          }
          subtitle="You write what you feel, set the date and let the postcard wait patiently."
          className="mb-16"
        />
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-sm border border-gray-100 group">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[8rem] font-serif text-white/80 leading-none drop-shadow-xl">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl mb-2 text-brand-text">
                  {idx === 0 ? "Choose the " : idx === 1 ? "Write your " : "Let it arrive "}
                  <span className="font-bold text-brand-dark">
                    {idx === 0 ? "moment" : idx === 1 ? "message" : "naturally"}
                  </span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
