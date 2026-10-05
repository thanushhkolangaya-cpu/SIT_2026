import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { FAQ_DATA, COLLEGE_INFO } from '../data/collegeData';

interface FaqSectionProps {
  onOpenEnquiry: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Clear Answers for Parents & Students
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Frequently Asked Admission Questions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Essential information regarding counseling codes, scholarships, entrance examinations, and residential campus living.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-stone-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-stone-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Help Card */}
        <div className="mt-10 p-6 bg-stone-900 text-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-base text-white">
              Still have a specific query regarding admissions?
            </h4>
            <p className="text-xs text-stone-400 mt-0.5">
              Speak directly with an Admission Officer at the SIT Valachil campus.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-xs rounded transition-colors cursor-pointer"
            >
              Request Call Back
            </button>
            <a
              href={`https://wa.me/919448597543?text=Hi%20SIT%20Mangalore,%20I%20have%20an%20admission%20enquiry%20for%202026-27`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 bg-stone-800 hover:bg-stone-700 text-emerald-400 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
