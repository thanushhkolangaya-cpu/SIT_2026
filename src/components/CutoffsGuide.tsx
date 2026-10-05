import React, { useState, useMemo } from 'react';
import { Search, Compass, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { CUTOFFS_DATA, COLLEGE_INFO } from '../data/collegeData';

export const CutoffsGuide: React.FC = () => {
  const [examType, setExamType] = useState<'KCET' | 'COMEDK'>('KCET');
  const [userRank, setUserRank] = useState<string>('32000');
  const [userCategory, setUserCategory] = useState<'generalMerit' | 'obc2A' | 'obc3A' | 'sc' | 'st'>('generalMerit');

  // Interactive predictor
  const predictionResults = useMemo(() => {
    const rankNum = parseInt(userRank, 10);
    if (isNaN(rankNum) || rankNum <= 0) return null;

    return CUTOFFS_DATA.map((item) => {
      let cutoff = 0;
      if (examType === 'COMEDK') {
        cutoff = item.comedkRank;
      } else {
        cutoff = item[userCategory];
      }

      let chance: 'HIGH' | 'MODERATE' | 'COMPETITIVE' = 'COMPETITIVE';
      if (rankNum <= cutoff) {
        chance = 'HIGH';
      } else if (rankNum <= cutoff * 1.15) {
        chance = 'MODERATE';
      } else {
        chance = 'COMPETITIVE';
      }

      return {
        ...item,
        cutoff,
        chance
      };
    });
  }, [examType, userRank, userCategory]);

  return (
    <section id="cutoffs" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            KEA & COMEDK Analysis · College Codes: KCET {COLLEGE_INFO.kcetCode} · COMEDK {COLLEGE_INFO.comedkCode}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            Previous Year Closing Ranks & Eligibility Predictor
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Reference previous year counseling cutoffs for various branches and evaluate your probable admission chances based on your expected entrance rank.
          </p>
        </div>

        {/* Interactive Rank Predictor Bar */}
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 mb-10">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-4 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-600" />
            <span>Interactive Rank-to-Branch Probability Finder</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs text-stone-500 mb-1">Entrance Examination</label>
              <div className="flex bg-stone-200/80 rounded p-0.5">
                <button
                  type="button"
                  onClick={() => setExamType('KCET')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded cursor-pointer ${
                    examType === 'KCET' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                  }`}
                >
                  KCET
                </button>
                <button
                  type="button"
                  onClick={() => setExamType('COMEDK')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded cursor-pointer ${
                    examType === 'COMEDK' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                  }`}
                >
                  COMEDK
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs text-stone-500 mb-1">Your All India / State Rank</label>
              <input
                type="number"
                placeholder="e.g. 35000"
                value={userRank}
                onChange={(e) => setUserRank(e.target.value)}
                className="w-full px-3 py-1.5 text-xs font-mono bg-white border border-stone-300 rounded focus:ring-1 focus:ring-amber-500"
              />
            </div>

            {examType === 'KCET' && (
              <div>
                <label className="block text-xs text-stone-500 mb-1">Reservation Category</label>
                <select
                  value={userCategory}
                  onChange={(e) => setUserCategory(e.target.value as any)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 rounded focus:ring-1 focus:ring-amber-500 text-stone-800"
                >
                  <option value="generalMerit">General Merit (GM)</option>
                  <option value="obc2A">Category 2A</option>
                  <option value="obc3A">Category 3A</option>
                  <option value="sc">Scheduled Caste (SC)</option>
                  <option value="st">Scheduled Tribe (ST)</option>
                </select>
              </div>
            )}

            <div className="text-xs text-stone-500">
              <span className="block font-medium text-stone-700">Predictive Model:</span>
              <span className="text-[11px]">Based on KEA Round 2 official cutoffs.</span>
            </div>
          </div>

          {/* Quick prediction summary cards */}
          {predictionResults && (
            <div className="mt-6 pt-5 border-t border-stone-200">
              <div className="text-xs font-semibold text-stone-700 mb-3">
                Admission Probability for Rank <span className="font-mono">{userRank}</span>:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {predictionResults.map((res) => (
                  <div
                    key={res.branchCode}
                    className="p-3 bg-white rounded border border-stone-200 text-xs flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-stone-900">{res.branchName}</div>
                      <div className="text-stone-400 font-mono text-[11px]">
                        Closing Cutoff: {res.cutoff.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div>
                      {res.chance === 'HIGH' && (
                        <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> High Chance
                        </span>
                      )}
                      {res.chance === 'MODERATE' && (
                        <span className="text-[11px] font-semibold text-amber-700 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> Likely in R2
                        </span>
                      )}
                      {res.chance === 'COMPETITIVE' && (
                        <span className="text-[11px] font-semibold text-stone-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> Competitive
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Reference Tabular Data (Strict tabular-nums font discipline) */}
        <div className="overflow-x-auto rounded-lg border border-stone-200">
          <table className="w-full text-xs text-left text-stone-700">
            <thead className="bg-stone-900 text-stone-200 text-[11px] uppercase tracking-wider font-semibold">
              <tr>
                <th scope="col" className="px-4 py-3.5">Branch Code</th>
                <th scope="col" className="px-4 py-3.5">Engineering Branch</th>
                <th scope="col" className="px-4 py-3.5 font-mono text-right">KCET GM</th>
                <th scope="col" className="px-4 py-3.5 font-mono text-right">KCET 2A</th>
                <th scope="col" className="px-4 py-3.5 font-mono text-right">KCET 3A</th>
                <th scope="col" className="px-4 py-3.5 font-mono text-right">KCET SC</th>
                <th scope="col" className="px-4 py-3.5 font-mono text-right">KCET ST</th>
                <th scope="col" className="px-4 py-3.5 font-mono text-right text-amber-400">COMEDK All-India</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white">
              {CUTOFFS_DATA.map((item) => (
                <tr key={item.branchCode} className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold text-amber-800">
                    {item.branchCode}
                  </td>
                  <td className="px-4 py-3 font-semibold text-stone-900">
                    {item.branchName}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums text-right text-stone-800">
                    {item.generalMerit.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums text-right text-stone-600">
                    {item.obc2A.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums text-right text-stone-600">
                    {item.obc3A.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums text-right text-stone-600">
                    {item.sc.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums text-right text-stone-600">
                    {item.st.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums text-right font-semibold text-amber-900 bg-amber-50/40">
                    {item.comedkRank.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-[11px] text-stone-400 mt-2">
          *Note: Ranks displayed represent Round 2 closing ranks. Lateral entry (diploma) cutoffs are governed separately by DCET counseling.
        </div>
      </div>
    </section>
  );
};
