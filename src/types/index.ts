export type ProgramLevel = 'BE' | 'PG' | 'PHD';

export interface Program {
  id: string;
  name: string;
  shortCode: string;
  level: ProgramLevel;
  department: string;
  duration: string;
  intake: number;
  kcetCode: string;
  comedkCode: string;
  description: string;
  eligibility: string;
  specializations: string[];
  keyLabs: string[];
  careerProspects: string[];
  avgPackage: string;
  highestPackage: string;
  curriculumHighlights: {
    year: string;
    topics: string[];
  }[];
}

export interface ApplicationRecord {
  applicationId: string;
  submissionDate: string;
  candidateName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  category: string;
  domicile: string;
  aadharNumber: string;
  quota: 'KCET' | 'COMEDK' | 'MANAGEMENT' | 'LATERAL';
  programFirstChoice: string;
  programSecondChoice: string;
  pcmPercentage: number;
  entranceExam: string;
  entranceRank: string;
  tenthPercentage: number;
  twelfthBoard: string;
  parentName: string;
  parentPhone: string;
  parentOccupation: string;
  annualIncome: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  hostelRequired: boolean;
  transportRequired: boolean;
  busRoute?: string;
  status: 'SUBMITTED' | 'VERIFICATION_PENDING' | 'MERIT_EVALUATED' | 'PROVISIONAL_SEAT_OFFERED' | 'CONFIRMED';
  provisionalBranch?: string;
  remarks?: string;
}

export interface CutoffItem {
  branchCode: string;
  branchName: string;
  generalMerit: number;
  obc2A: number;
  obc3A: number;
  sc: number;
  st: number;
  comedkRank: number;
}

export interface Recruiter {
  name: string;
  category: 'Tier 1 Global' | 'Core Engineering' | 'IT & Consulting' | 'Startups & FinTech';
  topPackage: string;
  recruitsCount: number;
}

export interface Testimonial {
  name: string;
  batch: string;
  branch: string;
  placedCompany: string;
  package: string;
  quote: string;
  photoUrl?: string;
}

export interface BusRouteInfo {
  routeNumber: number;
  routeName: string;
  stops: string[];
  departureTime: string;
}
