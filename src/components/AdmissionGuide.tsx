import React, { useState } from 'react';
import { CheckCircle2, FileCheck, ArrowRight, HelpCircle, GraduationCap, ShieldCheck } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface AdmissionGuideProps {
  onOpenApply: () => void;
  onOpenEnquiry: () => void;
}

export const AdmissionGuide: React.FC<AdmissionGuideProps> = ({
  onOpenApply,
  onOpenEnquiry
}) => {
  const [activeTab, setActiveTab] = useState<'CHANNELS' | 'DOCS' | 'STEPS'>('CHANNELS');

  return (
    <section id="admissions-guide" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Admissions Roadmap · Session 2026–2027
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Clear, Transparent Pathways to Your Degree
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Whether applying through Karnataka State CET, All-India COMEDK, or Direct Institutional Merit Quota, understand the prerequisites and verified documents.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-stone-200 mb-8">
          <button
            onClick={() => setActiveTab('CHANNELS')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'CHANNELS'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Admission Routes & Quotas
          </button>
          <button
            onClick={() => setActiveTab('STEPS')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'STEPS'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            5-Step Enrollment Roadmap
          </button>
          <button
            onClick={() => setActiveTab('DOCS')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'DOCS'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Mandatory Documents Checklist
          </button>
        </div>

        {/* Tab 1: Admission Channels */}
        {activeTab === 'CHANNELS' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* KCET Channel */}
            <div className="p-6 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-700 font-bold mb-1">
                  CODE: {COLLEGE_INFO.kcetCode}
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                  Karnataka CET (KEA)
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  For Karnataka domicile students through KEA centralized counseling. Subsidized government fee structure with category reservation benefits.
                </p>
                <div className="text-xs text-stone-700 space-y-1.5 pt-3 border-t border-stone-200">
                  <div className="font-semibold text-stone-900">Eligibility:</div>
                  <p>Min 45% in PCM (40% SC/ST/OBC) + Valid KCET Rank.</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500">
                Seat share: 45% of total intake
              </div>
            </div>

            {/* COMEDK Channel */}
            <div className="p-6 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-700 font-bold mb-1">
                  CODE: {COLLEGE_INFO.comedkCode}
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                  COMEDK UGET (All India)
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Open to all Indian national candidates from any state. Allotment conducted online through COMEDK centralized single-window counseling.
                </p>
                <div className="text-xs text-stone-700 space-y-1.5 pt-3 border-t border-stone-200">
                  <div className="font-semibold text-stone-900">Eligibility:</div>
                  <p>Min 45% in PCM aggregate + COMEDK UGET 2026 scorecard.</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500">
                Seat share: 30% of total intake
              </div>
            </div>

            {/* Management Quota */}
            <div className="p-6 rounded-lg bg-amber-50/50 border border-amber-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-800 font-bold mb-1">
                  DIRECT ADMISSION
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                  Management & NRI Quota
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed mb-4">
                  Direct merit-based admission on 10+2 / PUC marks or national exams (JEE Main / KEAM / KMAT). Guaranteed branch choice with spot allotment.
                </p>
                <div className="text-xs text-stone-800 space-y-1.5 pt-3 border-t border-amber-200/80">
                  <div className="font-semibold text-stone-900">Eligibility:</div>
                  <p>Min 45% in PCM (60% for Marine Engineering). Scholarship discounts apply.</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-200/80">
                <button
                  onClick={onOpenApply}
                  className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
                >
                  Apply Direct Merit
                </button>
              </div>
            </div>

            {/* Lateral Entry */}
            <div className="p-6 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-amber-700 font-bold mb-1">
                  DIRECT 2ND YEAR B.E.
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
                  Lateral Entry (Diploma)
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  For 3-year polytechnic diploma holders or B.Sc graduates seeking direct admission into the 3rd semester (2nd year) of B.E. courses.
                </p>
                <div className="text-xs text-stone-700 space-y-1.5 pt-3 border-t border-stone-200">
                  <div className="font-semibold text-stone-900">Eligibility:</div>
                  <p>Min 45% in Diploma final exams (40% for SC/ST/OBC) through DCET / Management.</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500">
                Available across CSE, AI-ML, ECE, Mech, Marine
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 5 Steps */}
        {activeTab === 'STEPS' && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Online Submission",
                desc: "Fill the online application form with candidate particulars and branch preferences."
              },
              {
                step: "02",
                title: "Merit Evaluation",
                desc: "Admission committee verifies 10th/12th scores and entrance exam credentials."
              },
              {
                step: "03",
                title: "Provisional Allotment",
                desc: "Receive provisional seat allotment letter and fee calculation breakdown."
              },
              {
                step: "04",
                title: "Document Verification",
                desc: "Submit original certificates at SIT Valachil campus or approved regional desk."
              },
              {
                step: "05",
                title: "Orientation & Induction",
                desc: "Hostel check-in, college ID issuance, and VTU Student Induction Program."
              }
            ].map((st, i) => (
              <div key={i} className="p-5 rounded bg-stone-50 border border-stone-200 relative">
                <span className="text-2xl font-serif font-bold text-amber-700/60 block mb-2 font-mono">
                  {st.step}
                </span>
                <h4 className="text-sm font-bold text-stone-900 mb-1.5">{st.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Documents Checklist */}
        {activeTab === 'DOCS' && (
          <div className="bg-stone-50 rounded-lg border border-stone-200 p-6 md:p-8">
            <h3 className="text-base font-serif font-bold text-stone-900 mb-4">
              Original Certificates Required at Time of Reporting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">SSLC / 10th Standard Marks Card</strong>
                    <p className="text-stone-500">For proof of date of birth and candidate identity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">2nd PUC / 10+2 Equivalent Marks Card</strong>
                    <p className="text-stone-500">Showing Physics, Mathematics, and elective subject marks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Transfer Certificate (TC) & Conduct Certificate</strong>
                    <p className="text-stone-500">Issued by the head of the institution last attended.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Entrance Scorecard / Hall Ticket</strong>
                    <p className="text-stone-500">KCET / COMEDK / PGCET / JEE Main rank card as applicable.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Migration Certificate</strong>
                    <p className="text-stone-500">Required for students from CBSE, ICSE, or outside Karnataka boards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Caste / Category & Income Certificate</strong>
                    <p className="text-stone-500">Valid Tahsildar certificate for Karnataka reserved categories.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">Passport Size Photos & Aadhar Copy</strong>
                    <p className="text-stone-500">6 recent passport color photos and student & parent Aadhar copies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900">DG Shipping Medical Certificate (Marine Engg Only)</strong>
                    <p className="text-stone-500">Fitness certificate issued by a DG Shipping approved medical doctor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick CTA strip */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 bg-stone-100 rounded-lg border border-stone-200">
          <div className="text-xs text-stone-700">
            Have questions regarding category verification or non-Karnataka quota eligibility?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="text-xs font-semibold text-stone-800 hover:text-amber-800 cursor-pointer"
            >
              Consult Admission Officer
            </button>
            <button
              onClick={onOpenApply}
              className="px-4 py-2 bg-stone-900 hover:bg-amber-600 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
            >
              Start Admission Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
