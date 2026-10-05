import React from 'react';
import { Award, Briefcase, TrendingUp, Building, Quote } from 'lucide-react';
import { RECRUITERS_DATA, TESTIMONIALS_DATA } from '../data/collegeData';

export const PlacementsSection: React.FC = () => {
  return (
    <section id="placements" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Career Records · Training & Placement (TAP) Cell
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Proven Launchpads to Global Tech & Core Giants
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Our intensive 4-year technical training, full-stack coding accelerators, and pre-placement internships ensure students graduate directly into top multinational roles.
          </p>
        </div>

        {/* Big Metric Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs">
            <span className="text-xs text-stone-500 uppercase font-semibold">Highest Package</span>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-amber-700 tabular-nums mt-1">
              ₹42.0 LPA
            </div>
            <span className="text-xs text-stone-600 mt-1 block">Amazon AWS Cloud Engineering</span>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs">
            <span className="text-xs text-stone-500 uppercase font-semibold">Average CTC</span>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-stone-900 tabular-nums mt-1">
              ₹7.2 LPA
            </div>
            <span className="text-xs text-stone-600 mt-1 block">Across Computer & Core Branches</span>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs">
            <span className="text-xs text-stone-500 uppercase font-semibold">Recruiting Partners</span>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-stone-900 tabular-nums mt-1">
              250+
            </div>
            <span className="text-xs text-stone-600 mt-1 block">Tier 1 MNCs & Emerging Unicorns</span>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs">
            <span className="text-xs text-stone-500 uppercase font-semibold">Maritime Placements</span>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-700 tabular-nums mt-1">
              100%
            </div>
            <span className="text-xs text-stone-600 mt-1 block">DG Shipping Merchant Navy Fleet</span>
          </div>
        </div>

        {/* Corporate Recruiters Grid */}
        <div className="mb-14">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-4">
            Prominent Placement Partners & Campus Recruiters
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {RECRUITERS_DATA.map((rec, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded border border-stone-200 flex flex-col justify-between hover:border-amber-400 transition-colors"
              >
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">
                    {rec.category}
                  </div>
                  <div className="font-bold text-stone-900 text-sm">{rec.name}</div>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>CTC to: <strong className="text-stone-800">{rec.topPackage}</strong></span>
                  <span className="text-stone-400">{rec.recruitsCount}+ Hires</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials with Claim-to-Proof Adjacency */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-4">
            Alumni Voices · Verified Career Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-stone-200 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <Quote className="w-5 h-5 text-amber-500 mb-3" />
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900 text-xs sm:text-sm">{item.name}</div>
                    <div className="text-stone-500 text-[11px]">{item.branch} · {item.batch}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-800 font-bold text-xs">{item.placedCompany}</div>
                    <div className="font-mono text-emerald-700 font-bold text-xs">{item.package}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
