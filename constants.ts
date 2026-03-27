import { 
  HeartPulse, 
  Stethoscope, 
  Bed, 
  Users, 
  Baby, 
  Activity,
  Droplets,
  BookOpen,
  Building
} from 'lucide-react';
import { Project, CEOProfile, BankDetails, ServiceItem, StatItem, Doctor } from './types';

export const APP_NAME = "FAT Hospital";
export const APP_FULL_NAME = "Fayyaz Ur Rehman Alvi Trust Hospital";

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Hospital', href: '/hospital' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const BANK_DETAILS: BankDetails = {
  bankName: "MCB Islamic Bank",
  accountTitle: "FATH Health Clinic",
  accountNumber: "2251004614710003",
  iban: "PK96 MCIB 2251 0046 1471 0003",
};

export const CONTACT_INFO = {
  address: "Opposite Royal Samah Bypass, Mansehra, KPK, Pakistan",
  phone: "0997-389545 ",
  emergency: "+92300-1070309",
  email: "fayyazurrehmantrust@gmail.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.6749755872568!2d73.21862614285214!3d34.33266122036597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3d69fa3e8527%3A0x82770c7d9912eecf!2sFayyaz%20ur%20rahman%20trust!5e0!3m2!1sen!2s!4v1771410609774!5m2!1sen!2s"
};

export const HOSPITAL_STATS: StatItem[] = [
  { label: "Expert Doctors", value: "5+", icon: Stethoscope },
  { label: "Nursing Staff", value: "10+", icon: Users },
  { label: "Patient Beds", value: "16+", icon: Bed },
  { label: "Daily OPD", value: "80+", icon: Activity },
];

export const HOSPITAL_SERVICES: ServiceItem[] = [
  { title: "24/7 Emergency", description: "Fully equipped trauma center with rapid response teams.", icon: HeartPulse },
  { title: "Pediatrics", description: "Specialized care for infants, children, and adolescents.", icon: Baby },
  { title: "Maternity", description: "Comprehensive labor and delivery suites ensuring safe births.", icon: Users },
  { title: "Laboratory", description: "Advanced diagnostic pathology and testing services.", icon: Stethoscope },
  { title: "Pharmacy", description: "In-house pharmacy providing quality medicines 24/7.", icon: Building },
  { title: "Medical OPD", description: "General outpatient consultations for diagnosis, treatment, and follow-up care.", icon: Activity },
  { title: "Gynecology", description: "Specialized care for women’s health, pregnancy, and reproductive services.", icon: Users },
  { title: "Physiotherapy", description: "Rehabilitation and physical therapy services to restore movement and reduce pain.", icon: HeartPulse },
  { title: "Dentistry", description: "Comprehensive dental care including diagnosis, treatment, and oral health services.", icon: Users, },
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-1",
    name: "Dr. Sabeela Khurshid",
    specialization: "Physiotherapist",
    qualification: "DPT (Physiotherapy)",
    image: "/doctors/dr-sabeela.jpeg",
  },
  {
    id: "dr-2",
    name: "Dr. Asma",
    specialization: "Medical Officer",
    qualification: "MBBS",
    image: "/doctors/dr-asma.jpeg",
  },
  {
    id: "dr-3",
    name: "Dr. Khizra",
    specialization: "Gynecologist",
    qualification: "MCPS (Gynecology)",
    image: "/doctors/dr-khizra.jpeg",
  },
  {
    id: "dr-4",
    name: "Dr. Zubair",
    specialization: "Medical Officer",
    qualification: "MBBS",
    image: "/doctors/dr-zubair.jpeg",
  },
  {
    id: "dr-5",
    name: "Dr. Gulzar",
    specialization: "Medical Officer",
    qualification: "MBBS",
    image: "/doctors/dr-gulzar.png",
  }
];

export const PROJECTS: Project[] = [
  {
    id: "darul-qura",
    title: "Darul Qura Madrasa Banat",
    category: "Education",
    summary: "Empowering female students through religious and contemporary education.",
    description: "Darul Qura Madrasa focuses on providing free education to girls in underprivileged areas. We combine traditional Islamic studies with modern curriculum to ensure a well-rounded upbringing.",
    image: "/images/darul-qura.png",
  },
  {
    id: "iqra-virtual-school",
    title: "Iqra Virtual School – Mansehra",
    category: "Education",
    summary: "Bringing quality education to remote areas through digital classrooms.",
    description: "Leveraging technology to bridge the gap in education. Our virtual school connects expert teachers from cities to students in remote villages of Mansehra.",
    image: "/images/iqra-virtual-school.png",
  },
  {
    id: "water-projects",
    title: "Clean Water Project",
    category: "Infrastructure",
    summary: "Installing water pumps and wells in drought-hit regions.",
    description: "Access to clean drinking water is a basic human right. We have installed over 500 hand pumps and deep wells, serving thousands of families daily.",
    image: "/images/water-projects.png",
  },
  {
    id: "trust-foundation",
    title: "FAT Foundation",
    category: "Welfare",
    summary: "General welfare, food distribution, and orphan support.",
    description: "The backbone of our charitable activities. The foundation manages ration drives, orphan sponsorship programs, and emergency relief efforts.",
    image: "/images/trust-foundation.png",
  },

];
export const FOUNDER_PROFILE: CEOProfile = {
  name: "Qari Fayyaz ur Rehman Alvi",
  title: "Founder & Spiritual Leader",
  designation: "Founder, Markazi Darul Qurra Namak Mandi (Peshawar)",
  image: "/images/founder.png", // put your founder image in: public/images/founder.png
  education: [
    "Advanced Tajweed & Qirat mentorship",
    "Recognized as a mentor of Qur’an teachers (Teacher of Teachers)",
    "Decades of service in Qur’an education and Islamic training",
  ],
  experience: [
    "Founder, Markazi Darul Qurra Namak Mandi Peshawar",
    "Established female madrasa in Mansehra",
    "Patron, Iqra Virtual School (Mansehra)",
    "Founded Fayyaz ur Rehman Alvi Trust & Hospital",
    "Clean water + disaster relief initiatives (floods, earthquakes, landslides)",
  ],
  message:
    "Our mission is to spread the light of the Holy Qur’an, educate the next generation, and serve humanity with sincerity, compassion, and dedication.",
};

export const CEO_PROFILE: CEOProfile = {
  name: "Dr. Hussain Ahmad Alvi",
  title: "Chief Executive Officer (CEO)",
  designation: "BDS, RDS | HOD (AIMNC) | CEO, FAT Hospital",
  image: "/images/ceo.jpeg", // put image here: public/images/ceo.png
  education: [
    "BDS — Khyber Medical University (KMU), Peshawar",
    "Registered Dental Surgeon (RDS), Pakistan",
  ],
  experience: [
    "CEO — Fayyaz-ur-Rehman Alvi Trust Foundation & Hospital",
    "Head of Department — Akbar Institute of Medical Sciences & Nursing College (AIMNC), Mansehra (3 years)",
    "Clinical practice + healthcare leadership",
  ],
  message:
    "Healthcare is not a privilege. It is a basic human right. Our mission is to ensure no patient is deprived of treatment due to financial hardship, and to deliver care with compassion, dignity, and excellence.",
};