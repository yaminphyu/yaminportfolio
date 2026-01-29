import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const SITE_NAME = 'My Portfolio';
export const SITE_DESCRIPTION = 'Welcome to my personal portfolio website showcasing my skills and projects as a web developer.';
export const THEME = process.env.NEXT_PUBLIC_THEME;
export const LINKEDIN_PROFILE = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE;
export const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE;

type NavItem = {
  name: string;
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
    description: 'Developed and maintained multiple client-facing web applications with ReactJS, NextJS, VueJS, JavaScript, and TypeScript. Built reusable UI component libraries. Converted complex Figma designs into pixel-perfect and responsive UIs using Tailwind CSS, Material UI, and Bootstrap. Collaborated with the Backend team to integrate RESTful APIs. Collaborated closely with product managers, UX designers, and Testers to deliver high-quality features. Optimized web performance, reducing bundle size and improving Lighthouse scores. Integrated third-party libraries (Web Socket, Chat Woot, and Live Chat) to extend functionality.',
    logo: '/work-exp/everlast-logo.jpg',
    companyName: 'Everlast Information & App Dev Co., Ltd',
    companyUrl: 'https://examplecompany1.com',
    location: 'Cambodia',
  },
  {
    id: 2,
    year: 'Oct 2022 - March 2024',
    role: 'Web Developer',
    description: 'Develop a mobile application(Htwet Toe) designed to enhance the convenience of farmers, accompanied by the establishment of an administrative panel to oversee maintenance, address software defects, and integrate progressive features.',
    logo: '/work-exp/villagelink-logo.png',
    companyName: 'Village Link | Awba Entity',
    companyUrl: 'https://examplecompany1.com',
    location: 'Myanmar',
  },
  {
    id: 3,
    year: 'DEC 2020 - Sep 2022',
    role: 'Web Developer',
    description: 'Effectively oversee and engage with clients, both from private enterprises and government entities, to address their business requirements by delivering tailored IT solutions. Development of applications, websites, and CMS catering to the diverse needs of our clients.',
    logo: '/work-exp/agga-logo.webp',
    companyName: 'AGGA.IO Co., Ltd',
    companyUrl: 'https://examplecompany1.com',
    location: 'Myanmar',
  },
  {
    id: 4,
    year: 'Sep 2019 - Sep 2022',
    role: 'Web Developer',
    description: 'I built an API under the guidance of my lead developer for an e-commerce website focused on selling groceries. The functionalities include browsing products, managing the shopping cart (adding/removing items), marking favorites, and calculating items.',
    logo: '',
    companyName: 'Micro Service Myanmar Co., Ltd',
    companyUrl: 'https://examplecompany1.com',
    location: 'Myanmar',
  },
] as const;