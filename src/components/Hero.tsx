import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, Award, Building, Compass, Sparkles } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface HeroProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  onOpenProspectus: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenApply,
  onOpenTour,
  onOpenProspectus
}) => {
  return (
    <section id="hero" className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background Campus Image with Measured Scrim */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/hero_sit_campus_1791215892692.jpg"
          alt="Srinivas Institute of Technology scenic campus at Valachil Mangaluru"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.15),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Trust Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-300 tracking-wide mb-4">
            <span>Admissions Open 2026–2027</span>
            <span aria-hidden="true" className="text-amber-500/50">·</span>
            <span>KCET Code: {COLLEGE_INFO.kcetCode}</span>
            <span aria-hidden="true" className="text-amber-500/50">·</span>
            <span>COMEDK Code: {COLLEGE_INFO.comedkCode}</span>
            <span aria-hidden="true" className="text-amber-500/50">·</span>
            <span>NAAC Accredited</span>
          </div>

          {/* Institutional Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6 text-balance">
            Shape Tomorrow's Technological Frontiers in Coastal Karnataka.
          </h1>

          <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Srinivas Institute of Technology (SIT), Mangaluru nurtures global engineers, data pioneers, and maritime commanders on a serene 40-acre hilltop campus. Offering cutting-edge B.E., M.Tech, MBA, and MCA degrees affiliated with VTU Belagavi.
          </p>

          {/* Key Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={onOpenApply}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-sm rounded shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>Start Online Admission 2026</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#fee-calculator"
              className="px-5 py-3.5 bg-stone-800/90 hover:bg-stone-800 text-white font-medium text-sm rounded border border-stone-700 hover:border-stone-600 transition-colors flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Fee & Scholarship Calculator</span>
            </a>

            <button
              onClick={onOpenTour}
              className="px-4 py-3.5 text-stone-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Virtual Tour</span>
            </button>
          </div>

          {/* Key Checklist Badges */}
          <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct Management Seats</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Lateral Entry (Diploma to 2nd Yr)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>50% Merit Scholarships</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full DG Shipping Marine Training</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative Institutional Proof Strip */}
      <div className="bg-stone-950 border-t border-stone-800 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-200">
          <div className="border-l-2 border-amber-500 pl-4">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">₹42.0 LPA</div>
            <div className="text-xs text-stone-400 mt-1">Highest Placement Package</div>
          </div>
          <div className="border-l-2 border-emerald-500 pl-4">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">92.4%</div>
            <div className="text-xs text-stone-400 mt-1">Placement Conversion (TAP Cell)</div>
          </div>
          <div className="border-l-2 border-sky-500 pl-4">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">14+</div>
            <div className="text-xs text-stone-400 mt-1">UG, PG & Doctoral Programs</div>
          </div>
          <div className="border-l-2 border-purple-500 pl-4">
            <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">40 Acres</div>
            <div className="text-xs text-stone-400 mt-1">Scenic Hilltop Campus, Valachil</div>
          </div>
        </div>
      </div>
    </section>
  );
};
