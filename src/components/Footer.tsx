import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Compass, FileText } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface FooterProps {
  onOpenApply: () => void;
  onOpenEnquiry: () => void;
  onOpenTracker: () => void;
  onOpenProspectus: () => void;
  onOpenTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenEnquiry,
  onOpenTracker,
  onOpenProspectus,
  onOpenTour
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 font-sans border-t border-stone-800 text-xs">
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Institutional Identity (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-stone-900 text-amber-400 flex items-center justify-center font-serif font-bold text-lg border border-amber-500/30">
                SIT
              </div>
              <div>
                <div className="text-base font-serif font-bold text-white tracking-tight">
                  Srinivas Institute of Technology
                </div>
                <div className="text-[11px] text-stone-400">
                  A. Shama Rao Foundation · Estd. 2006 · Mangaluru
                </div>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed text-xs max-w-sm">
              Approved by AICTE, New Delhi and affiliated with Visvesvaraya Technological University (VTU), Belagavi. Accredited with Grade 'A' by NAAC. Dedicated to producing technically sound and ethically committed engineering leaders.
            </p>

            <div className="pt-2 text-[11px] font-mono text-amber-400 space-y-1">
              <div>KCET Counseling Code: <strong>{COLLEGE_INFO.kcetCode}</strong></div>
              <div>COMEDK All-India Code: <strong>{COLLEGE_INFO.comedkCode}</strong></div>
              <div>PGCET Code (MBA & MCA): <strong>{COLLEGE_INFO.pgcetCode}</strong></div>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Undergraduate B.E.
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="#programs" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Computer Science & Engg</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Cyber Security</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Marine Engineering (DG)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Aeronautical Engineering</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Electronics & Comm (ECE)</a></li>
            </ul>
          </div>

          {/* Col 3: Admissions & Portals */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Admissions 2026
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={onOpenApply} className="hover:text-white transition-colors cursor-pointer text-left">
                  Apply Online 2026-27
                </button>
              </li>
              <li>
                <button onClick={onOpenTracker} className="hover:text-white transition-colors cursor-pointer text-left text-amber-400 font-medium">
                  Track Application Status
                </button>
              </li>
              <li>
                <a href="#fee-calculator" className="hover:text-white transition-colors">
                  Fee & Scholarship Tool
                </a>
              </li>
              <li>
                <a href="#cutoffs" className="hover:text-white transition-colors">
                  Cutoffs & Closing Ranks
                </a>
              </li>
              <li>
                <button onClick={onOpenProspectus} className="hover:text-white transition-colors cursor-pointer text-left">
                  Download Prospectus PDF
                </button>
              </li>
              <li>
                <button onClick={onOpenTour} className="hover:text-white transition-colors cursor-pointer text-left">
                  Virtual Campus Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Valachil Campus Desk
            </h4>
            <div className="space-y-3 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-[11px]">
                  Srinivas Campus, Valachil, Merlapadavu, Arkula, Mangaluru - 574143, Karnataka
                </address>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{COLLEGE_INFO.contactNumbers.admissionHelpline}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COLLEGE_INFO.contactEmails.admissions}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded text-xs transition-colors cursor-pointer"
                >
                  Contact Admissions Cell
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Recognition Strip */}
      <div className="bg-black/80 py-6 border-t border-stone-900 text-stone-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Srinivas Institute of Technology (SIT), Mangaluru · A. Shama Rao Foundation. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>VTU Belagavi Affiliated</span>
            <span>·</span>
            <span>AICTE Approved</span>
            <span>·</span>
            <span>NAAC Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
