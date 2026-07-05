'use client';

import { useState } from 'react';
import { faqs } from '@/data/content';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafafa] py-20 px-8" id="faq">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-serif text-4xl leading-tight text-[#1a1a1a] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          You write what you feel, set it aside and let the postcard wait patiently.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
            >
              <span className="font-medium text-base text-[#1a1a1a] pr-4">
                {faq.question}
              </span>
              {openIndex === idx ? (
                <Minus className="w-4 h-4 text-gray-500 flex-shrink-0" />
              ) : (
                <Plus className="w-4 h-4 text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            {/* Answer */}
            {openIndex === idx && (
              <div className="px-5 pb-4 border-t border-gray-100">
                <div className="pt-3">
                  <p className="font-medium text-sm text-[#1a1a1a] mb-2">
                    What you'll do:
                  </p>
                  <ul className="text-gray-600 text-sm leading-relaxed space-y-1 list-disc ml-5">
                    <li>Design wireframes, user flows, and high-fidelity mockups.</li>
                    <li>Conduct user research and translate findings into design improvements.</li>
                    <li>Work closely with developers to bring designs to life.</li>
                    <li>Ensure consistency across brand visuals and digital products.</li>
                    <li>Iterate designs based on testing and feedback.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
