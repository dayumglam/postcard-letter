import { useState } from 'react';
import { faqs } from '../../data/content';
import { Plus, Minus, ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#fdfdfd] py-[100px] px-[138px]" id="faq">
      {/* Section Header */}
      <div className="relative w-[672px] mx-auto flex flex-col gap-4 items-center text-center mb-20 tracking-[-0.5px]">
        <h2 className="font-serif text-[56px] leading-[64px] text-[#18181b]">
          Frequently Asked Questions
        </h2>
        <p className="font-sans text-[20px] leading-7 text-[#71717a]">
          You write what your feel, set it aside and let the postcard wait patiently.
        </p>

        {/* Decorative underline */}
        <div className="absolute right-[-355px] top-[95px] w-[203px] h-[74px]">
          <svg viewBox="0 0 203 74" className="w-full h-full">
            <path 
              d="M 10 37 Q 101.5 10, 193 37" 
              stroke="#18181b" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="flex flex-wrap gap-3 max-w-full">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className={`${
              openIndex === idx ? 'w-[576px]' : 'w-[576px]'
            } transition-all duration-300`}
          >
            {openIndex === idx ? (
              // Expanded FAQ Item
              <div className="flex flex-col gap-1 rounded-2xl">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="bg-white border border-[#f4f4f5] rounded-2xl px-6 py-6 flex items-center justify-between hover:border-gray-200 transition-colors"
                >
                  <span className="font-medium text-[20px] leading-7 text-[#101213]">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </button>
                
                <div className="bg-white border border-[#f4f4f5] rounded-2xl px-6 py-6">
                  <div className="w-[510px]">
                    <p className="font-medium text-base leading-[1.4] text-[#101213] tracking-[-0.016px] mb-3">
                      What you'll do:
                    </p>
                    <ul className="text-[#71717a] text-base leading-6 space-y-0 list-disc ml-6">
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
                className="w-full bg-white border border-[#f4f4f5] rounded-2xl px-6 py-6 flex items-center justify-between hover:border-gray-200 transition-colors"
              >
                <span className="font-medium text-[20px] leading-7 text-[#101213]">
                  {faq.question}
                </span>
                <Plus className="w-4 h-4 text-gray-600 flex-shrink-0" />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
