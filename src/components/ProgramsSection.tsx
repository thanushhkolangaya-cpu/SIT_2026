import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Eye, Sparkles, Cpu, Compass, Users } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/collegeData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onApplyForProgram: (programId: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onApplyForProgram
}) => {
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'AI_COMPUTING' | 'CORE_TECH' | 'PG'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = useMemo(() => {
    return PROGRAMS_DATA.filter((prog) => {
      // Category filter
      const isComputing = ['ai-ml', 'cse', 'data-science', 'cyber-security'].includes(prog.id);
      const isCore = ['ece', 'aeronautical', 'marine', 'mechanical', 'nano-technology'].includes(prog.id);
      const isPg = ['mba', 'mca', 'mtech-robotics'].includes(prog.id);

      if (filterCategory === 'AI_COMPUTING' && !isComputing) return false;
      if (filterCategory === 'CORE_TECH' && !isCore) return false;
      if (filterCategory === 'PG' && !isPg) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          prog.name.toLowerCase().includes(q) ||
          prog.shortCode.toLowerCase().includes(q) ||
          prog.department.toLowerCase().includes(q) ||
          prog.specializations.some((s) => s.toLowerCase().includes(q))
        );
      }

      return true;
    });
  }, [filterCategory, searchQuery]);

  return (
    <section id="programs" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
              Academic Programs · Admissions 2026–27
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              Disciplines Engineered for the Modern World
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              From Artificial Intelligence and Cyber Security to DG-Shipping Marine Engineering, explore industry-accredited degree programs.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search branch or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-stone-300 rounded shadow-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-stone-900 placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Filter Segmented Controls (allowed interactive buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg max-w-fit mb-10 border border-stone-300/60">
          <button
            onClick={() => setFilterCategory('ALL')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              filterCategory === 'ALL'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            All Programs ({PROGRAMS_DATA.length})
          </button>
          <button
            onClick={() => setFilterCategory('AI_COMPUTING')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              filterCategory === 'AI_COMPUTING'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            AI, Computing & Data
          </button>
          <button
            onClick={() => setFilterCategory('CORE_TECH')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              filterCategory === 'CORE_TECH'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            Marine, Aero & Core Engineering
          </button>
          <button
            onClick={() => setFilterCategory('PG')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              filterCategory === 'PG'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            Postgraduate (MBA, MCA, M.Tech)
          </button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-stone-300 transition-all group"
            >
              <div>
                {/* Unboxed Metadata Header (Zero-Pill discipline) */}
                <div className="flex items-center justify-between text-xs text-stone-500 font-sans mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-amber-700 uppercase tracking-wider">
                      {program.level === 'BE' ? 'B.E. Degree' : 'PG Degree'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{program.intake} Seats</span>
                  </div>
                  <span className="font-mono text-stone-400">{program.kcetCode.split(' ')[0]}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-stone-900 tracking-tight mb-2 group-hover:text-amber-800 transition-colors">
                  {program.name}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Key Specializations */}
                <div className="space-y-1.5 pt-3 border-t border-stone-100 mb-5">
                  <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                    Core Specializations:
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-stone-700">
                    {program.specializations.slice(0, 3).map((spec, i) => (
                      <span key={i} className="after:content-['·'] last:after:content-[''] after:ml-2 text-stone-600">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {/* Metric Strip */}
                <div className="bg-stone-50 p-3 rounded border border-stone-200/80 mb-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-stone-500 block text-[10px] uppercase">Avg Package</span>
                    <span className="font-mono font-bold text-stone-900">{program.avgPackage}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-stone-500 block text-[10px] uppercase">Highest Package</span>
                    <span className="font-mono font-bold text-amber-700">{program.highestPackage}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-500" />
                    <span>View Syllabus</span>
                  </button>
                  <button
                    onClick={() => onApplyForProgram(program.id)}
                    className="py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-amber-600 rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-stone-200 p-8">
            <p className="text-stone-500 text-sm">No programs matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterCategory('ALL');
              }}
              className="mt-3 text-xs text-amber-700 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
