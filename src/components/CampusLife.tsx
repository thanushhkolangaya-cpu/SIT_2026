import React, { useState } from 'react';
import { BookOpen, Bus, Shield, Wifi, Utensils, Award, Sparkles, Navigation } from 'lucide-react';
import { BUS_ROUTES_DATA } from '../data/collegeData';

interface CampusLifeProps {
  onOpenTour: () => void;
}

export const CampusLife: React.FC<CampusLifeProps> = ({ onOpenTour }) => {
  const [selectedRoute, setSelectedRoute] = useState(BUS_ROUTES_DATA[0]);

  return (
    <section id="campus-life" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
              Valachil Hilltop Campus · 40 Acres
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              An Academic Haven Amidst Nature
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Perched atop the panoramic Valachil hills in Mangaluru, SIT blends state-of-the-art engineering laboratories with vibrant residential living.
            </p>
          </div>

          <button
            onClick={onOpenTour}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded flex items-center gap-2 cursor-pointer shrink-0 transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-amber-400" />
            <span>Virtual Campus Guide</span>
          </button>
        </div>

        {/* Visual Bento Grid of Campus Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Card 1: Central Library (7 cols) */}
          <div className="md:col-span-7 bg-stone-900 rounded-lg overflow-hidden relative group min-h-[320px] flex flex-col justify-end p-6 border border-stone-200">
            <img
              src="/src/assets/images/sit_library_campus_1791215934045.jpg"
              alt="Central Library at Srinivas Institute of Technology"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                Knowledge Hub
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Central Library & Digital Repository
              </h3>
              <p className="text-xs text-stone-300 mt-2 max-w-lg leading-relaxed">
                50,000+ technical volumes, 120 national and international journals, IEEE Xplore digital library terminal access, and extended evening study hours.
              </p>
            </div>
          </div>

          {/* Card 2: Robotics & Advanced Labs (5 cols) */}
          <div className="md:col-span-5 bg-stone-900 rounded-lg overflow-hidden relative group min-h-[320px] flex flex-col justify-end p-6 border border-stone-200">
            <img
              src="/src/assets/images/sit_engineering_lab_1791215915895.jpg"
              alt="Advanced Robotics and AI Lab at SIT Mangalore"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
                Innovation & R&D
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Advanced AI & Robotics Sandbox
              </h3>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Equipped with NVIDIA workstations, industrial robotic arms, IoT sensor suites, and K-Tech Innovation Incubation centers.
              </p>
            </div>
          </div>

          {/* Card 3: Student Community & Culture (5 cols) */}
          <div className="md:col-span-5 bg-stone-900 rounded-lg overflow-hidden relative group min-h-[320px] flex flex-col justify-end p-6 border border-stone-200">
            <img
              src="/src/assets/images/sit_student_group_1791215952143.jpg"
              alt="SIT Mangalore Student Community"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                Student Life
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                "Envision" Tech & Cultural Fest
              </h3>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                40+ active clubs spanning IEEE, ACM, CSI, Aero Design, Rotaract, dramatics, sports leagues, and annual coastal hackathons.
              </p>
            </div>
          </div>

          {/* Card 4: Hostels & Living (7 cols) */}
          <div className="md:col-span-7 bg-stone-50 rounded-lg p-6 sm:p-8 border border-stone-200 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">
                Residential Life
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1 mb-3">
                Secure On-Campus Residential Hostels
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Separate multi-story hostel complexes for boys and girls on the Valachil campus. Features 24x7 biometric security, round-the-clock power backup, solar water heating, and high-speed fiber internet.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-amber-600" />
                  <span>Hygienic Coastal Mess</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-amber-600" />
                  <span>Wi-Fi Enabled Rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>24x7 Resident Wardens</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>Dedicated Study Halls</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Gym & Indoor Sports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-amber-600" />
                  <span>Medical Center on Call</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
              <span>Rooms: Double / Triple Sharing with Attached & AC options</span>
              <span className="font-semibold text-stone-800">Fee: ₹82,000 / year</span>
            </div>
          </div>
        </div>

        {/* Campus Bus Transport Network (Essential for Coastal Karnataka students) */}
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">
                Commute & Connectivity
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-0.5">
                College Bus Fleet (25+ Routes Across 3 Districts)
              </h3>
            </div>
            <div className="text-xs text-stone-500">
              Connecting Dakshina Kannada, Udupi & Kasaragod
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Route List */}
            <div className="space-y-2">
              {BUS_ROUTES_DATA.map((route) => (
                <button
                  key={route.routeNumber}
                  type="button"
                  onClick={() => setSelectedRoute(route)}
                  className={`w-full text-left p-3 rounded text-xs transition-colors cursor-pointer border ${
                    selectedRoute.routeNumber === route.routeNumber
                      ? 'bg-stone-900 text-white border-stone-900 font-semibold'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span>Route #{route.routeNumber}</span>
                    <span className="font-mono text-[11px] opacity-80">{route.departureTime}</span>
                  </div>
                  <div className="truncate text-[11px] opacity-90">{route.routeName}</div>
                </button>
              ))}
            </div>

            {/* Selected Route Stops */}
            <div className="md:col-span-2 bg-white p-5 rounded border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                  <h4 className="font-bold text-stone-900 text-sm">
                    {selectedRoute.routeName}
                  </h4>
                  <span className="text-xs font-mono text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded">
                    Departure: {selectedRoute.departureTime}
                  </span>
                </div>

                <div className="text-xs text-stone-500 mb-2 uppercase tracking-wider font-semibold">
                  Scheduled Boarding Stops:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedRoute.stops.map((stop, sidx) => (
                    <span
                      key={sidx}
                      className="px-2.5 py-1 bg-stone-100 rounded text-stone-700 border border-stone-200/60 font-sans"
                    >
                      {stop}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-xs text-stone-500 flex justify-between items-center">
                <span>Arrival at SIT Valachil Campus: <strong>08:35 AM - 08:40 AM</strong></span>
                <span className="text-amber-800 font-semibold">Transport Pass Desk: Admin Block</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
