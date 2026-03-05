import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  description?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: 'Education' | 'Healthcare' | 'Welfare' | 'Infrastructure';
  summary: string;
  description: string;
  image: string;
  goal?: string;
  raised?: string;
}

export interface CEOProfile {
  name: string;
  title: string;
  designation: string;
  image: string;
  education: string[];
  experience: string[];
  message: string;
}

export interface BankDetails {
  bankName: string;
  accountTitle: string;
  accountNumber: string;
  iban: string;
  swift?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualification: string;
  image: string;
  availability?: string;
}