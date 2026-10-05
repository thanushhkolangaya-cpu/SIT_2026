import React, { useState, useMemo } from 'react';
import { Calculator, Award, Printer, Check, Info, ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/collegeData';

interface FeeCalculatorProps {
  onApplyWithSelection: (data: { programId: string; quota: string; hostel: boolean; transport: boolean }) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ onApplyWithSelection }) => {
  const [selectedProgramId, setSelectedProgramId] = useState('ai-ml');
  const [quota, setQuota] = useState<'KCET' | 'COMEDK' | 'MANAGEMENT'>('MANAGEMENT');
  const [pcmPercentage, setPcmPercentage] = useState<number>(88);
  const [hostelType, setHostelType] = useState<'NONE' | 'NON_AC' | 'AC'>('NONE');
  const [transportType, setTransportType] = useState<'NONE' | 'LOCAL' | 'OUTSTATION'>('NONE');

  const selectedProgram = useMemo(() => {
    return PROGRAMS_DATA.find((p) => p.id === selectedProgramId) || PROGRAMS_DATA[0];
  }, [selectedProgramId]);

  // Fee calculation logic
  const calculation = useMemo(() => {
    let baseTuition = 0;

    if (quota === 'KCET') {
      baseTuition = 72000; // Govt subsidised KEA fee
    } else if (quota === 'COMEDK') {
      baseTuition = 195000; // COMEDK fixed tuition
    } else {
      // Management Quota varies by high-demand branches
      if (['ai-ml', 'cse', 'data-science', 'cyber-security'].includes(selectedProgram.id)) {
        baseTuition = 210000;
      } else if (selectedProgram.id === 'marine') {
        baseTuition = 240000; // Includes DG Shipping sea modules
      } else if (selectedProgram.id === 'mba') {
        baseTuition = 160000;
      } else if (selectedProgram.id === 'mca') {
        baseTuition = 140000;
      } else {
        baseTuition = 150000;
      }
    }

    // A. Shama Rao Foundation Merit Scholarship (applicable on Management & COMEDK tuition)
    let scholarshipPercent = 0;
    let scholarshipSchemeName = '';

    if (quota === 'MANAGEMENT' || quota === 'COMEDK') {
      if (pcmPercentage >= 95) {
        scholarshipPercent = 50;
        scholarshipSchemeName = "A. Shama Rao Memorial Platinum Scholarship (50% Tuition Waiver)";
      } else if (pcmPercentage >= 90) {
        scholarshipPercent = 30;
        scholarshipSchemeName = "Merit Star Scholarship (30% Tuition Waiver)";
      } else if (pcmPercentage >= 85) {
        scholarshipPercent = 15;
        scholarshipSchemeName = "Academic Excellence Scholarship (15% Tuition Waiver)";
      }
    }

    const scholarshipDeduction = Math.round((baseTuition * scholarshipPercent) / 100);
    const netTuition = baseTuition - scholarshipDeduction;

    // University, Exam, Lab, TAP Training & Library fees
    const universityAndLabFee = 28500;

    // Hostel calculation
    let hostelFee = 0;
    let hostelDesc = 'Not Selected (Day Scholar)';
    if (hostelType === 'NON_AC') {
      hostelFee = 82000;
      hostelDesc = 'Campus Hostel (2/3 Sharing, Mess & Wi-Fi)';
    } else if (hostelType === 'AC') {
      hostelFee = 115000;
      hostelDesc = 'Executive AC Hostel (Twin Sharing, Attached Bath)';
    }

    // Transport calculation
    let transportFee = 0;
    let transportDesc = 'Not Opted';
    if (transportType === 'LOCAL') {
      transportFee = 22000;
      transportDesc = 'College Bus (Mangaluru City / Surathkal / Pumpwell)';
    } else if (transportType === 'OUTSTATION') {
      transportFee = 28000;
      transportDesc = 'College Bus (Kasaragod / Udupi / Puttur / Bantwal)';
    }

    const totalFirstYear = netTuition + universityAndLabFee + hostelFee + transportFee;

    return {
      baseTuition,
      scholarshipPercent,
      scholarshipSchemeName,
      scholarshipDeduction,
      netTuition,
      universityAndLabFee,
      hostelFee,
      hostelDesc,
      transportFee,
      transportDesc,
      totalFirstYear
    };
  }, [selectedProgram, quota, pcmPercentage, hostelType, transportType]);

  const handlePrintEstimate = () => {
    window.print();
  };

  return (
    <section id="fee-calculator" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Cost Transparency · Session 2026–2027
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Interactive Fee & Merit Scholarship Estimator
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Estimate your net tuition, hostel, and bus fees. The calculator automatically integrates the <strong>A. Shama Rao Foundation Merit Scholarship</strong> based on your 12th/PUC percentage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-stone-200 shadow-xs space-y-6">
            {/* 1. Admission Quota */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                1. Select Admission Channel / Quota
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'MANAGEMENT', label: 'Management Merit Quota' },
                  { id: 'KCET', label: 'KCET Govt Quota (E153)' },
                  { id: 'COMEDK', label: 'COMEDK Quota (E098)' }
                ].map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setQuota(q.id as any)}
                    className={`py-2.5 px-3 rounded text-xs font-semibold text-center border transition-all cursor-pointer ${
                      quota === q.id
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Program Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                2. Intended Degree Program
              </label>
              <select
                value={selectedProgramId}
                onChange={(e) => setSelectedProgramId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                {PROGRAMS_DATA.map((prog) => (
                  <option key={prog.id} value={prog.id}>
                    {prog.name} ({prog.shortCode}) - Intake: {prog.intake} seats
                  </option>
                ))}
              </select>
            </div>

            {/* 3. PCM Percentage (Scholarship driver) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  3. 12th / 2nd PUC Aggregate Score (PCM %)
                </label>
                <span className="text-sm font-bold font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {pcmPercentage}%
                </span>
              </div>
              <input
                type="range"
                min="45"
                max="100"
                step="1"
                value={pcmPercentage}
                onChange={(e) => setPcmPercentage(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
                <span>45% (Minimum)</span>
                <span>85% (15% Off)</span>
                <span>90% (30% Off)</span>
                <span>95%+ (50% Off)</span>
              </div>
            </div>

            {/* 4. Hostel Requirement */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                4. On-Campus Residential Hostel
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'NONE', label: 'Day Scholar (No Hostel)' },
                  { id: 'NON_AC', label: 'Standard Mess (₹82k/yr)' },
                  { id: 'AC', label: 'AC Suite (₹1.15L/yr)' }
                ].map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => {
                      setHostelType(h.id as any);
                      if (h.id !== 'NONE') setTransportType('NONE');
                    }}
                    className={`py-2 px-2.5 rounded text-xs font-medium text-center border transition-all cursor-pointer ${
                      hostelType === h.id
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {h.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. College Bus Transport (for Day scholars) */}
            {hostelType === 'NONE' && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  5. Daily College Bus Route (Optional)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'NONE', label: 'Own Commute' },
                    { id: 'LOCAL', label: 'City / Surathkal (₹22k)' },
                    { id: 'OUTSTATION', label: 'Kasaragod / Udupi (₹28k)' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTransportType(t.id as any)}
                      className={`py-2 px-2.5 rounded text-xs font-medium text-center border transition-all cursor-pointer ${
                        transportType === t.id
                          ? 'bg-stone-900 text-white border-stone-900'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Statement / Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-lg border border-stone-300 shadow-sm relative">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-1">
              Estimated Statement (Academic Year 1)
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 pb-3 border-b border-stone-200">
              Fee Estimate Summary
            </h3>

            {/* Active Program Badge */}
            <div className="bg-stone-50 p-3 rounded border border-stone-200 mb-5 text-xs">
              <div className="font-bold text-stone-900">{selectedProgram.name}</div>
              <div className="text-stone-500 font-sans mt-0.5">
                Quota: <span className="font-semibold text-stone-800">{quota}</span> · Code: {selectedProgram.kcetCode.split(' ')[0]}
              </div>
            </div>

            {/* Line items */}
            <div className="space-y-3 text-xs text-stone-700 pb-5 border-b border-stone-200">
              <div className="flex justify-between items-center">
                <span>Annual Base Tuition:</span>
                <span className="font-mono tabular-nums font-semibold">
                  ₹{calculation.baseTuition.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Scholarship line */}
              {calculation.scholarshipPercent > 0 && (
                <div className="flex justify-between items-center text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-medium">{calculation.scholarshipPercent}% Merit Waiver</span>
                  </div>
                  <span className="font-mono tabular-nums font-bold">
                    - ₹{calculation.scholarshipDeduction.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center text-stone-600">
                <span>VTU Examination & Lab Training Fee:</span>
                <span className="font-mono tabular-nums">
                  ₹{calculation.universityAndLabFee.toLocaleString('en-IN')}
                </span>
              </div>

              {calculation.hostelFee > 0 && (
                <div className="flex justify-between items-center">
                  <span>Hostel & Mess ({calculation.hostelDesc.split(' ')[0]}):</span>
                  <span className="font-mono tabular-nums font-semibold">
                    ₹{calculation.hostelFee.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              {calculation.transportFee > 0 && (
                <div className="flex justify-between items-center">
                  <span>Bus Commute Fee:</span>
                  <span className="font-mono tabular-nums font-semibold">
                    ₹{calculation.transportFee.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="py-4">
              <div className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                Net Estimated 1st Year Investment
              </div>
              <div className="text-3xl font-bold font-mono text-stone-950 tabular-nums">
                ₹{calculation.totalFirstYear.toLocaleString('en-IN')}
              </div>
              <p className="text-[11px] text-stone-500 mt-1">
                *Payable in 2 interest-free semester installments. Includes library deposit & sports council membership.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() =>
                  onApplyWithSelection({
                    programId: selectedProgram.id,
                    quota,
                    hostel: hostelType !== 'NONE',
                    transport: transportType !== 'NONE'
                  })
                }
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Apply with this Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handlePrintEstimate}
                className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs rounded border border-stone-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-stone-600" />
                <span>Print Fee Breakdown</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
