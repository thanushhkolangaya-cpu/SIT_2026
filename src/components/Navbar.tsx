import React, { useState } from 'react';
import { Phone, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenEnquiry: () => void;
  onOpenTracker: () => void;
  onOpenProspectus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApply,
  onOpenEnquiry,
  onOpenTracker,
  onOpenProspectus
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Institutional Operational Ribbon */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 md:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-3 text-stone-300">
            <span className="font-semibold text-amber-400">KCET Code: {COLLEGE_INFO.kcetCode}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="font-semibold text-amber-400">COMEDK: {COLLEGE_INFO.comedkCode}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="hidden sm:inline text-stone-400">VTU Affiliated & AICTE Approved</span>
            <span aria-hidden="true" className="hidden sm:inline text-stone-600">·</span>
            <span className="hidden md:inline text-emerald-400 font-medium">Admissions 2026–27 Open</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenProspectus}
              className="flex items-center gap-1 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Prospectus PDF</span>
            </button>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <a
              href={`tel:${COLLEGE_INFO.contactNumbers.admissionCellMobile.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono tabular-nums">{COLLEGE_INFO.contactNumbers.admissionCellMobile}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="flex items-center gap-3 text-stone-900 group">
          <div className="w-10 h-10 rounded bg-stone-900 text-amber-400 flex items-center justify-center font-serif font-bold text-lg border border-amber-500/30 shadow-xs">
            SIT
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-serif font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors leading-tight">
              Srinivas Institute of Technology
            </span>
            <span className="text-[11px] font-sans text-stone-500 tracking-wide">
              Valachil, Mangaluru · Estd. 2006
            </span>
          </div>
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          <a href="#programs" className="hover:text-amber-700 transition-colors">Programs</a>
          <a href="#admissions-guide" className="hover:text-amber-700 transition-colors">Admissions</a>
          <a href="#fee-calculator" className="hover:text-amber-700 transition-colors">Fee Calculator</a>
          <a href="#cutoffs" className="hover:text-amber-700 transition-colors">Cutoffs & Ranks</a>
          <a href="#placements" className="hover:text-amber-700 transition-colors">Placements</a>
          <a href="#campus-life" className="hover:text-amber-700 transition-colors">Campus</a>
          <button
            onClick={onOpenTracker}
            className="hover:text-amber-700 transition-colors cursor-pointer text-stone-700 font-medium"
          >
            Track Application
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenEnquiry}
            className="px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded border border-stone-300 transition-colors cursor-pointer"
          >
            Enquire Now
          </button>
          <button
            onClick={onOpenApply}
            className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Apply Online 2026</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-md border border-stone-200"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-stone-800 pb-3 border-b border-stone-100">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-stone-50 rounded"
            >
              Academic Programs (B.E, MBA, MCA)
            </a>
            <a
              href="#admissions-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-stone-50 rounded"
            >
              Eligibility & Admission Roadmap
            </a>
            <a
              href="#fee-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-stone-50 rounded"
            >
              Fee & Scholarship Calculator
            </a>
            <a
              href="#cutoffs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-stone-50 rounded"
            >
              KCET & COMEDK Cutoffs
            </a>
            <a
              href="#placements"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-stone-50 rounded"
            >
              Placements & Recruiter Records
            </a>
            <a
              href="#campus-life"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-stone-50 rounded"
            >
              Campus Life & Hostels
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="text-left px-2 py-1.5 hover:bg-stone-50 rounded text-amber-700 font-semibold"
            >
              Track Existing Application
            </button>
          </nav>
          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-amber-600 rounded"
            >
              Start Admission Application 2026
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-2 text-center text-sm font-medium text-stone-800 bg-stone-100 rounded border border-stone-200"
            >
              Request Call Back / Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
