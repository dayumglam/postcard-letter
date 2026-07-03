import { useState } from 'react';
import { Container } from '../common/Container';
import { SectionTitle, Highlight } from '../common/SectionTitle';
import { faqs } from '../../data/content';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-bg" id="faq">
      <Container>
        <SectionTitle 
          title={
            <>
              Frequently Asked <Highlight>Questions</Highlight>
            </>
          }
          subtitle="You write what you feel, set the date and let the postcard wait patiently."
          className="mb-16"
        />
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-colors duration-300 ${openIndex === idx ? 'border-brand-dark shadow-sm' : 'border-gray-100 hover:border-gray-300'}`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded-2xl"
                aria-expanded={openIndex === idx}
              >
                <span className="font-serif text-xl pr-8 text-brand-dark font-medium">{faq.question}</span>
                <span className="shrink-0 text-brand-textLight">
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-8 pb-8 text-brand-textLight leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
