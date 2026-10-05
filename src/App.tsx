/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { AdmissionGuide } from './components/AdmissionGuide';
import { FeeCalculator } from './components/FeeCalculator';
import { CutoffsGuide } from './components/CutoffsGuide';
import { PlacementsSection } from './components/PlacementsSection';
import { CampusLife } from './components/CampusLife';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ApplicationFormModal } from './components/ApplicationFormModal';
import { StatusTracker } from './components/StatusTracker';
import { AdmissionEnquiryModal } from './components/AdmissionEnquiryModal';
import { ProspectusModal } from './components/ProspectusModal';
import { VirtualTourModal } from './components/VirtualTourModal';

import { INITIAL_DEMO_APPLICATIONS } from './data/collegeData';
import { Program, ApplicationRecord } from './types';

export default function App() {
  // Application Records (Preloaded with authentic demo records + newly submitted records)
  const [applications, setApplications] = useState<ApplicationRecord[]>(INITIAL_DEMO_APPLICATIONS);

  // Modals state
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isProspectusOpen, setIsProspectusOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  // Detail Modal
  const [activeDetailProgram, setActiveDetailProgram] = useState<Program | null>(null);

  // Application prefill parameters
  const [applyPrefill, setApplyPrefill] = useState<{
    programId?: string;
    quota?: string;
    hostel?: boolean;
    transport?: boolean;
  }>({});

  const [trackerSearchId, setTrackerSearchId] = useState<string>('');

  const handleOpenApply = (prefillData?: {
    programId?: string;
    quota?: string;
    hostel?: boolean;
    transport?: boolean;
  }) => {
    if (prefillData) {
      setApplyPrefill(prefillData);
    } else {
      setApplyPrefill({});
    }
    setIsApplyOpen(true);
  };

  const handleApplyForProgram = (programId: string) => {
    setApplyPrefill({ programId });
    setIsApplyOpen(true);
  };

  const handleFeeApply = (data: { programId: string; quota: string; hostel: boolean; transport: boolean }) => {
    setApplyPrefill({
      programId: data.programId,
      quota: data.quota,
      hostel: data.hostel,
      transport: data.transport
    });
    setIsApplyOpen(true);
  };

  const handleTrackApplication = (id: string) => {
    setTrackerSearchId(id);
    setIsTrackerOpen(true);
  };

  const handleNewApplicationCreated = (newApp: ApplicationRecord) => {
    setApplications((prev) => [newApp, ...prev]);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onOpenTracker={() => {
          setTrackerSearchId('');
          setIsTrackerOpen(true);
        }}
        onOpenProspectus={() => setIsProspectusOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenApply={() => handleOpenApply()}
          onOpenTour={() => setIsTourOpen(true)}
          onOpenProspectus={() => setIsProspectusOpen(true)}
        />

        {/* Academic Degree Programs Catalog */}
        <ProgramsSection
          onSelectProgram={(program) => setActiveDetailProgram(program)}
          onApplyForProgram={handleApplyForProgram}
        />

        {/* Admission Process & Eligibility Roadmap */}
        <AdmissionGuide
          onOpenApply={() => handleOpenApply()}
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />

        {/* Interactive Fee & Merit Scholarship Calculator */}
        <FeeCalculator onApplyWithSelection={handleFeeApply} />

        {/* Cutoffs & Rank Predictor Guide */}
        <CutoffsGuide />

        {/* Training & Placements Highlights */}
        <PlacementsSection />

        {/* 40-Acre Valachil Campus & Residential Facilities */}
        <CampusLife onOpenTour={() => setIsTourOpen(true)} />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenApply={() => handleOpenApply()}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onOpenTracker={() => {
          setTrackerSearchId('');
          setIsTrackerOpen(true);
        }}
        onOpenProspectus={() => setIsProspectusOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
      />

      {/* Modals & Dialogs */}
      {/* 1. Program Details & Syllabus Modal */}
      <ProgramDetailModal
        program={activeDetailProgram}
        onClose={() => setActiveDetailProgram(null)}
        onApplyForProgram={handleApplyForProgram}
      />

      {/* 2. Interactive 5-Step Application Wizard */}
      <ApplicationFormModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        initialProgramId={applyPrefill.programId}
        initialQuota={applyPrefill.quota}
        initialHostel={applyPrefill.hostel}
        initialTransport={applyPrefill.transport}
        onApplicationCreated={handleNewApplicationCreated}
        onTrackApplication={handleTrackApplication}
      />

      {/* 3. Real-Time Application Status Tracker */}
      <StatusTracker
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        applications={applications}
        initialSearchId={trackerSearchId}
      />

      {/* 4. Instant Admission Enquiry & Callback */}
      <AdmissionEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      {/* 5. Official Prospectus & Information Handbook */}
      <ProspectusModal
        isOpen={isProspectusOpen}
        onClose={() => setIsProspectusOpen(false)}
        onOpenApply={() => handleOpenApply()}
      />

      {/* 6. Virtual Campus Tour & Facilities Guide */}
      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onOpenApply={() => handleOpenApply()}
      />
    </div>
  );
}
