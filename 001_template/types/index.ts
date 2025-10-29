// Portfolio Types
export interface PortfolioCompany {
  id: string;
  name: string;
  logo?: string;
  sector: string;
  investmentYear: number;
  description: string;
  website?: string;
  status: 'active' | 'exited';
  exitYear?: number;
  exitType?: string;
  investmentSize?: string;
  image?: string;
}

export type PortfolioSector =
  | 'Technology'
  | 'Healthcare'
  | 'Financial Services'
  | 'Consumer'
  | 'Industrial'
  | 'All';

// Leadership Types
export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  ticketSize?: string;
  focus: string[];
}

// News/Insights Types
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  category: string;
  image?: string;
  slug: string;
  readTime?: string;
}

export type ArticleCategory =
  | 'Market Analysis'
  | 'Thought Leadership'
  | 'Company News'
  | 'Industry Insights'
  | 'All';

// Contact Form Types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType: string;
  message: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}
