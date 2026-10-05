import React from 'react';
import { X, Check, Award, BookOpen, Layers, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { Program } from '../types';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onApplyForProgram: (programId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onApplyForProgram
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-stone-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs text-amber-400 font-medium mb-1 tracking-wider uppercase">
            {program.department} · {program.level === 'BE' ? 'Undergraduate B.E. / B.Tech' : 'Postgraduate Program'}
          </div>
          <h2 className="text-2xl font-serif font-bold text-white tracking-tight">
            {program.name} ({program.shortCode})
          </h2>

          <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4 text-xs text-stone-300 font-mono">
            <span>Duration: {program.duration}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Intake: {program.intake} Seats</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>KCET: {program.kcetCode}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>COMEDK: {program.comedkCode}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Program Overview
            </h3>
            <p className="text-stone-700 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-stone-50 p-4 rounded border border-stone-200">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Prescribed Admission Eligibility</span>
            </h3>
            <p className="text-stone-800 text-xs leading-relaxed font-sans">
              {program.eligibility}
            </p>
          </div>

          {/* Specializations & Labs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-stone-200 rounded p-4">
              <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-600" />
                Key Focus Areas
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {program.specializations.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-stone-200 rounded p-4">
              <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-600" />
                Department Research Labs
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {program.keyLabs.map((lab, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{lab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Curriculum Roadmap */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-stone-700" />
              Academic Syllabus Breakdown (VTU Autonomous Scheme)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.curriculumHighlights.map((curr, idx) => (
                <div key={idx} className="bg-stone-50 p-3 rounded border border-stone-200">
                  <div className="font-bold text-xs text-stone-900 mb-1.5 text-amber-800">
                    {curr.year}
                  </div>
                  <ul className="text-xs space-y-1 text-stone-600">
                    {curr.topics.map((t, tidx) => (
                      <li key={tidx} className="list-disc list-inside">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career & Placements */}
          <div className="border-t border-stone-200 pt-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs text-stone-500">Placement Benchmark</div>
              <div className="text-base font-bold text-stone-900">
                Avg: <span className="font-mono text-emerald-700">{program.avgPackage}</span> · Highest: <span className="font-mono text-amber-700">{program.highestPackage}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 text-xs text-stone-600">
              {program.careerProspects.map((career, cidx) => (
                <span key={cidx} className="px-2 py-0.5 bg-stone-100 rounded text-stone-700">
                  {career}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onClose();
              onApplyForProgram(program.id);
            }}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Apply for this Branch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
