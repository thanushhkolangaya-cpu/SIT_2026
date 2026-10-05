import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertTriangle, FileText, ArrowRight, X, Building, Phone } from 'lucide-react';
import { ApplicationRecord } from '../types';
import { COLLEGE_INFO, PROGRAMS_DATA } from '../data/collegeData';

interface StatusTrackerProps {
  isOpen: boolean;
  onClose: () => void;
  applications: ApplicationRecord[];
  initialSearchId?: string;
}

export const StatusTracker: React.FC<StatusTrackerProps> = ({
  isOpen,
  onClose,
  applications,
  initialSearchId = ''
}) => {
  const [searchId, setSearchId] = useState(initialSearchId);
  const [searchedRecord, setSearchedRecord] = useState<ApplicationRecord | null>(
    () => applications.find((a) => a.applicationId.toLowerCase() === initialSearchId.toLowerCase()) || null
  );
  const [searchError, setSearchError] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e?: React.FormEvent, customId?: string) => {
    if (e) e.preventDefault();
    const idToSearch = (customId || searchId).trim().toUpperCase();

    const found = applications.find(
      (a) => a.applicationId.toUpperCase() === idToSearch || a.phone === idToSearch
    );

    if (found) {
      setSearchedRecord(found);
      setSearchError(false);
    } else {
      setSearchedRecord(null);
      setSearchError(true);
    }
  };

  const getStepStatus = (
    currentStatus: ApplicationRecord['status'],
    stepName: 'SUBMITTED' | 'VERIFICATION_PENDING' | 'MERIT_EVALUATED' | 'PROVISIONAL_SEAT_OFFERED' | 'CONFIRMED'
  ) => {
    const order = ['SUBMITTED', 'VERIFICATION_PENDING', 'MERIT_EVALUATED', 'PROVISIONAL_SEAT_OFFERED', 'CONFIRMED'];
    const currentIndex = order.indexOf(currentStatus);
    const stepIndex = order.indexOf(stepName);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'upcoming';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl my-6 bg-white rounded-lg border border-stone-200 shadow-2xl overflow-hidden text-stone-900">
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close tracker"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
            Real-Time Admission Desk · SIT Mangalore
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
            Application Status & Seat Allotment Tracker
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            Check the live verification progress of your online degree application for Academic Year 2026–2027.
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Search Bar */}
          <form onSubmit={(e) => handleSearch(e)} className="space-y-2">
            <label className="block text-xs font-semibold text-stone-700">
              Enter Application Number (e.g. SIT-2026-8491) or Registered Phone Number:
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="SIT-2026-XXXX or 10-digit mobile"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono uppercase focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded cursor-pointer transition-colors"
              >
                Track Status
              </button>
            </div>

            {/* Quick Demo Preloads */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs text-stone-500">
              <span className="text-[11px] font-medium text-stone-400">Quick Test Records:</span>
              {applications.slice(0, 3).map((app) => (
                <button
                  key={app.applicationId}
                  type="button"
                  onClick={() => {
                    setSearchId(app.applicationId);
                    handleSearch(undefined, app.applicationId);
                  }}
                  className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-mono text-[11px] rounded border border-stone-200 transition-colors cursor-pointer"
                >
                  {app.applicationId} ({app.candidateName.split(' ')[0]})
                </button>
              ))}
            </div>
          </form>

          {/* Error notice */}
          {searchError && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Application Not Found</strong>
                <span>
                  No matching record found for "{searchId}". Please ensure the application ID is typed correctly, or contact the SIT Admission Desk at {COLLEGE_INFO.contactNumbers.admissionHelpline}.
                </span>
              </div>
            </div>
          )}

          {/* Result Card */}
          {searchedRecord && (
            <div className="space-y-6 pt-2">
              {/* Status Header Badge */}
              <div className="bg-stone-50 p-5 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-base font-bold text-amber-900">
                      {searchedRecord.applicationId}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-xs text-stone-500 font-mono">
                      Submitted on {searchedRecord.submissionDate}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">
                    {searchedRecord.candidateName}
                  </h3>
                  <div className="text-xs text-stone-600 mt-0.5">
                    Quota: <strong>{searchedRecord.quota}</strong> · PCM: <strong className="font-mono text-emerald-800">{searchedRecord.pcmPercentage}%</strong>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-[10px] text-stone-400 uppercase font-semibold">Current State</div>
                  <div className="inline-block mt-0.5 px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded border border-amber-300">
                    {searchedRecord.status.replace(/_/g, ' ')}
                  </div>
                </div>
              </div>

              {/* Progress Rail (5 Stages) */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-3">
                  Verification Lifecycle
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                  {[
                    { key: 'SUBMITTED', title: '1. Submitted', desc: 'Online portal' },
                    { key: 'VERIFICATION_PENDING', title: '2. Scrutiny', desc: 'Doc verification' },
                    { key: 'MERIT_EVALUATED', title: '3. Merit Rank', desc: 'Eligibility check' },
                    { key: 'PROVISIONAL_SEAT_OFFERED', title: '4. Seat Allotted', desc: 'Provisional offer' },
                    { key: 'CONFIRMED', title: '5. Enrolled', desc: 'Final seat locked' }
                  ].map((st) => {
                    const status = getStepStatus(searchedRecord.status, st.key as any);
                    return (
                      <div
                        key={st.key}
                        className={`p-3 rounded border transition-colors ${
                          status === 'completed'
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                            : status === 'active'
                            ? 'bg-amber-50 border-amber-300 text-amber-950 ring-1 ring-amber-400'
                            : 'bg-stone-50 border-stone-200 text-stone-400'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          {status === 'completed' ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          ) : status === 'active' ? (
                            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 animate-pulse" />
                          ) : (
                            <div className="w-3 h-3 rounded-full border border-stone-300 shrink-0" />
                          )}
                          <span className="truncate">{st.title}</span>
                        </div>
                        <div className="text-[11px] opacity-80">{st.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Allotment & Action Box */}
              <div className="p-4 bg-stone-100 rounded-lg border border-stone-200 text-xs text-stone-800 space-y-2">
                <div className="font-bold text-stone-900 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-amber-700" />
                  <span>Branch Allocation Status:</span>
                </div>
                <div className="text-stone-700">
                  {searchedRecord.provisionalBranch ? (
                    <span className="text-emerald-800 font-bold text-sm block">
                      Allotted: {searchedRecord.provisionalBranch}
                    </span>
                  ) : (
                    <span>
                      Under evaluation against 1st Choice:{' '}
                      <strong>
                        {PROGRAMS_DATA.find((p) => p.id === searchedRecord.programFirstChoice)?.name}
                      </strong>
                    </span>
                  )}
                </div>

                {searchedRecord.remarks && (
                  <div className="pt-2 border-t border-stone-200 text-stone-600 italic">
                    Note: "{searchedRecord.remarks}"
                  </div>
                )}
              </div>

              {/* Help & Reporting */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600 pt-2 border-t border-stone-200">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-stone-400" />
                  <span>Admission Cell Help: <strong className="font-mono">{COLLEGE_INFO.contactNumbers.admissionCellMobile}</strong></span>
                </div>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold rounded transition-colors cursor-pointer"
                >
                  Print Status Summary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
