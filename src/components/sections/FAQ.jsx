import { useState } from 'react';
import { faqs } from '../../data/content';
import { Plus, ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#fdfdfd] py-24 px-8 md:px-16" id="faq">
      {/* Section Header */}
      <div className="relative w-full max-w-[672px] mx-auto flex flex-col gap-4 items-center text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#18181b]">
          Frequently Asked Questions
        </h2>
        <p className="font-sans text-lg md:text-xl leading-relaxed text-[#71717a]">
          You write what your feel, set it aside and let the postcard wait patiently.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="flex flex-wrap gap-3 max-w-6xl mx-auto">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className="w-full md:w-[calc(50%-6px)] transition-all duration-300"
          >
            {openIndex === idx ? (
              // Expanded FAQ Item
              <div className="flex flex-col gap-1 rounded-2xl">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="bg-white border border-[#f4f4f5] rounded-2xl px-6 py-6 flex items-center justify-between hover:border-gray-200 transition-colors text-left w-full"
                >
                  <span className="font-medium text-lg md:text-xl leading-relaxed text-[#101213]">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-600 flex-shrink-0 ml-4" />
                </button>
                
                <div className="bg-white border border-[#f4f4f5] rounded-2xl px-6 py-6">
                  <div className="w-full">
                    <p className="font-medium text-base leading-relaxed text-[#101213] mb-3">
                      What you'll do:
                    </p>
                    <ul className="text-[#71717a] text-base leading-relaxed space-y-1 list-disc ml-6">
                      <li>Design wireframes, user flows, and high-fidelity mockups.</li>
                      <li>Conduct user research and translate findings into design improvements.</li>
                      <li>Work closely with developers to bring designs to life.</li>
                      <li>Ensure consistency across brand visuals and digital products.</li>
                      <li>Iterate designs based on testing and feedback.</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              // Collapsed FAQ Item
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full bg-white border border-[#f4f4f5] rounded-2xl px-6 py-6 flex items-center justify-between hover:border-gray-200 transition-colors text-left"
              >
                <span className="font-medium text-lg md:text-xl leading-relaxed text-[#101213]">
                  {faq.question}
                </span>
                <Plus className="w-4 h-4 text-gray-600 flex-shrink-0 ml-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
