import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { COLLEGE_INFO, PROGRAMS_DATA } from '../data/collegeData';

interface AdmissionEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionEnquiryModal: React.FC<AdmissionEnquiryModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('ai-ml');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl my-6 bg-white rounded-lg border border-stone-200 shadow-2xl overflow-hidden text-stone-900">
        <div className="bg-stone-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
            Direct Helpline · Valachil Campus
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
            Admission Enquiry & Counseling
          </h2>
          <p className="text-xs text-stone-300 mt-1">
            Request an instant callback or counseling appointment from our Senior Admissions Officers.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-stone-900">
              Enquiry Received Successfully!
            </h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Our Admissions Counselor will reach out to you at <strong>{mobile}</strong> within 2 working hours with the fee details and seat availability for {PROGRAMS_DATA.find((p) => p.id === program)?.name}.
            </p>

            <div className="p-4 bg-stone-50 rounded border border-stone-200 text-xs text-stone-700 text-left space-y-2 mt-4">
              <div className="font-bold text-stone-900">Direct Contact Information:</div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Helpline: {COLLEGE_INFO.contactNumbers.admissionHelpline} / {COLLEGE_INFO.contactNumbers.admissionCellMobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>Email: {COLLEGE_INFO.contactEmails.admissions}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Campus: Valachil, Merlapadavu, Mangaluru, Karnataka</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-stone-900 text-white font-semibold text-xs rounded transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Student or Parent Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Contact Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10 digit mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Course of Interest *
                </label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                >
                  {PROGRAMS_DATA.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mangaluru, Kasaragod, Bangalore"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Specific Query / Requirement (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention questions about KCET cutoffs, management quota fees, hostel, or scholarships..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Enquiry for Immediate Callback</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
