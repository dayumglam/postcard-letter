import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SectionTitle, Highlight } from '../common/SectionTitle';

export function Hero() {
  return (
    <section className="relative pt-32 pb-0 overflow-hidden" id="about">
      <Container>
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto z-10 relative">
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
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] bg-white rounded-xl shadow-2xl overflow-hidden text-left z-20">
            {/* Striped border */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                border: '12px solid transparent',
                borderImage: 'repeating-linear-gradient(45deg, #86efac, #86efac 15px, white 15px, white 30px, #cbd5e1 30px, #cbd5e1 45px, white 45px, white 60px) 12',
              }}
            ></div>
            
            <div className="p-8 md:p-14 h-full flex flex-col justify-between relative z-10 bg-white m-3 rounded">
              <div className="flex justify-between items-start">
                <h3 className="font-sans text-5xl font-light tracking-tight text-gray-800">Postcard</h3>
                <div className="flex gap-4">
                  {/* Fake stamp */}
                  <div className="w-20 h-24 bg-green-50 border-2 border-green-200 border-dashed rounded relative flex items-center justify-center text-green-700 opacity-80">
                    <div className="w-12 h-12 rounded-full border-2 border-green-300"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-16 mt-8 h-full">
                {/* Left side lines */}
                <div className="space-y-6 pt-4">
                  <div className="border-b border-gray-300 pb-2"><span className="text-gray-400">Hey there,</span></div>
                  <div className="border-b border-gray-300 pb-2 text-transparent">line</div>
                  <div className="border-b border-gray-300 pb-2 text-transparent">line</div>
                  <div className="border-b border-gray-300 pb-2 text-transparent">line</div>
                </div>
                {/* Right side form */}
                <div className="space-y-8 pt-4 border-l border-gray-200 pl-12 flex flex-col justify-end pb-8">
                  <div className="border-b border-gray-300 pb-2 flex items-baseline gap-4">
                    <span className="text-gray-400 text-sm font-medium w-12">To:</span>
                    <span className="font-serif text-lg">Someone Special</span>
                  </div>
                  <div className="border-b border-gray-300 pb-2 flex items-baseline gap-4">
                    <span className="text-gray-400 text-sm font-medium w-12">From:</span>
                    <span className="font-serif text-lg">Me</span>
                  </div>
                  <div className="border-b border-gray-300 pb-2 flex items-baseline gap-4">
                    <span className="text-gray-400 text-sm font-medium w-12">Open:</span>
                    <span className="font-serif text-lg">July 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Background Grass Mockup - properly placed behind postcard */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] z-0 pointer-events-none -mt-40">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 bottom-0 h-32"></div>
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2000&q=80" 
          alt="Grassy hills" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Add extra padding at the bottom so it flows nicely into the next section */}
      <div className="h-24 bg-white relative z-10"></div>
    </section>
  );
}
