import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SearchResult {
  title: string;
  description: string;
  category: 'Service' | 'Project' | 'FAQ' | 'Page';
  path: string;
}