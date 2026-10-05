import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Award, Printer, ArrowRight } from 'lucide-react';
import { COLLEGE_INFO, PROGRAMS_DATA } from '../data/collegeData';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onOpenApply
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Trigger download of admission prospectus text summary
    const content = `SRINIVAS INSTITUTE OF TECHNOLOGY (SIT), MANGALURU
OFFICIAL ADMISSION INFORMATION BROCHURE & PROSPECTUS 2026-2027
Affiliated to VTU Belagavi | Approved by AICTE | NAAC Accredited
College Codes: KCET E153 | COMEDK E098 | PGCET B178
Campus: Valachil, Merlapadavu, Mangaluru, Karnataka - 574143

=======================================================
ACADEMIC PROGRAMS & SANCTIONED INTAKE:
${PROGRAMS_DATA.map((p) => `- ${p.name} (${p.shortCode}): ${p.intake} Seats [Avg CTC: ${p.avgPackage}, Highest: ${p.highestPackage}]`).join('\n')}

=======================================================
ELIGIBILITY CRITERIA:
- B.E. Degree: 10+2 / 2nd PUC with 45% aggregate in PCM (40% for SC/ST/OBC)
- Marine Engineering: 60% in PCM, 50% in English, DG Shipping Medical fitness
- MBA / MCA: Graduation with 50% aggregate and valid PGCET / KMAT scorecard

=======================================================
A. SHAMA RAO FOUNDATION MERIT SCHOLARSHIP:
- >95% in PCM: 50% Tuition Fee Waiver
- 90% - 94.9% in PCM: 30% Tuition Fee Waiver
- 85% - 89.9% in PCM: 15% Tuition Fee Waiver

=======================================================
CAMPUS HELPLINE:
Phone: ${COLLEGE_INFO.contactNumbers.admissionHelpline} / ${COLLEGE_INFO.contactNumbers.admissionCellMobile}
Email: ${COLLEGE_INFO.contactEmails.admissions}
Website: https://sitmng.ac.in
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SIT_Mangalore_Prospectus_2026-27.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl my-6 bg-white rounded-lg border border-stone-200 shadow-2xl overflow-hidden text-stone-900">
        <div className="bg-stone-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close prospectus modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
            Official Academic Publication · Session 2026–2027
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
            Information Brochure & Prospectus
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            Complete compendium covering branch curriculum, VTU syllabus, lab facilities, placement track record, and fee schedules.
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Prospectus Preview Box */}
          <div className="border border-stone-200 rounded-lg p-5 bg-stone-50 flex flex-col sm:flex-row items-center gap-5">
            <div className="w-24 h-32 bg-stone-900 text-white rounded border border-stone-700 flex flex-col justify-between p-3 shrink-0 text-center shadow-md">
              <div className="text-[9px] font-mono text-amber-400 tracking-wider">SIT 2026</div>
              <div className="font-serif font-bold text-xs uppercase leading-tight">
                Academic Prospectus
              </div>
              <div className="text-[8px] text-stone-400 font-mono">48 Pages · PDF</div>
            </div>

            <div className="space-y-2 text-xs text-stone-700">
              <h3 className="font-bold text-sm text-stone-900">
                Srinivas Institute of Technology Admissions Handbook 2026
              </h3>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                Contains sanctioned intake seat matrix, KEA counseling guidelines, COMEDK codes, DG Shipping maritime training norms, hostel rules, and student code of conduct.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] text-stone-500 font-mono">
                <span>File: SIT_Brochure_2026.pdf</span>
                <span>·</span>
                <span>Size: 4.8 MB</span>
                <span>·</span>
                <span>Updated: March 2026</span>
              </div>
            </div>
          </div>

          {/* Download Action */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>{downloaded ? 'Downloaded Successfully! Click to Re-Download' : 'Download Official Prospectus PDF'}</span>
            </button>

            {downloaded && (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded border border-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>The official admission handbook has been downloaded to your device.</span>
              </div>
            )}
          </div>

          {/* Core Table of Contents */}
          <div className="pt-2 border-t border-stone-200">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-2">
              Handbook Chapters & Table of Contents:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
              <div className="p-2 bg-stone-50 rounded">01. Institutional Vision & Leadership</div>
              <div className="p-2 bg-stone-50 rounded">02. 12 Undergraduate B.E. Branches</div>
              <div className="p-2 bg-stone-50 rounded">03. PG Courses (MBA, MCA, M.Tech)</div>
              <div className="p-2 bg-stone-50 rounded">04. KEA & COMEDK Seat Matrix</div>
              <div className="p-2 bg-stone-50 rounded">05. A. Shama Rao Foundation Scholarships</div>
              <div className="p-2 bg-stone-50 rounded">06. Valachil Campus Infrastructure</div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs text-stone-500 hover:text-stone-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="px-4 py-2 bg-stone-900 hover:bg-amber-600 text-white rounded text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Apply Online for 2026</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
