import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ApplicationRecord } from '../types';
import { PROGRAMS_DATA, BUS_ROUTES_DATA } from '../data/collegeData';
import { ApplicationReceipt } from './ApplicationReceipt';

interface ApplicationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
  initialQuota?: string;
  initialHostel?: boolean;
  initialTransport?: boolean;
  onApplicationCreated: (newApp: ApplicationRecord) => void;
  onTrackApplication: (id: string) => void;
}

export const ApplicationFormModal: React.FC<ApplicationFormModalProps> = ({
  isOpen,
  onClose,
  initialProgramId,
  initialQuota,
  initialHostel,
  initialTransport,
  onApplicationCreated,
  onTrackApplication
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submittedApp, setSubmittedApp] = useState<ApplicationRecord | null>(null);

  // Form State
  const [candidateName, setCandidateName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('2008-05-15');
  const [gender, setGender] = useState('Male');
  const [category, setCategory] = useState('General Merit (GM)');
  const [domicile, setDomicile] = useState('Karnataka');
  const [aadharNumber, setAadharNumber] = useState('');

  const [quota, setQuota] = useState<'KCET' | 'COMEDK' | 'MANAGEMENT' | 'LATERAL'>(
    (initialQuota as any) || 'MANAGEMENT'
  );
  const [programFirstChoice, setProgramFirstChoice] = useState(initialProgramId || 'ai-ml');
  const [programSecondChoice, setProgramSecondChoice] = useState('cse');

  const [tenthPercentage, setTenthPercentage] = useState<number>(88);
  const [twelfthBoard, setTwelfthBoard] = useState('Karnataka State Pre-University Board (PUC)');
  const [physicsMarks, setPhysicsMarks] = useState<number>(85);
  const [mathsMarks, setMathsMarks] = useState<number>(90);
  const [chemElectiveMarks, setChemElectiveMarks] = useState<number>(88);
  const [entranceExam, setEntranceExam] = useState('KCET 2026');
  const [entranceRank, setEntranceRank] = useState('');

  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentOccupation, setParentOccupation] = useState('');
  const [annualIncome, setAnnualIncome] = useState('₹6,00,000 - ₹10,00,000');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Mangaluru');
  const [state, setState] = useState('Karnataka');
  const [pincode, setPincode] = useState('575001');

  const [hostelRequired, setHostelRequired] = useState(initialHostel || false);
  const [transportRequired, setTransportRequired] = useState(initialTransport || false);
  const [busRoute, setBusRoute] = useState(BUS_ROUTES_DATA[0].routeName);
  const [declared, setDeclared] = useState(false);

  // Reset or initialize on open
  useEffect(() => {
    if (initialProgramId) {
      setProgramFirstChoice(initialProgramId);
    }
    if (initialQuota) {
      setQuota(initialQuota as any);
    }
    if (initialHostel !== undefined) {
      setHostelRequired(initialHostel);
    }
    if (initialTransport !== undefined) {
      setTransportRequired(initialTransport);
    }
  }, [initialProgramId, initialQuota, initialHostel, initialTransport]);

  if (!isOpen) return null;

  // Calculate PCM Percentage
  const pcmAvg = Math.round(((physicsMarks + mathsMarks + chemElectiveMarks) / 3) * 10) / 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!declared) {
      alert("Please accept the declaration before submitting your application.");
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newId = `SIT-2026-${randomSuffix}`;

    const newRecord: ApplicationRecord = {
      applicationId: newId,
      submissionDate: new Date().toISOString().split('T')[0],
      candidateName: candidateName || "Prospective Student",
      email: email || "student@example.com",
      phone: phone || "9845012345",
      dob,
      gender,
      category,
      domicile,
      aadharNumber: aadharNumber || "XXXX XXXX 1234",
      quota,
      programFirstChoice,
      programSecondChoice,
      pcmPercentage: pcmAvg,
      entranceExam,
      entranceRank: entranceRank || "Under Evaluation",
      tenthPercentage,
      twelfthBoard,
      parentName: parentName || "Parent / Guardian",
      parentPhone: parentPhone || phone,
      parentOccupation,
      annualIncome,
      address: address || "Valachil Campus Area",
      city,
      state,
      pincode,
      hostelRequired,
      transportRequired,
      busRoute: transportRequired ? busRoute : undefined,
      status: 'SUBMITTED',
      remarks: "Application received successfully. Document verification scheduled."
    };

    onApplicationCreated(newRecord);
    setSubmittedApp(newRecord);

    // Fire festive celebratory confetti!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!candidateName.trim() || !phone.trim()) {
        alert("Please enter Candidate Name and Contact Phone to proceed.");
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl my-6">
        {submittedApp ? (
          <ApplicationReceipt
            application={submittedApp}
            onClose={() => {
              setSubmittedApp(null);
              onClose();
            }}
            onTrackApplication={(id) => {
              setSubmittedApp(null);
              onClose();
              onTrackApplication(id);
            }}
          />
        ) : (
          <div className="bg-white rounded-lg border border-stone-200 shadow-2xl overflow-hidden text-stone-900">
            {/* Header */}
            <div className="bg-stone-900 text-white p-5 sm:p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                Admissions 2026–2027 · SIT Mangaluru
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                Online Application for Degree Admission
              </h2>
              <div className="text-xs text-stone-300 mt-1">
                Direct Management, KCET Govt Quota (E153), COMEDK (E098) & Lateral Entry
              </div>

              {/* Progress Bar */}
              <div className="mt-5 grid grid-cols-5 gap-2">
                {[
                  { num: 1, label: "Candidate" },
                  { num: 2, label: "Programs" },
                  { num: 3, label: "Academics" },
                  { num: 4, label: "Guardian" },
                  { num: 5, label: "Declaration" }
                ].map((s) => (
                  <div key={s.num} className="text-left">
                    <div
                      className={`h-1.5 rounded-full transition-colors ${
                        currentStep >= s.num ? 'bg-amber-400' : 'bg-stone-700'
                      }`}
                    />
                    <span className="hidden sm:inline text-[10px] text-stone-300 font-mono mt-1 block">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {/* Step 1: Candidate Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold border-b border-stone-200 pb-2">
                    Step 1 of 5: Candidate Particulars
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Full Name of Candidate (as in 10th Marks Card) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul S. Rao"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Contact Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9845012345"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul.rao@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Gender
                      </label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Social Category / Caste Reservation
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="General Merit (GM)">General Merit (GM)</option>
                        <option value="OBC Category 2A">OBC Category 2A</option>
                        <option value="OBC Category 2B">OBC Category 2B</option>
                        <option value="OBC Category 3A">OBC Category 3A</option>
                        <option value="OBC Category 3B">OBC Category 3B</option>
                        <option value="Scheduled Caste (SC)">Scheduled Caste (SC)</option>
                        <option value="Scheduled Tribe (ST)">Scheduled Tribe (ST)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Domicile Status
                      </label>
                      <select
                        value={domicile}
                        onChange={(e) => setDomicile(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Karnataka">Karnataka Resident (7+ Years)</option>
                        <option value="Kerala (Non-Karnataka)">Kerala (Non-Karnataka)</option>
                        <option value="Other Indian State">Other Indian State</option>
                        <option value="NRI / International">NRI / International</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Aadhar Card Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="12 digit Aadhar"
                        value={aadharNumber}
                        onChange={(e) => setAadharNumber(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500 font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Course & Quota Selection */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold border-b border-stone-200 pb-2">
                    Step 2 of 5: Program Preferences & Quota
                  </h3>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-2">
                      Admission Channel / Quota Mode
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'MANAGEMENT', title: 'Management Quota', desc: 'Direct Spot Merit' },
                        { id: 'KCET', title: 'KCET Quota (E153)', desc: 'KEA Counseling' },
                        { id: 'COMEDK', title: 'COMEDK (E098)', desc: 'All India Rank' },
                        { id: 'LATERAL', title: 'Lateral Entry', desc: '2nd Year B.E.' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setQuota(item.id as any)}
                          className={`p-3 text-left rounded border transition-all cursor-pointer ${
                            quota === item.id
                              ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                              : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <div className="font-bold text-xs">{item.title}</div>
                          <div className="text-[10px] opacity-75">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        1st Priority Branch Choice *
                      </label>
                      <select
                        value={programFirstChoice}
                        onChange={(e) => setProgramFirstChoice(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      >
                        {PROGRAMS_DATA.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} ({p.shortCode})
                          </option>
                        ))}
                      </select>
                      <span className="text-[10px] text-stone-500 mt-1 block">
                        Primary choice evaluated during merit seat allotment.
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        2nd Priority Alternate Branch
                      </label>
                      <select
                        value={programSecondChoice}
                        onChange={(e) => setProgramSecondChoice(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      >
                        {PROGRAMS_DATA.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} ({p.shortCode})
                          </option>
                        ))}
                      </select>
                      <span className="text-[10px] text-stone-500 mt-1 block">
                        Backup choice in case 1st preference is filled.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Academic Qualifications */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold border-b border-stone-200 pb-2">
                    Step 3 of 5: Academic Qualifications & Entrance Scores
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        10th / SSLC Percentage or CGPA *
                      </label>
                      <input
                        type="number"
                        min="40"
                        max="100"
                        step="0.1"
                        required
                        value={tenthPercentage}
                        onChange={(e) => setTenthPercentage(Number(e.target.value))}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        12th / Qualifying Board Name
                      </label>
                      <input
                        type="text"
                        value={twelfthBoard}
                        onChange={(e) => setTwelfthBoard(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Subject Marks for PCM Calculation */}
                  <div className="bg-stone-50 p-4 rounded border border-stone-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                        12th / 2nd PUC Individual Subject Marks (Out of 100)
                      </span>
                      <div className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                        Calculated PCM Aggregate: {pcmAvg}%
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] text-stone-600 mb-1">Physics *</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={physicsMarks}
                          onChange={(e) => setPhysicsMarks(Number(e.target.value))}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-stone-600 mb-1">Mathematics *</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={mathsMarks}
                          onChange={(e) => setMathsMarks(Number(e.target.value))}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-stone-600 mb-1">Chem / CS / Bio *</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={chemElectiveMarks}
                          onChange={(e) => setChemElectiveMarks(Number(e.target.value))}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded font-mono"
                        />
                      </div>
                    </div>

                    {pcmAvg >= 85 && (
                      <div className="mt-3 text-xs text-emerald-700 flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Congratulations! Eligible for A. Shama Rao Foundation Merit Scholarship.</span>
                      </div>
                    )}
                  </div>

                  {/* Entrance Exam Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Entrance Exam Taken
                      </label>
                      <select
                        value={entranceExam}
                        onChange={(e) => setEntranceExam(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="KCET 2026">Karnataka CET 2026</option>
                        <option value="COMEDK UGET 2026">COMEDK UGET 2026</option>
                        <option value="JEE Main 2026">JEE Main 2026</option>
                        <option value="PGCET (for PG)">Karnataka PGCET 2026</option>
                        <option value="None / Direct Merit">Direct 12th Marks (No Exam)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Entrance Exam Rank / Percentile
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 24890 or 89.4 %ile"
                        value={entranceRank}
                        onChange={(e) => setEntranceRank(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500 font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Parent / Guardian & Address */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold border-b border-stone-200 pb-2">
                    Step 4 of 5: Parent / Guardian Details & Address
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Parent / Guardian Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. K. S. Rao"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Parent Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9845099887"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Parent Occupation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Professor / Business / Engineer"
                        value={parentOccupation}
                        onChange={(e) => setParentOccupation(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Annual Household Income
                      </label>
                      <select
                        value={annualIncome}
                        onChange={(e) => setAnnualIncome(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Below ₹2,50,000">Below ₹2,50,000 (Govt Fee Concession)</option>
                        <option value="₹2,50,000 - ₹6,00,000">₹2,50,000 - ₹6,00,000</option>
                        <option value="₹6,00,000 - ₹10,00,000">₹6,00,000 - ₹10,00,000</option>
                        <option value="Above ₹10,00,000">Above ₹10,00,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Permanent Residential Address *
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Door number, street name, locality..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-1">City / Town *</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-1">State *</label>
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-600 mb-1">Pincode *</label>
                      <input
                        type="text"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Facilities & Declaration */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-stone-400 font-bold border-b border-stone-200 pb-2">
                    Step 5 of 5: Facilities Opted & Declaration
                  </h3>

                  {/* Campus Facilities Checklist */}
                  <div className="bg-stone-50 p-4 rounded border border-stone-200 space-y-3">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hostelRequired}
                        onChange={(e) => {
                          setHostelRequired(e.target.checked);
                          if (e.target.checked) setTransportRequired(false);
                        }}
                        className="w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
                      />
                      <span className="text-xs font-semibold text-stone-800">
                        Request On-Campus Residential Hostel Accommodation (Valachil)
                      </span>
                    </label>

                    {!hostelRequired && (
                      <div className="space-y-2 pt-2 border-t border-stone-200">
                        <label className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={transportRequired}
                            onChange={(e) => setTransportRequired(e.target.checked)}
                            className="w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
                          />
                          <span className="text-xs font-semibold text-stone-800">
                            Opt for Daily College Bus Transport (Day Scholar)
                          </span>
                        </label>

                        {transportRequired && (
                          <div className="pl-6 pt-1">
                            <label className="block text-[11px] text-stone-500 mb-1">
                              Select Boarding Route
                            </label>
                            <select
                              value={busRoute}
                              onChange={(e) => setBusRoute(e.target.value)}
                              className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded"
                            >
                              {BUS_ROUTES_DATA.map((b) => (
                                <option key={b.routeNumber} value={b.routeName}>
                                  Route {b.routeNumber}: {b.routeName}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Summary Overview */}
                  <div className="p-4 bg-amber-50/60 rounded border border-amber-200 text-xs text-stone-700 space-y-1">
                    <div className="font-bold text-stone-900 mb-1">Application Summary:</div>
                    <div>Candidate: <strong>{candidateName || 'N/A'}</strong> ({gender}, {category})</div>
                    <div>Applied Program: <strong>{PROGRAMS_DATA.find((p) => p.id === programFirstChoice)?.name}</strong></div>
                    <div>Admission Quota: <strong>{quota}</strong></div>
                    <div>Calculated PCM: <strong className="font-mono text-emerald-800">{pcmAvg}%</strong></div>
                  </div>

                  {/* Declaration Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={declared}
                        onChange={(e) => setDeclared(e.target.checked)}
                        className="w-4 h-4 mt-0.5 text-amber-600 rounded border-stone-300 focus:ring-amber-500"
                      />
                      <span className="text-[11px] text-stone-600 leading-normal">
                        I hereby declare that all particulars stated in this application are true, complete, and correct to the best of my knowledge. I understand that admission is provisional subject to the verification of original certificates and fulfillment of VTU Belagavi and AICTE eligibility criteria.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Proceed to Step {currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>Submit & Generate Official Slip</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
