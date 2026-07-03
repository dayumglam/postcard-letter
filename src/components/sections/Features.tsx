import { Container } from '../common/Container';
import { SectionTitle, Highlight } from '../common/SectionTitle';
import { features } from '../../data/content';

export function Features() {
  return (
    <section className="py-24 bg-brand-bg relative z-10" id="feature">
      <Container>
        <SectionTitle 
          title={
            <>
              A different way to send a <Highlight>message</Highlight>
            </>
          }
          subtitle="Every postcard is a quiet gift—the moment you choose comes around, guaranteed to arrive. A message that waits is worth the wait."
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.name} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-card transition-shadow duration-300"
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${feature.color}`}>
                <feature.icon className="w-8 h-8 text-brand-dark/80" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">{feature.name}</h3>
                <p className="text-brand-textLight leading-relaxed">
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
