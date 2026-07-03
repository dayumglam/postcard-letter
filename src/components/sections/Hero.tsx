import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SectionTitle, Highlight } from '../common/SectionTitle';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="about">
      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative">
          <SectionTitle 
            title={
              <>
                Messages that wait for the <Highlight>right moment.</Highlight>
              </>
            }
            subtitle="A quiet way to send meaningful postcards, meant to be opened only when the moment feels right."
            className="mb-10"
          />
          <Button className="mb-20">
            Create a postcard &rarr;
          </Button>
          
          {/* Postcard Mockup */}
          <div className="relative w-full max-w-3xl mx-auto aspect-[16/10] bg-white rounded-[2rem] shadow-card border-8 border-brand-green/20 p-8 md:p-12 text-left transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="absolute top-8 right-8">
               <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green border-dashed flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-brand-green"></div>
               </div>
               <div className="flex gap-1 mt-2 justify-end">
                 {[1,2,3,4].map(i => <div key={i} className="w-8 h-px bg-brand-green rotate-[-15deg]"></div>)}
               </div>
            </div>
            
            <h3 className="font-serif text-4xl mb-8">Postcard</h3>
            
            <div className="grid grid-cols-2 gap-12 h-full pb-8">
              <div className="space-y-4">
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded w-2/3"></div>
              </div>
              <div className="space-y-6 pt-12 border-l-2 border-gray-100 pl-12">
                <div className="border-b-2 border-gray-100 pb-2 flex gap-4">
                  <span className="text-gray-400 text-sm">To:</span>
                  <span className="font-serif">Someone Special</span>
                </div>
                <div className="border-b-2 border-gray-100 pb-2 flex gap-4">
                  <span className="text-gray-400 text-sm">Open:</span>
                  <span className="font-serif">July 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Background Grass Mockup */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#5a8b36] to-transparent opacity-20"></div>
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80" 
          alt="Grassy hills" 
          className="w-full h-full object-cover rounded-t-[50%] mask-image-gradient"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)' }}
        />
      </div>
    </section>
  );
}
