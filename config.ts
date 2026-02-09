import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Messages } from "./types";

export const SITE_NAME = 'My Portfolio' as string;
export const SITE_DESCRIPTION = 'Welcome to my personal portfolio website showcasing my skills and projects as a web developer.' as string;
export const THEME = process.env.NEXT_PUBLIC_THEME as string;
export const NAME = process.env.NEXT_PUBLIC_NAME as string;
export const LINKEDIN_PROFILE = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE as string;
export const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE as string;
export const EMAIL_USER = process.env.NEXT_PUBLIC_EMAIL_USER as string;
export const EMAIL_PASS = process.env.NEXT_PUBLIC_EMAIL_PASS as string;
export const RESEND_API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY as string;

type NavItem = {
  name: keyof Messages;
  href: string;
  id: string;
};

export const NAV_LIST: NavItem[]  = [
  {
    name: 'Home',
    href: '/',
    id: 'hero-section',
  },
  {
    name: 'About me',
    href: '/about-me',
    id: 'about-me',
  },
  {
    name: 'My Work',
    href: '/my-work',
    id: 'my-work',
  },
  {
    name: 'Contact me',
    href: '/contact-me',
    id: 'contact-me',
  },
] as const;

export const ABOUT_ME = [
  {
    name: 'Education',
    description: 'BE-IT from Technological University(HmawBi)',
    icon: faGraduationCap,
  },
  {
    name: 'Projects',
    description: 'More than 50+ projects completed successfully.',
    icon: faBriefcase,
  },
] as const;

export const LANGUAGES = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
  'Material UI',
  'Chakra UI',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue.js',
  'PHP',
  'Laravel',
];

export const SOCIAL_MEDIA = [
  {
    name: 'GitHub',
    url: GITHUB_PROFILE
  },
  {
    name: 'LinkedIn',
    url: LINKEDIN_PROFILE
  },
] as const;

export const WORK_EXPERIENCES = [
  {
    id: 1,
    year: 'April 2024 - Present',
    role: 'Frontend Developer',
    description: 'first job exp',
    logo: '/work-exp/everlast-logo.jpg',
    companyName: 'Everlast Information & App Dev Co., Ltd',
    companyUrl: 'https://examplecompany1.com',
    location: 'Cambodia',
  },
  {
    id: 2,
    year: 'Oct 2022 - March 2024',
    role: 'Web Developer',
    description: 'sec job exp',
    logo: '/work-exp/villagelink-logo.png',
    companyName: 'Village Link | Awba Entity',
    companyUrl: 'https://examplecompany1.com',
    location: 'Myanmar',
  },
  {
    id: 3,
    year: 'DEC 2020 - Sep 2022',
    role: 'Web Developer',
    description: 'third job exp',
    logo: '/work-exp/agga-logo.webp',
    companyName: 'AGGA.IO Co., Ltd',
    companyUrl: 'https://examplecompany1.com',
    location: 'Myanmar',
  },
  {
    id: 4,
    year: 'Sep 2019 - Sep 2022',
    role: 'Web Developer',
    description: 'fourth job exp',
    logo: '',
    companyName: 'Micro Service Myanmar Co., Ltd',
    companyUrl: 'https://examplecompany1.com',
    location: 'Myanmar',
  },
] as const;

export const SYSTEM_LANGUAGES = [
  { key: 'en', value: 'EN' },
  { key: 'mm', value: 'MM' },
] as const;
