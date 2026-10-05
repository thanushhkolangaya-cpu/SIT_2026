import React from 'react';
import { Printer, Download, CheckCircle, ArrowLeft, Building2 } from 'lucide-react';
import { ApplicationRecord } from '../types';
import { COLLEGE_INFO, PROGRAMS_DATA } from '../data/collegeData';

interface ApplicationReceiptProps {
  application: ApplicationRecord;
  onClose: () => void;
  onTrackApplication: (id: string) => void;
}

export const ApplicationReceipt: React.FC<ApplicationReceiptProps> = ({
  application,
  onClose,
  onTrackApplication
}) => {
  const firstChoiceProg = PROGRAMS_DATA.find((p) => p.id === application.programFirstChoice);
  const secondChoiceProg = PROGRAMS_DATA.find((p) => p.id === application.programSecondChoice);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-lg border border-stone-300 shadow-xl max-w-3xl mx-auto overflow-hidden text-stone-900 print:shadow-none print:border-none">
      {/* Top Action Bar (hidden when printed) */}
      <div className="bg-stone-900 text-white p-4 flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold text-sm">Application Successfully Submitted!</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-xs rounded flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
          <button
            onClick={() => onTrackApplication(application.applicationId)}
            className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white text-xs rounded transition-colors cursor-pointer"
          >
            Track Status
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white text-xs rounded transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>

      {/* Official Printable Slip */}
      <div className="p-8 sm:p-10 font-sans print:p-0">
        {/* Header Institution Lockup */}
        <div className="border-b-2 border-stone-800 pb-5 mb-6 text-center">
          <div className="text-xs font-semibold tracking-widest text-stone-500 uppercase">
            A. Shama Rao Foundation's
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-stone-900 mt-1 uppercase">
            Srinivas Institute of Technology
          </h1>
          <p className="text-xs text-stone-600 mt-1">
            Valachil, Merlapadavu, Mangaluru - 574143, Karnataka, India
          </p>
          <div className="text-[11px] text-stone-500 font-mono mt-1">
            Affiliated to VTU Belagavi · Approved by AICTE New Delhi · NAAC Accredited · KCET: {COLLEGE_INFO.kcetCode} · COMEDK: {COLLEGE_INFO.comedkCode}
          </div>
          <div className="mt-3 inline-block bg-stone-100 px-4 py-1 rounded border border-stone-300 text-xs font-bold tracking-wider uppercase text-stone-800">
            Provisional Admission Acknowledgement Slip (2026–2027)
          </div>
        </div>

        {/* Application ID & Date Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-stone-50 p-4 rounded border border-stone-200 mb-6 text-xs">
          <div>
            <span className="text-stone-500 block text-[10px] uppercase font-semibold">Application Number</span>
            <span className="font-mono text-base font-bold text-amber-900">
              {application.applicationId}
            </span>
          </div>
          <div>
            <span className="text-stone-500 block text-[10px] uppercase font-semibold">Submission Date</span>
            <span className="font-mono font-medium text-stone-900">
              {application.submissionDate}
            </span>
          </div>
          <div>
            <span className="text-stone-500 block text-[10px] uppercase font-semibold">Quota Applied</span>
            <span className="font-bold text-stone-900">
              {application.quota} QUOTA
            </span>
          </div>
        </div>

        {/* Candidate Details Grid */}
        <div className="space-y-6 text-xs">
          {/* Section 1 */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-stone-800 border-b border-stone-200 pb-1.5 mb-3 text-[11px]">
              1. Candidate Demographics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-stone-700">
              <div>
                <span className="text-stone-400 block text-[10px]">Full Name:</span>
                <span className="font-semibold text-stone-900">{application.candidateName}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Date of Birth:</span>
                <span className="font-mono">{application.dob}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Gender:</span>
                <span>{application.gender}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Contact Mobile:</span>
                <span className="font-mono">{application.phone}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Email Address:</span>
                <span className="font-mono">{application.email}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Category & Domicile:</span>
                <span>{application.category} ({application.domicile})</span>
              </div>
            </div>
          </div>

          {/* Section 2: Program Choice */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-stone-800 border-b border-stone-200 pb-1.5 mb-3 text-[11px]">
              2. Program Preferences
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-700">
              <div className="p-3 bg-stone-50 rounded border border-stone-200">
                <span className="text-[10px] uppercase text-stone-400 font-bold block">1st Priority Choice</span>
                <span className="font-bold text-stone-900">
                  {firstChoiceProg ? `${firstChoiceProg.name} (${firstChoiceProg.shortCode})` : application.programFirstChoice}
                </span>
                <span className="text-stone-500 block text-[11px] mt-0.5">
                  Dept: {firstChoiceProg?.department}
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded border border-stone-200">
                <span className="text-[10px] uppercase text-stone-400 font-bold block">2nd Priority Choice</span>
                <span className="font-bold text-stone-900">
                  {secondChoiceProg ? `${secondChoiceProg.name} (${secondChoiceProg.shortCode})` : application.programSecondChoice}
                </span>
                <span className="text-stone-500 block text-[11px] mt-0.5">
                  Dept: {secondChoiceProg?.department}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Academic Qualifications */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-stone-800 border-b border-stone-200 pb-1.5 mb-3 text-[11px]">
              3. Academic Qualifications & Entrance Scores
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-2.5 bg-stone-50 rounded border border-stone-200">
                <span className="text-stone-400 block text-[10px]">10th / SSLC Marks:</span>
                <span className="font-mono font-bold text-stone-900">{application.tenthPercentage}%</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded border border-stone-200">
                <span className="text-stone-400 block text-[10px]">12th / PUC PCM:</span>
                <span className="font-mono font-bold text-emerald-800 text-sm">{application.pcmPercentage}%</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded border border-stone-200">
                <span className="text-stone-400 block text-[10px]">Entrance Exam:</span>
                <span className="font-semibold text-stone-900">{application.entranceExam || 'N/A'}</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded border border-stone-200">
                <span className="text-stone-400 block text-[10px]">Rank / Score:</span>
                <span className="font-mono font-bold text-stone-900">{application.entranceRank || 'Direct Merit'}</span>
              </div>
            </div>
          </div>

          {/* Section 4: Parent / Address */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-stone-800 border-b border-stone-200 pb-1.5 mb-3 text-[11px]">
              4. Parent & Residential Information
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-stone-700">
              <div>
                <span className="text-stone-400 block text-[10px]">Parent / Guardian Name:</span>
                <span className="font-semibold">{application.parentName}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Parent Phone:</span>
                <span className="font-mono">{application.parentPhone}</span>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px]">Annual Income:</span>
                <span>{application.annualIncome}</span>
              </div>
              <div className="sm:col-span-3">
                <span className="text-stone-400 block text-[10px]">Permanent Address:</span>
                <span>{application.address}, {application.city}, {application.state} - {application.pincode}</span>
              </div>
            </div>
          </div>

          {/* Section 5: Facilities Opted */}
          <div className="p-3 bg-stone-50 rounded border border-stone-200 flex flex-wrap items-center justify-between text-xs">
            <div>
              <span className="font-bold text-stone-900">Hostel Accommodation: </span>
              <span>{application.hostelRequired ? 'Requested (On-Campus)' : 'Not Required (Day Scholar)'}</span>
            </div>
            <div>
              <span className="font-bold text-stone-900">College Bus Transport: </span>
              <span>{application.transportRequired ? `Opted (${application.busRoute || 'Assigned route'})` : 'Not Opted'}</span>
            </div>
          </div>
        </div>

        {/* Verification Seals & Signatures */}
        <div className="mt-10 pt-6 border-t-2 border-stone-800 grid grid-cols-2 gap-8 text-xs text-stone-600">
          <div>
            <div className="h-12 border-b border-dashed border-stone-400" />
            <span className="block mt-2 font-medium">Candidate / Parent Signature</span>
            <span className="text-[10px] text-stone-400">Date: {application.submissionDate}</span>
          </div>
          <div className="text-right">
            <div className="h-12 border-b border-dashed border-stone-400 flex items-end justify-end">
              <span className="font-mono text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                VERIFIED ADMISSIONS DESK · SIT MNG
              </span>
            </div>
            <span className="block mt-2 font-bold text-stone-900">Dean of Admissions</span>
            <span className="text-[10px] text-stone-400">Srinivas Institute of Technology, Mangaluru</span>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-3 bg-stone-100 rounded text-[11px] text-stone-600 leading-normal">
          <strong>Important Instructions:</strong> Please carry 2 printed copies of this acknowledgement along with original 10th & 12th marks cards, 6 passport photos, transfer certificate, and eligibility certificates for verification at the SIT Valachil campus admission counter within 10 days.
        </div>
      </div>
    </div>
  );
};
