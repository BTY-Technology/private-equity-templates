import {
  PortfolioCompany,
  LeadershipMember,
  Service,
  Article,
  OfficeLocation,
  NavItem,
} from '@/types';

// Navigation
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

// Portfolio Companies
export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: '1',
    name: 'TechVision Systems',
    sector: 'Technology',
    investmentYear: 2021,
    description:
      'Leading enterprise SaaS platform for workforce management and optimization.',
    status: 'active',
    investmentSize: '$45M',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&fit=crop&crop=edges',
  },
  {
    id: '2',
    name: 'HealthCore Innovations',
    sector: 'Healthcare',
    investmentYear: 2020,
    description:
      'Telemedicine and digital health platform serving over 2M patients nationwide.',
    status: 'exited',
    exitYear: 2023,
    exitType: 'Strategic Acquisition',
    investmentSize: '$38M',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop&crop=edges',
  },
  {
    id: '3',
    name: 'FinTech Solutions Group',
    sector: 'Financial Services',
    investmentYear: 2022,
    description:
      'Payment processing and financial infrastructure for SMBs across North America.',
    status: 'active',
    investmentSize: '$52M',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=800&fit=crop&crop=edges',
  },
  {
    id: '4',
    name: 'EcoManufacture Inc.',
    sector: 'Industrial',
    investmentYear: 2019,
    description:
      'Sustainable manufacturing solutions with proprietary green technology.',
    status: 'active',
    investmentSize: '$65M',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop&crop=edges',
  },
  {
    id: '5',
    name: 'RetailNext Commerce',
    sector: 'Consumer',
    investmentYear: 2021,
    description:
      'Next-generation e-commerce platform with AI-powered personalization.',
    status: 'active',
    investmentSize: '$42M',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=800&fit=crop&crop=edges',
  },
  {
    id: '6',
    name: 'DataStream Analytics',
    sector: 'Technology',
    investmentYear: 2018,
    description:
      'Advanced data analytics and business intelligence for enterprise clients.',
    status: 'exited',
    exitYear: 2022,
    exitType: 'IPO',
    investmentSize: '$55M',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&crop=edges',
  },
];

// Leadership Team
export const leadershipTeam: LeadershipMember[] = [
  {
    id: '1',
    name: 'Jonathan Sterling',
    title: 'Founder & Managing Partner',
    bio: 'Jonathan brings over 25 years of private equity experience, having led investments totaling $4B across technology and healthcare sectors. Prior to founding Apex Capital Partners, he was a Partner at Goldman Sachs Private Capital.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    title: 'Managing Partner',
    bio: 'Sarah specializes in growth equity investments in the technology sector. She has over 20 years of experience in venture capital and private equity, with a track record of successful exits including three IPOs.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '3',
    name: 'Michael Roberts',
    title: 'Partner, Healthcare',
    bio: "Michael leads Apex's healthcare investment practice. He previously served as CEO of a healthcare technology company and has deep operational expertise in the sector.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '4',
    name: 'Emily Tran',
    title: 'Partner, Operations',
    bio: 'Emily oversees portfolio company operations and value creation initiatives. She brings 15 years of consulting experience from McKinsey & Company.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
    linkedin: 'https://linkedin.com',
  },
];

// Services
export const services: Service[] = [
  {
    id: '1',
    title: 'Growth Equity',
    description:
      'Partnering with high-growth companies to accelerate expansion and scale operations.',
    ticketSize: '$30M - $100M',
    focus: [
      'Minority and majority investments',
      'Revenue growth acceleration',
      'Market expansion support',
      'Strategic advisory',
    ],
  },
  {
    id: '2',
    title: 'Buyout Investments',
    description:
      'Control investments in established companies with strong market positions.',
    ticketSize: '$50M - $200M',
    focus: [
      'Management buyouts',
      'Corporate carve-outs',
      'Operational improvements',
      'Strategic repositioning',
    ],
  },
  {
    id: '3',
    title: 'Sector Focus',
    description:
      'Deep industry expertise in technology, healthcare, and financial services.',
    focus: [
      'B2B SaaS and enterprise software',
      'Healthcare technology and services',
      'Fintech and payments',
      'Industrial technology',
    ],
  },
  {
    id: '4',
    title: 'Value Creation',
    description:
      'Hands-on operational support to drive sustainable value creation.',
    focus: [
      'Strategic planning',
      'M&A execution',
      'Talent acquisition',
      'Digital transformation',
    ],
  },
];

// Articles
export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Enterprise SaaS: Trends Shaping 2024',
    excerpt:
      'Exploring the key technological and market forces driving the next wave of enterprise software innovation.',
    content: '',
    author: 'Sarah Chen',
    publishedDate: '2024-01-15',
    category: 'Market Analysis',
    slug: 'future-of-enterprise-saas-2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'Healthcare Technology: A $500B Opportunity',
    excerpt:
      'Why we believe digital health will fundamentally transform care delivery over the next decade.',
    content: '',
    author: 'Michael Roberts',
    publishedDate: '2024-01-08',
    category: 'Industry Insights',
    slug: 'healthcare-technology-opportunity',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'Building Enduring Value in Private Markets',
    excerpt:
      'Our approach to long-term value creation through operational excellence and strategic growth.',
    content: '',
    author: 'Jonathan Sterling',
    publishedDate: '2023-12-20',
    category: 'Thought Leadership',
    slug: 'building-enduring-value',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'Apex Capital Partners Announces $800M Fund IV',
    excerpt:
      'We are pleased to announce the successful close of our fourth fund, exceeding our target.',
    content: '',
    author: 'Apex Capital Partners',
    publishedDate: '2023-12-01',
    category: 'Company News',
    slug: 'fund-iv-announcement',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
  },
];

// Office Locations
export const officeLocations: OfficeLocation[] = [
  {
    id: '1',
    city: 'New York',
    address: '350 Park Avenue, 15th Floor\nNew York, NY 10022',
    phone: '+1 (212) 555-0100',
    email: 'newyork@apexcapital.com',
  },
  {
    id: '2',
    city: 'San Francisco',
    address: '101 California Street, Suite 2900\nSan Francisco, CA 94111',
    phone: '+1 (415) 555-0200',
    email: 'sanfrancisco@apexcapital.com',
  },
  {
    id: '3',
    city: 'London',
    address: '1 Finsbury Square\nLondon EC2A 1AE, United Kingdom',
    phone: '+44 20 7123 4567',
    email: 'london@apexcapital.com',
  },
];
