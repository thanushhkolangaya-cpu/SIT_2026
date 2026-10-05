import { Program, CutoffItem, Recruiter, Testimonial, ApplicationRecord, BusRouteInfo } from '../types';

export const COLLEGE_INFO = {
  name: "Srinivas Institute of Technology",
  shortName: "SIT Mangaluru",
  tagline: "Excellence in Engineering, Innovation & Human Values",
  established: 2006,
  affiliation: "Visvesvaraya Technological University (VTU), Belagavi",
  approval: "Approved by AICTE, New Delhi & Recognized by Govt. of Karnataka",
  accreditation: "NAAC Accredited Grade 'A'",
  campusArea: "40 Acres Scenic Hilltop Green Campus",
  address: "Srinivas Campus, Valachil, Merlapadavu, Arkula, Mangaluru, Karnataka 574143",
  kcetCode: "E153",
  comedkCode: "E098",
  pgcetCode: "B178",
  contactNumbers: {
    admissionHelpline: "+91 824 2274730",
    admissionCellMobile: "+91 94485 97543",
    whatsapp: "+91 94485 97543",
    deanOffice: "+91 824 2274732"
  },
  contactEmails: {
    admissions: "admission@sitmng.ac.in",
    principal: "principal@sitmng.ac.in",
    placement: "placement@sitmng.ac.in"
  },
  keyDates2026: {
    applicationStart: "January 15, 2026",
    kcetRound1Start: "June 2026",
    comedkRound1Start: "July 2026",
    managementQuotaLastDate: "August 25, 2026",
    inductionCommencement: "September 1, 2026"
  }
};

export const PROGRAMS_DATA: Program[] = [
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    shortCode: "AI & ML",
    level: "BE",
    department: "Department of AI & Data Science",
    duration: "4 Years (8 Semesters)",
    intake: 120,
    kcetCode: "E153 - AI",
    comedkCode: "E098 - AIML",
    description: "Cutting-edge curriculum focused on deep learning, neural networks, natural language processing, computer vision, and edge computing with industry labs.",
    eligibility: "Passed 10+2 / 2nd PUC with 45% marks in Physics, Mathematics as compulsory subjects along with Chemistry/Bio-tech/Computer Science (40% for SC/ST/OBC).",
    specializations: ["Deep Learning & Computer Vision", "Generative AI & LLMs", "Robotics & Autonomous Systems", "Big Data Analytics"],
    keyLabs: ["NVIDIA GPU Computing Lab", "Applied AI Research Studio", "Autonomous Systems Testing Bay", "Cloud AI Sandbox"],
    careerProspects: ["AI Research Engineer", "MLOps Architect", "Data Scientist", "NLP Algorithm Developer"],
    avgPackage: "₹7.4 LPA",
    highestPackage: "₹42.0 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["Computational Thinking with Python", "Calculus & Linear Algebra", "Engineering Physics & Circuit Simulation", "Digital Logic"] },
      { year: "Year 2", topics: ["Data Structures & Algorithms", "Discrete Mathematics", "Object Oriented Java", "Design of AI Paradigms"] },
      { year: "Year 3", topics: ["Machine Learning Algorithms", "Deep Neural Networks", "Computer Vision Systems", "Natural Language Processing"] },
      { year: "Year 4", topics: ["Reinforcement Learning", "Generative AI Systems", "Capstone Industry Project", "AI Ethics & Deployment"] }
    ]
  },
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortCode: "CSE",
    level: "BE",
    department: "Department of Computer Science & Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 180,
    kcetCode: "E153 - CS",
    comedkCode: "E098 - CSE",
    description: "Flagship program providing strong foundations in computer systems, algorithms, distributed systems, full-stack software development, and cloud computing.",
    eligibility: "10+2 / 2nd PUC with min 45% in PCM aggregate (40% for Karnataka SC/ST/OBC category candidates).",
    specializations: ["Cloud & Distributed Systems", "Full Stack Web & Mobile Architecture", "Algorithms & System Design", "Cyber Security Systems"],
    keyLabs: ["Advanced Systems & Networking Lab", "Cloud Computing Sandbox", "Open Source Software Lab", "High Performance Computing Lab"],
    careerProspects: ["Software Development Engineer (SDE)", "Cloud Infrastructure Architect", "Full Stack Developer", "Systems Engineer"],
    avgPackage: "₹7.1 LPA",
    highestPackage: "₹38.5 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["C Programming & Problem Solving", "Discrete Math", "Digital Design", "Modern Engineering Practices"] },
      { year: "Year 2", topics: ["Data Structures in C++", "Computer Architecture", "Database Management Systems (SQL/NoSQL)", "Operating Systems"] },
      { year: "Year 3", topics: ["Computer Networks", "Compiler Design", "Software Engineering & Agile DevOps", "Cloud Virtualization"] },
      { year: "Year 4", topics: ["Distributed Systems", "Full-Stack Microservices", "Industrial Internship", "Major Capstone Project"] }
    ]
  },
  {
    id: "data-science",
    name: "Computer Science & Engineering (Data Science)",
    shortCode: "CSE (DS)",
    level: "BE",
    department: "Department of Computer Science & Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    kcetCode: "E153 - DS",
    comedkCode: "E098 - CSDS",
    description: "Specialized engineering program bridging statistical modeling, big data pipelines, machine learning, predictive analytics, and visualization tools.",
    eligibility: "Passed 10+2 / 2nd PUC with 45% marks in Physics and Mathematics along with one optional technical subject.",
    specializations: ["Big Data Engineering (Spark, Hadoop)", "Predictive Modeling & Statistical Inference", "Business Intelligence & BI Tools", "Financial Analytics"],
    keyLabs: ["Big Data Analytics Lab", "Tableau & PowerBI Visualization Suite", "Statistical Computing Lab", "Data Engineering Sandbox"],
    careerProspects: ["Data Engineer", "Business Intelligence Consultant", "Quantitative Analyst", "Machine Learning Specialist"],
    avgPackage: "₹6.8 LPA",
    highestPackage: "₹28.0 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["Programming for Problem Solving", "Applied Statistics", "Linear Algebra", "Basic Electronics"] },
      { year: "Year 2", topics: ["Data Structures & OOPs", "R & Python for Data Science", "Relational & Document Databases", "Probability Theory"] },
      { year: "Year 3", topics: ["Big Data Technologies", "Data Mining & Warehousing", "Machine Learning Techniques", "Information Visualization"] },
      { year: "Year 4", topics: ["Streaming Data Systems", "Deep Learning for Time Series", "Real-world Capstone Project", "Industry Internship"] }
    ]
  },
  {
    id: "cyber-security",
    name: "Computer Science & Engineering (Cyber Security)",
    shortCode: "CSE (CS)",
    level: "BE",
    department: "Department of Computer Science & Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    kcetCode: "E153 - CY",
    comedkCode: "E098 - CYBER",
    description: "Hands-on cybersecurity discipline equipping engineers with cryptography, ethical hacking, digital forensics, network defense, and DevSecOps skills.",
    eligibility: "10+2 / PUC with 45% in PCM aggregate (40% for reserved categories).",
    specializations: ["Ethical Hacking & Penetration Testing", "Digital Forensics & Incident Response", "Cloud Security & DevSecOps", "Cryptography & Blockchain"],
    keyLabs: ["Cyber Range & Threat Emulation Lab", "Digital Forensics Lab", "Network Security Testbed", "Malware Analysis Sandpit"],
    careerProspects: ["Security Operations Center (SOC) Analyst", "Penetration Tester", "Cybersecurity Consultant", "Cryptographic Systems Engineer"],
    avgPackage: "₹7.0 LPA",
    highestPackage: "₹32.0 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["C & Python Programming", "Computer Hardware & Logic", "Mathematics for Security", "Network Essentials"] },
      { year: "Year 2", topics: ["Data Structures & Algorithms", "Computer Networks Protocols", "Operating System Security", "Linux System Administration"] },
      { year: "Year 3", topics: ["Applied Cryptography", "Vulnerability Assessment & Pentesting", "Web Application Security", "Cyber Laws & IPR"] },
      { year: "Year 4", topics: ["Malware Reverse Engineering", "Cloud Security Architecture", "Cyber Threat Intelligence", "Security Capstone"] }
    ]
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    shortCode: "ECE",
    level: "BE",
    department: "Department of Electronics & Communication",
    duration: "4 Years (8 Semesters)",
    intake: 120,
    kcetCode: "E153 - EC",
    comedkCode: "E098 - ECE",
    description: "Core branch covering VLSI design, embedded systems, IoT architecture, 5G wireless communications, signal processing, and chip design.",
    eligibility: "10+2 / 2nd PUC with 45% in Physics and Mathematics along with Chemistry / Computer Science.",
    specializations: ["VLSI Design & Semiconductor Tech", "Embedded IoT Systems", "Wireless Communication & 5G", "Robotics & Automation"],
    keyLabs: ["Cadence & Synopsys VLSI Lab", "Embedded Systems & ARM Processor Lab", "Microwave & Optical Comm Lab", "Digital Signal Processing Lab"],
    careerProspects: ["VLSI Verification Engineer", "Embedded Firmware Developer", "RF Design Engineer", "Telecom Systems Specialist"],
    avgPackage: "₹6.2 LPA",
    highestPackage: "₹24.0 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["Basic Electrical & Electronics", "Circuit Theory", "Engineering Mathematics", "C Programming"] },
      { year: "Year 2", topics: ["Analog Electronics & Op-Amps", "Digital Logic Design", "Signals and Systems", "Microcontrollers (8051 & ARM)"] },
      { year: "Year 3", topics: ["VLSI Design using Verilog", "Digital Communication Systems", "Control Systems", "IoT Protocols & Sensors"] },
      { year: "Year 4", topics: ["Antenna & Wireless Networks", "Low Power VLSI / ASIC Design", "Industrial Automation Project", "Internship"] }
    ]
  },
  {
    id: "aeronautical",
    name: "Aeronautical Engineering",
    shortCode: "Aero",
    level: "BE",
    department: "Department of Aeronautical Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    kcetCode: "E153 - AE",
    comedkCode: "E098 - AERO",
    description: "Premier aeronautical program in coastal Karnataka with sub-sonic wind tunnel, flight simulation, structural testing, and drone design facilities.",
    eligibility: "Passed 10+2 / PUC with 45% marks in Physics, Chemistry, and Mathematics (40% for SC/ST/OBC).",
    specializations: ["Aerodynamics & CFD Simulation", "Aerospace Structural Analysis", "UAV / Drone Design & Flight Systems", "Rocket Propulsion & Gas Turbines"],
    keyLabs: ["Subsonic Wind Tunnel Facility", "Flight Simulation & Avionics Lab", "Aerospace Structures & Composite Lab", "Propulsion & Gas Turbine Test Rig"],
    careerProspects: ["Aerospace Design Engineer", "CFD Analyst", "Flight Test Engineer", "Drone Systems Specialist"],
    avgPackage: "₹5.8 LPA",
    highestPackage: "₹18.5 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["Engineering Mechanics", "Fluid Mechanics", "Engineering Graphics & CAD", "Calculus & Differential Equations"] },
      { year: "Year 2", topics: ["Aerodynamics I & II", "Aircraft Materials & Metallurgy", "Aircraft Propulsion", "Flight Dynamics"] },
      { year: "Year 3", topics: ["Finite Element Analysis (ANSYS)", "Avionics & Flight Navigation", "Helicopter Theory", "Space Mechanics"] },
      { year: "Year 4", topics: ["Computational Fluid Dynamics", "UAV Autonomous Design Project", "Industrial Flight Certification", "Aero Capstone"] }
    ]
  },
  {
    id: "marine",
    name: "Marine Engineering",
    shortCode: "Marine",
    level: "BE",
    department: "Department of Marine Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    kcetCode: "E153 - MR",
    comedkCode: "E098 - MARINE",
    description: "Approved by DG Shipping norms, offering full-scale ship-in-campus training, modern marine diesel engine mock-ups, and international maritime merchant navy placement tracks.",
    eligibility: "10+2 / PUC with minimum 60% aggregate in PCM and minimum 50% in English (Medically fit as per Merchant Shipping rules, 6/6 eye vision).",
    specializations: ["Shipboard Power Plant Operations", "Marine Automation & Control", "Naval Architecture & Stability", "Maritime Safety & STCW Standards"],
    keyLabs: ["Full-Scale Ship-in-Campus Engine Room", "Marine Auxiliary Machinery Bay", "Fire Fighting & Survival Craft Simulators", "Marine Electrical Switchboard Lab"],
    careerProspects: ["Junior Marine Engineer (Merchant Navy)", "Port Operations Superintendent", "Naval Dockyard Officer", "Offshore Oil Rig Maintenance Specialist"],
    avgPackage: "₹9.2 LPA",
    highestPackage: "₹36.0 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["Marine Engineering Workshop Practice", "Applied Thermodynamics", "Engineering Drawing", "Naval Architecture Basics"] },
      { year: "Year 2", topics: ["Marine Diesel Engines I & II", "Strength of Materials", "Marine Auxiliary Systems", "Electrical Machines at Sea"] },
      { year: "Year 3", topics: ["Ship Construction & Stability", "Marine Automation & Microprocessors", "Refrigeration & Air Conditioning", "STCW Modular Courses"] },
      { year: "Year 4", topics: ["Watchkeeping & Engine Room Simulators", "Safety & Environmental Regulations (MARPOL)", "Ship Repair Project", "Shipboard Training"] }
    ]
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    shortCode: "ME",
    level: "BE",
    department: "Department of Mechanical Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    kcetCode: "E153 - ME",
    comedkCode: "E098 - MECH",
    description: "Comprehensive mechanical engineering program featuring CNC manufacturing, 3D printing rapid prototyping, thermal engineering, robotics, and EV technology.",
    eligibility: "10+2 / PUC with 45% in PCM aggregate (40% for reserved categories).",
    specializations: ["Electric Vehicle (EV) Powertrain Design", "Additive Manufacturing (3D Printing)", "Robotics & Industrial Mechatronics", "Thermal Power Systems"],
    keyLabs: ["CNC Machining & CAM Lab", "3D Printing & Rapid Prototyping Center", "IC Engines & Fuels Lab", "Material Testing & Metallography Lab"],
    careerProspects: ["Design Engineer (CAD/CAM/FEA)", "EV Powertrain Engineer", "Production & Quality Manager", "Robotics Automation Specialist"],
    avgPackage: "₹5.5 LPA",
    highestPackage: "₹16.0 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["Engineering Graphics", "Elements of Mechanical Engg", "Mathematics", "Workshop Practice"] },
      { year: "Year 2", topics: ["Thermodynamics & Heat Transfer", "Mechanics of Materials", "Kinematics of Machinery", "Manufacturing Processes"] },
      { year: "Year 3", topics: ["Design of Machine Elements", "Finite Element Methods", "Mechatronics & Microcontrollers", "Turbo Machines"] },
      { year: "Year 4", topics: ["Electric Vehicle Architecture", "Total Quality Management", "Industrial Robotics Project", "Industry Capstone"] }
    ]
  },
  {
    id: "nano-technology",
    name: "Nano Technology Engineering",
    shortCode: "Nano",
    level: "BE",
    department: "Department of Nano Technology",
    duration: "4 Years (8 Semesters)",
    intake: 30,
    kcetCode: "E153 - NT",
    comedkCode: "E098 - NANO",
    description: "Pioneering interdisciplinary field synthesizing nanomaterials, quantum dot technologies, carbon nanotubes, biosensors, and semiconductor micro-fabrication.",
    eligibility: "10+2 / PUC with 45% in PCM aggregate (40% for reserved categories).",
    specializations: ["Nanomaterials Synthesis & Characterization", "Nano-Electronics & Biosensors", "Energy Storage (Lithium & Solid State Batteries)", "Nano-Medicine & Drug Delivery"],
    keyLabs: ["Cleanroom Microfabrication Bay", "Atomic Force Microscopy (AFM) Suite", "Nanomaterial Chemical Synthesis Lab", "Electrochemical Energy Lab"],
    careerProspects: ["Nanotechnology Research Scientist", "Semiconductor Fabrication Engineer", "Battery Materials Specialist", "Quality Control Analyst"],
    avgPackage: "₹6.0 LPA",
    highestPackage: "₹19.0 LPA",
    curriculumHighlights: [
      { year: "Year 1", topics: ["Foundations of Nanoscience", "Engineering Chemistry & Physics", "Calculus & Numerical Methods", "Computer Programming"] },
      { year: "Year 2", topics: ["Quantum Mechanics Basics", "Synthesis of Nanomaterials", "Thermodynamics of Small Systems", "Instrumentation Techniques"] },
      { year: "Year 3", topics: ["Characterization of Nanostructures (XRD/SEM/AFM)", "Nano-Electronics Devices", "Polymer Nanocomposites", "Nanobiotechnology"] },
      { year: "Year 4", topics: ["Advanced Battery & Solar Cells", "MEMS & NEMS Fabrication", "Research Dissertation", "Industry Internship"] }
    ]
  },
  {
    id: "mba",
    name: "Master of Business Administration (MBA)",
    shortCode: "MBA",
    level: "PG",
    department: "Department of Business Administration",
    duration: "2 Years (4 Semesters)",
    intake: 120,
    kcetCode: "B178 - MBA",
    comedkCode: "B178",
    description: "Industry-aligned management program offering dual specializations in Finance, Marketing, Human Resources, and Business Analytics with corporate live projects.",
    eligibility: "Recognized Bachelor's degree of minimum 3 years duration with minimum 50% marks in aggregate (45% for Karnataka SC/ST/CAT-1) and valid KMAT/PGCET/MAT/CMAT score.",
    specializations: ["Dual Specialization: Finance & Business Analytics", "Marketing & Digital Strategy", "Human Resource Management", "Logistics & Supply Chain Management"],
    keyLabs: ["Financial Modeling & Bloomberg Lab", "Digital Marketing Simulation Hub", "Corporate Soft Skills Studio"],
    careerProspects: ["Investment Banking Analyst", "Marketing Brand Manager", "HR Business Partner", "Operations Strategy Consultant"],
    avgPackage: "₹6.5 LPA",
    highestPackage: "₹18.0 LPA",
    curriculumHighlights: [
      { year: "Semester 1", topics: ["Management & Organizational Behavior", "Managerial Economics", "Financial Accounting & Reporting", "Business Statistics"] },
      { year: "Semester 2", topics: ["Financial Management", "Marketing Strategy", "Human Resource Systems", "Operations & Supply Chain"] },
      { year: "Semester 3", topics: ["Elective Dual Streams", "Business Analytics & Predictive Tools", "Summer Corporate Internship", "Strategic Management"] },
      { year: "Semester 4", topics: ["International Business", "Entrepreneurship & Startup Mentorship", "Capstone Dissertation", "Viva Voce"] }
    ]
  },
  {
    id: "mca",
    name: "Master of Computer Applications (MCA)",
    shortCode: "MCA",
    level: "PG",
    department: "Department of Computer Applications",
    duration: "2 Years (4 Semesters)",
    intake: 60,
    kcetCode: "B178 - MCA",
    comedkCode: "B178",
    description: "Intensive 2-year postgraduate program geared toward enterprise software engineering, full-stack web, cloud microservices, and mobile computing.",
    eligibility: "Passed BCA / B.Sc / B.Com / BA with Mathematics at 10+2 level or at Graduation Level with at least 50% marks (45% for reserved category) with PGCET or KMAT score.",
    specializations: ["Cloud Native Computing & DevOps", "Full Stack JavaScript / Python Enterprise", "Mobile Application Development", "Applied Machine Learning"],
    keyLabs: ["Enterprise Software Lab", "Mobile App Development Bay", "Cloud Virtualization Sandbox"],
    careerProspects: ["Senior Software Developer", "DevOps Engineer", "Mobile App Architect", "Data Analytics Specialist"],
    avgPackage: "₹6.3 LPA",
    highestPackage: "₹22.0 LPA",
    curriculumHighlights: [
      { year: "Semester 1", topics: ["Advanced Data Structures", "Relational Database Design", "Object Oriented Java & Spring Boot", "Web Technologies"] },
      { year: "Semester 2", topics: ["Software Engineering with Agile", "Cloud Computing & Docker", "Python & Data Mining", "Mobile Applications"] },
      { year: "Semester 3", topics: ["Full Stack Frameworks (React, Node, Go)", "Machine Learning Fundamentals", "Cyber Security Systems", "Mini Project"] },
      { year: "Semester 4", topics: ["6-Month Full-Time Corporate Internship", "Enterprise Capstone Project", "Publication & Technical Seminar"] }
    ]
  },
  {
    id: "mtech-robotics",
    name: "M.Tech in Industrial Automation & Robotics",
    shortCode: "M.Tech Robotics",
    level: "PG",
    department: "Department of Mechanical & Electronics",
    duration: "2 Years (4 Semesters)",
    intake: 18,
    kcetCode: "B178 - MTR",
    comedkCode: "B178",
    description: "Advanced post-graduate degree in industrial manipulators, vision-guided automation, PLC/SCADA architecture, and smart factory Industry 4.0 systems.",
    eligibility: "B.E. / B.Tech in Mechanical / Mechatronics / ECE / EEE / Automobile / Aeronautical with minimum 50% aggregate (45% for SC/ST) and valid GATE/PGCET score.",
    specializations: ["Industrial Manipulators & Kinematics", "Machine Vision & Inspection", "Industry 4.0 & Smart Factories", "Embedded Motion Control"],
    keyLabs: ["KUKA & ABB Industrial Robot Bay", "PLC/SCADA Automation Lab", "Machine Vision & Sensor Fusion Suite"],
    careerProspects: ["Robotics Automation Architect", "Mechatronics Project Leader", "Smart Factory R&D Engineer", "Academician / Researcher"],
    avgPackage: "₹7.8 LPA",
    highestPackage: "₹24.0 LPA",
    curriculumHighlights: [
      { year: "Semester 1", topics: ["Robotics Kinematics & Dynamics", "Industrial Sensors & Actuators", "Microcontroller & Embedded Control", "Mathematical Methods"] },
      { year: "Semester 2", topics: ["Machine Vision & Image Processing", "Pneumatics, Hydraulics & PLC", "Robot Operating System (ROS)", "Industry 4.0 Architecture"] },
      { year: "Year 2", topics: ["Comprehensive Industrial Internship", "Original Master's Research Thesis", "Peer-reviewed Paper Publication"] }
    ]
  }
];

export const CUTOFFS_DATA: CutoffItem[] = [
  { branchCode: "CS", branchName: "Computer Science & Engineering", generalMerit: 28450, obc2A: 34120, obc3A: 31200, sc: 58900, st: 64200, comedkRank: 36200 },
  { branchCode: "AI", branchName: "Artificial Intelligence & ML", generalMerit: 31200, obc2A: 36500, obc3A: 33800, sc: 62400, st: 68100, comedkRank: 39500 },
  { branchCode: "DS", branchName: "CSE (Data Science)", generalMerit: 38900, obc2A: 44200, obc3A: 41000, sc: 71200, st: 76500, comedkRank: 44100 },
  { branchCode: "CY", branchName: "CSE (Cyber Security)", generalMerit: 42100, obc2A: 48300, obc3A: 45200, sc: 75800, st: 81200, comedkRank: 48200 },
  { branchCode: "EC", branchName: "Electronics & Communication", generalMerit: 46800, obc2A: 53900, obc3A: 49700, sc: 84300, st: 89900, comedkRank: 52400 },
  { branchCode: "MR", branchName: "Marine Engineering", generalMerit: 54200, obc2A: 61800, obc3A: 58400, sc: 92400, st: 97800, comedkRank: 58900 },
  { branchCode: "AE", branchName: "Aeronautical Engineering", generalMerit: 59300, obc2A: 67400, obc3A: 63100, sc: 96800, st: 104200, comedkRank: 64800 },
  { branchCode: "ME", branchName: "Mechanical Engineering", generalMerit: 82400, obc2A: 94100, obc3A: 88500, sc: 118400, st: 126900, comedkRank: 81200 },
  { branchCode: "NT", branchName: "Nano Technology", generalMerit: 88900, obc2A: 102400, obc3A: 95400, sc: 124500, st: 132000, comedkRank: 87500 }
];

export const RECRUITERS_DATA: Recruiter[] = [
  { name: "Infosys", category: "Tier 1 Global", topPackage: "₹9.5 LPA", recruitsCount: 148 },
  { name: "Tata Consultancy Services (TCS)", category: "Tier 1 Global", topPackage: "₹11.5 LPA", recruitsCount: 162 },
  { name: "Cognizant", category: "IT & Consulting", topPackage: "₹8.5 LPA", recruitsCount: 110 },
  { name: "Wipro Technologies", category: "IT & Consulting", topPackage: "₹7.2 LPA", recruitsCount: 88 },
  { name: "Bosch Global Software", category: "Core Engineering", topPackage: "₹14.0 LPA", recruitsCount: 42 },
  { name: "Mercedes-Benz R&D", category: "Core Engineering", topPackage: "₹18.0 LPA", recruitsCount: 18 },
  { name: "Novigo Solutions", category: "Startups & FinTech", topPackage: "₹10.5 LPA", recruitsCount: 54 },
  { name: "Robosoft Technologies", category: "IT & Consulting", topPackage: "₹12.0 LPA", recruitsCount: 36 },
  { name: "Capgemini", category: "IT & Consulting", topPackage: "₹7.8 LPA", recruitsCount: 76 },
  { name: "Mindtree / LTIMindtree", category: "IT & Consulting", topPackage: "₹9.0 LPA", recruitsCount: 45 },
  { name: "SLK Software", category: "IT & Consulting", topPackage: "₹8.0 LPA", recruitsCount: 38 },
  { name: "Global Shipping & Maritime Fleet", category: "Core Engineering", topPackage: "₹36.0 LPA", recruitsCount: 28 }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Preetham Nayak",
    batch: "Class of 2024",
    branch: "B.E. Computer Science & Engineering",
    placedCompany: "Amazon AWS (Cloud Engineer)",
    package: "₹42.0 LPA",
    quote: "The practical coding bootcamps, faculty guidance, and 24x7 computing lab access at SIT Valachil laid the concrete foundation for my AWS career. The training and placement cell stood by every student until we cracked dream offers."
  },
  {
    name: "Ananya S. Rao",
    batch: "Class of 2024",
    branch: "B.E. Artificial Intelligence & ML",
    placedCompany: "Mercedes-Benz R&D India",
    package: "₹18.0 LPA",
    quote: "Working directly on NVIDIA GPU clusters and computer vision projects during our 3rd year gave me an edge during automotive ADAS interviews. SIT Mangalore provides a serene, focused hilltop environment to build real technical depth."
  },
  {
    name: "Mohammed Zeeshan",
    batch: "Class of 2023",
    branch: "B.E. Marine Engineering",
    placedCompany: "Anglo-Eastern Ship Management",
    package: "₹36.0 LPA ($4,200/mo)",
    quote: "SIT's full-scale Ship-in-Campus and hands-on propulsion simulator prepare you directly for the high seas. I transitioned into the Merchant Navy with complete confidence and cleared all MEO Class IV exams on my first attempt."
  },
  {
    name: "Rashmi K. Shetty",
    batch: "Class of 2024",
    branch: "B.E. Electronics & Communication",
    placedCompany: "Bosch Global Software Technologies",
    package: "₹14.0 LPA",
    quote: "The Cadence VLSI tools and Embedded IoT labs made all the difference. Our professors encouraged us to participate in national hackathons, winning accolades for our autonomous agricultural drone system."
  }
];

export const BUS_ROUTES_DATA: BusRouteInfo[] = [
  {
    routeNumber: 1,
    routeName: "Surathkal - Kulai - Baikampady - SIT Valachil",
    stops: ["Surathkal Junction (07:15)", "NITK Gate", "Kulai", "Honnakatte", "Baikampady", "Kottara Chowki", "Nanthoor", "Valachil Campus (08:35)"],
    departureTime: "07:15 AM"
  },
  {
    routeNumber: 2,
    routeName: "Mangalore City - Hampankatta - Kankanady - SIT",
    stops: ["State Bank (07:30)", "Hampankatta", "Jyothi Circle", "Kankanady", "Pumpwell", "Padil", "Adyar", "Valachil Campus (08:35)"],
    departureTime: "07:30 AM"
  },
  {
    routeNumber: 3,
    routeName: "Kasaragod (Kerala) - Manjeshwar - Talapady - SIT",
    stops: ["Kasaragod KSRTC Stand (06:50)", "Kumbla", "Uppala", "Manjeshwar", "Talapady", "Thokkottu", "Pumpwell", "Valachil Campus (08:40)"],
    departureTime: "06:50 AM"
  },
  {
    routeNumber: 4,
    routeName: "Puttur - Mani - Kalladka - B.C. Road - SIT",
    stops: ["Puttur Bus Stand (07:05)", "Kombettu", "Mani Junction", "Kalladka", "B.C. Road Flyover", "Farangipete", "Valachil Campus (08:35)"],
    departureTime: "07:05 AM"
  },
  {
    routeNumber: 5,
    routeName: "Udupi - Kaup - Mulki - SIT Valachil",
    stops: ["Udupi City Bus Stand (06:45)", "Katapadi", "Kaup Light House Cross", "Padubidri", "Mulki", "Kottara", "Valachil Campus (08:40)"],
    departureTime: "06:45 AM"
  }
];

export const FAQ_DATA = [
  {
    question: "What is the KCET and COMEDK college code for Srinivas Institute of Technology?",
    answer: "The Karnataka CET (KCET) Counseling Code is E153. The COMEDK Entrance Examination Code is E098. For Postgraduate MBA & MCA admissions through PGCET, the code is B178."
  },
  {
    question: "What are the eligibility criteria for B.E. admission?",
    answer: "Candidates must have passed 10+2 / 2nd PUC or equivalent examination with minimum 45% aggregate in Physics and Mathematics as compulsory subjects, along with Chemistry, Biotechnology, Biology, Computer Science, or Electronics (40% aggregate for Karnataka SC, ST, and OBC candidates). For Marine Engineering, DG Shipping rules require 60% aggregate in PCM and 50% in English."
  },
  {
    question: "How can I apply for Management Quota / NRI seats?",
    answer: "Management and NRI quota admissions are open directly on merit basis. Candidates can submit their application online through this portal, call the Admission Helpline at +91 94485 97543, or visit the Admission Cell at the SIT Valachil campus with 10th & 12th original mark sheets for spot provisional allotment."
  },
  {
    question: "Are merit scholarships available for high-scoring students?",
    answer: "Yes! Under the A. Shama Rao Foundation Merit Scholarship scheme, students scoring above 95% in PCM aggregate receive a 50% waiver on tuition fees. Students scoring 90%–94.9% receive a 30% tuition fee waiver, and those with 85%–89.9% receive a 15% waiver. Scholarships are also awarded for state/national sports achievements."
  },
  {
    question: "What are the hostel and transport facilities at the Valachil campus?",
    answer: "SIT features separate, secure residential hostels for boys and girls with 24x7 Wi-Fi, round-the-clock security, backup power, solar hot water, gymnasium, and hygienic vegetarian and non-vegetarian mess facilities serving coastal Karnataka and multi-cuisine meals. For day scholars, a dedicated fleet of 25+ college buses operates across Mangaluru, Surathkal, Udupi, Kasaragod, Puttur, and Bantwal."
  },
  {
    question: "Is Srinivas Institute of Technology affiliated with VTU and accredited?",
    answer: "Yes, SIT Mangalore is permanently affiliated with Visvesvaraya Technological University (VTU), Belagavi, approved by AICTE, New Delhi, recognized by the Government of Karnataka, and accredited by NAAC with Grade 'A'."
  }
];

export const INITIAL_DEMO_APPLICATIONS: ApplicationRecord[] = [
  {
    applicationId: "SIT-2026-8491",
    submissionDate: "2026-03-24",
    candidateName: "Aditya Kumar Shenoy",
    email: "aditya.shenoy@gmail.com",
    phone: "9845123456",
    dob: "2008-04-12",
    gender: "Male",
    category: "General Merit (GM)",
    domicile: "Karnataka",
    aadharNumber: "4567 8912 3456",
    quota: "KCET",
    programFirstChoice: "ai-ml",
    programSecondChoice: "cse",
    pcmPercentage: 92.5,
    entranceExam: "KCET 2026",
    entranceRank: "18450",
    tenthPercentage: 94.2,
    twelfthBoard: "Karnataka State Pre-University Board",
    parentName: "K. Sudhakar Shenoy",
    parentPhone: "9845198765",
    parentOccupation: "Senior Bank Manager",
    annualIncome: "₹9,50,000",
    address: "Flat 402, Sea Pearl Enclave, Kadri Hills",
    city: "Mangaluru",
    state: "Karnataka",
    pincode: "575004",
    hostelRequired: false,
    transportRequired: true,
    busRoute: "Route 2 - Hampankatta to SIT",
    status: "PROVISIONAL_SEAT_OFFERED",
    provisionalBranch: "Artificial Intelligence & Machine Learning (AI & ML)",
    remarks: "Provisional allotment approved under GM Category. Merit Scholarship of 30% approved. Please report to Admission Cell with original documents by April 15, 2026."
  },
  {
    applicationId: "SIT-2026-6120",
    submissionDate: "2026-03-28",
    candidateName: "Sneha Susan Thomas",
    email: "sneha.thomas@gmail.com",
    phone: "9447112233",
    dob: "2008-08-19",
    gender: "Female",
    category: "General Merit (GM)",
    domicile: "Kerala (Non-Karnataka)",
    aadharNumber: "7891 2345 6789",
    quota: "MANAGEMENT",
    programFirstChoice: "cse",
    programSecondChoice: "cyber-security",
    pcmPercentage: 88.0,
    entranceExam: "KEAM / JEE Main",
    entranceRank: "91.2 %ile",
    tenthPercentage: 91.5,
    twelfthBoard: "CBSE New Delhi",
    parentName: "Thomas Kurian",
    parentPhone: "9447009988",
    parentOccupation: "Chartered Accountant",
    annualIncome: "₹12,00,000",
    address: "Grace Villa, Near Civil Station, Vidyanagar",
    city: "Kasaragod",
    state: "Kerala",
    pincode: "671123",
    hostelRequired: true,
    transportRequired: false,
    status: "CONFIRMED",
    provisionalBranch: "Computer Science & Engineering (CSE)",
    remarks: "Admission confirmed under Management Merit Quota. Girls' Hostel Room allocated (Block B - Double Sharing)."
  },
  {
    applicationId: "SIT-2026-3044",
    submissionDate: "2026-04-01",
    candidateName: "Kiran R. Poojary",
    email: "kiran.poojary@gmail.com",
    phone: "9108345678",
    dob: "2008-11-05",
    gender: "Male",
    category: "OBC Category 2A",
    domicile: "Karnataka",
    aadharNumber: "2345 6789 1234",
    quota: "KCET",
    programFirstChoice: "marine",
    programSecondChoice: "mechanical",
    pcmPercentage: 81.3,
    entranceExam: "KCET 2026",
    entranceRank: "34800",
    tenthPercentage: 85.0,
    twelfthBoard: "Karnataka State Pre-University Board",
    parentName: "Ramesh Poojary",
    parentPhone: "9108300000",
    parentOccupation: "Business / Entrepreneur",
    annualIncome: "₹4,50,000",
    address: "Bikarnakatte Cross, Kulshekar Post",
    city: "Mangaluru",
    state: "Karnataka",
    pincode: "575005",
    hostelRequired: false,
    transportRequired: true,
    busRoute: "Route 2 - Mangalore City to SIT",
    status: "VERIFICATION_PENDING",
    provisionalBranch: "Marine Engineering (DG Shipping Track)",
    remarks: "Application received. Verification of DG Shipping Medical Fitness Certificate and 12th English score is in progress."
  }
];
