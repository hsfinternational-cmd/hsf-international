import { 
  Briefcase, 
  Settings, 
  Cpu, 
  Sprout, 
  Truck, 
  Droplet, 
  Plane,
  Wrench,
  Globe
} from 'lucide-react';
import { NavItem, ServiceItem, StatItem, ProjectItem, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Cases', path: '/cases' }, // Placeholder route
  { label: 'Media', path: '/media' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Financial Planning',
    description: 'Expert financial strategies to optimize your business growth and stability.',
    icon: Briefcase,
  },
  {
    title: 'Project Management',
    description: 'End-to-end project handling ensuring timely delivery and quality results.',
    icon: Settings,
  },
  {
    title: 'ICT Services',
    description: 'Cutting-edge technology solutions for modern business infrastructures.',
    icon: Cpu,
  },
  {
    title: 'Agriculture & Agrobusiness',
    description: 'Sustainable agricultural practices and business development strategies.',
    icon: Sprout,
  },
  {
    title: 'Supply & Maintenance',
    description: 'Reliable vehicle supply and comprehensive maintenance services.',
    icon: Wrench,
  },
  {
    title: 'Engineering',
    description: 'Civil and structural engineering solutions for diverse infrastructure needs.',
    icon: Settings,
  },
  {
    title: 'Oil and Gas',
    description: 'Specialized services for the energy sector including logistics and support.',
    icon: Droplet,
  },
  {
    title: 'Tourism',
    description: 'Hospitality and travel management services for the tourism industry.',
    icon: Globe,
  },
  {
    title: 'Logistics',
    description: 'Efficient supply chain and logistics management for global operations.',
    icon: Truck,
  },
];

export const STATS: StatItem[] = [
  { label: 'Happy Clients', value: '500', suffix: '+' },
  { label: 'Projects Completed', value: '1200', suffix: '+' },
  { label: 'Years Experience', value: '15', suffix: '+' },
  { label: 'Team Members', value: '80', suffix: '+' },
];

export const PROJECTS: ProjectItem[] = [
  { title: 'National Infrastructure Upgrade', category: 'Engineering', image: 'https://picsum.photos/800/600?random=1' },
  { title: 'Agri-Tech Implementation', category: 'ICT Services', image: 'https://picsum.photos/800/600?random=2' },
  { title: 'Corporate Finance Restructuring', category: 'Financing', image: 'https://picsum.photos/800/600?random=3' },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What industries does HSF operate in?',
    answer: 'HSF International operates across a wide range of industries including Finance, ICT, Engineering, Agriculture, Oil & Gas, and Tourism.',
  },
  {
    question: 'How can I collaborate with HSF?',
    answer: 'We are always open to partnerships. You can reach out to our business development team via the Contact Us page or call our hotline.',
  },
  {
    question: 'What sets HSF apart from competitors?',
    answer: 'Our commitment to quality without compromise, innovation-driven solutions, and a diverse team of experts set us apart in delivering excellence.',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Mr. Hussein on the Future of Sustainable Logistics in East Africa",
    excerpt: "Director Hussein shares his insights on how green supply chains are reshaping the logistics landscape in the region.",
    date: "Oct 15, 2024",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    category: "Logistics"
  },
  {
    id: 2,
    title: "HSF International: Driving Innovations in Civil Engineering",
    excerpt: "A look at the latest technologies HSF is deploying to drive infrastructure development and safety in Kampala.",
    date: "Sep 22, 2024",
    author: "Jane Smith",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    category: "Engineering"
  },
  {
    id: 3,
    title: "Maximizing ROI: Financial Strategies by HSF Experts",
    excerpt: "Key strategies for businesses to navigate economic uncertainties and ensure growth, as presented at the HSF Annual Summit.",
    date: "Aug 10, 2024",
    author: "Robert Fox",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    category: "Finance"
  }
];

export const MEDIA_ITEMS = [
  {
    id: 1,
    type: 'article',
    title: 'Giving Back: HSF Partners with Fairfield Charity Organization',
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop',
    link: 'https://fairfieldcharity.fairfield19622.workers.dev/',
    source: 'CSR Initiative'
  },
  {
    id: 2,
    type: 'article',
    title: 'Hussein: "We Are Building the Future of Uganda"',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
    link: '#', 
    source: 'The Daily Monitor'
  },
  {
    id: 3,
    type: 'article',
    title: 'HSF International Wins "Best Engineering Consultant" 2024',
    url: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2064&auto=format&fit=crop',
    link: '#',
    source: 'Business Week'
  },
  {
    id: 4,
    type: 'image',
    title: 'Site Inspection: Jinja Bridge Project',
    url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1887&auto=format&fit=crop',
    link: '',
    source: 'Gallery'
  },
  {
    id: 5,
    type: 'image',
    title: 'Annual Stakeholders Meeting with Mr. Hussein',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    link: '',
    source: 'Gallery'
  },
  {
    id: 6,
    type: 'image',
    title: 'Regional ICT Summit Sponsorship',
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
    link: '',
    source: 'Gallery'
  }
];

export const CONTACT_INFO = {
  phone: '+256 393 000 578',
  email: 'info@hsf.co.ug',
  address: '8th Floor, Arie Towers, Kampala',
};