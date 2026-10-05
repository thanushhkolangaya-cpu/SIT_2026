import React, { useState } from 'react';
import { X, MapPin, Navigation, Eye, CheckCircle2, Building, BookOpen, Cpu, Shield, Award } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onOpenApply
}) => {
  const [activeSpot, setActiveSpot] = useState(0);

  if (!isOpen) return null;

  const tourSpots = [
    {
      title: "Main Administrative & Academic Complex",
      tag: "Academic Hub",
      image: "/src/assets/images/hero_sit_campus_1791215892692.jpg",
      description: "The stately four-story academic edifice housing smart interactive lecture halls, the Dean's Office, Admissions Cell, and department faculty chambers.",
      features: ["Centrally Wi-Fi enabled", "Air-conditioned seminar halls", "Automated student administrative kiosk", "Disabled-accessible ramps & elevators"]
    },
    {
      title: "Central Library & Digital Knowledge Center",
      tag: "Research & Learning",
      image: "/src/assets/images/sit_library_campus_1791215934045.jpg",
      description: "An expansive two-level repository containing over 50,000 engineering and management titles, international journals, digital thesis archives, and private reading cubicles.",
      features: ["IEEE Xplore & Springer Digital Access", "500+ seating capacity", "Reprography & scanning facilities", "Open until 8:00 PM on working days"]
    },
    {
      title: "Advanced Robotics, AI & IoT Laboratory",
      tag: "Innovation & Labs",
      image: "/src/assets/images/sit_engineering_lab_1791215915895.jpg",
      description: "State-of-the-art research sandbox equipped with industrial multi-axis robotic arms, NVIDIA graphics processing clusters, and IoT sensor arrays for industry-sponsored research.",
      features: ["NVIDIA Deep Learning Workstations", "ABB / KUKA robotic arms", "Rapid prototyping 3D printers", "K-Tech Incubation Cell"]
    },
    {
      title: "Campus Living & Student Community",
      tag: "Campus Life",
      image: "/src/assets/images/sit_student_group_1791215952143.jpg",
      description: "40 acres of landscaped hilltop greens featuring outdoor amphitheaters, cafeteria pavilions, basketball courts, and residential hostels with 24x7 security.",
      features: ["Separate boys and girls residential blocks", "Nutritious multi-cuisine food court", "Full backup generator power", "Indoor badminton & table tennis arena"]
    }
  ];

  const current = tourSpots[activeSpot];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/85 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-6 bg-white rounded-lg border border-stone-200 shadow-2xl overflow-hidden text-stone-900">
        {/* Top Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-0.5">
              Valachil Hilltop Campus · Interactive Guide
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              SIT Virtual Campus Exploration
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Spot Navigation Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-50 overflow-x-auto text-xs">
          {tourSpots.map((spot, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSpot(idx)}
              className={`py-3 px-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
                activeSpot === idx
                  ? 'border-amber-600 text-amber-900 bg-white'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              {spot.title.split(' ')[0]} {spot.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Spot Details */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Visual Showcase (7 cols) */}
          <div className="md:col-span-7 rounded-lg overflow-hidden border border-stone-300 relative aspect-16/10 bg-stone-900 shadow-sm">
            <img
              src={current.image}
              alt={current.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded">
              {current.tag}
            </div>
          </div>

          {/* Description & Features (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block mb-1">
                Spot 0{activeSpot + 1} of 0{tourSpots.length}
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 leading-tight">
                {current.title}
              </h3>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-stone-200">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                Infrastructure Highlights:
              </span>
              {current.features.map((feat, fidx) => (
                <div key={fidx} className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenApply();
                }}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
              >
                Apply for Admission
              </button>
              <button
                onClick={() => setActiveSpot((prev) => (prev + 1) % tourSpots.length)}
                className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded text-xs font-medium border border-stone-200 transition-colors cursor-pointer"
              >
                Next Location
              </button>
            </div>
          </div>
        </div>

        {/* Location & Transit Footer */}
        <div className="bg-stone-50 p-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Campus: Valachil, Merlapadavu, Arkula, Mangaluru - 574143</span>
          </div>
          <div className="font-mono text-stone-500">
            12 km from Mangalore Central Railway Station · 22 km from Mangaluru Airport
          </div>
        </div>
      </div>
    </div>
  );
};
