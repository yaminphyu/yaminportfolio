import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const SITE_NAME = 'My Portfolio';
export const SITE_DESCRIPTION = 'Welcome to my personal portfolio website showcasing my skills and projects as a web developer.';
export const THEME = process.env.NEXT_PUBLIC_THEME;
export const LINKEDIN_PROFILE = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE;
export const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE;

export const NAV_LIST = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About me',
    href: '/about-me',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'My Work',
    href: '/my-work',
  },
  {
    name: 'Contact me',
    href: '/contact-me',
  },
];

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
];

export const LANGUAGES = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
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
]