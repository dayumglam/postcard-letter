import { Container } from '../common/Container';
import { SectionTitle, Highlight } from '../common/SectionTitle';
import { features } from '../../data/content';

export function Features() {
  return (
    <section className="py-24 bg-white relative z-10" id="feature">
      <Container>
        <SectionTitle 
          title={
            <>
              A different way to send a <Highlight>message</Highlight>
            </>
          }
          subtitle="Every postcard is a quiet gift—the moment you choose comes around, guaranteed to arrive. A message that waits is worth the wait."
          className="mb-20"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 flex gap-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
            >
              <div className={`w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center ${feature.color}`}>
                <feature.icon className="w-8 h-8 text-brand-dark/80" strokeWidth={1.5} />
              </div>
              <div className="pt-2">
                <h3 className="font-serif text-2xl mb-3 text-brand-dark tracking-wide">{feature.name}</h3>
                <p className="text-brand-textLight leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
