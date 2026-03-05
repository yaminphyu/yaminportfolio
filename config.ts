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
    name: 'Projects',
    href: '/projects',
    id: 'projects',
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

export const PROJECTS = [
  {
    slug: 'wedding-invitation-website',
    title: 'Wedding Invitation Website',
    url: 'https://kaung-hanny-wedding-invitation.vercel.app/',
    shortDescription: 'Analytics and operations dashboard for products, sales, and orders.',
    detailParagraphs: [
      'Developed a modern and responsive Wedding Invitation Website to share event details with guests in a convenient digital format. The website presents important information such as the wedding schedule, venue, and celebration details in an elegant layout.',
      'The project was built using Next.js for fast performance and routing, and Tailwind CSS for creating a clean, responsive design. Guests can easily send their attendance confirmation through a Google Form integration, which allows the couple to collect responses efficiently.',
      'The website focuses on simplicity, mobile-friendly design, and a pleasant user experience to make it easy for guests to access wedding information anytime.'
    ],
    languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Forms (RSVP / response collection)'],
    companyName: 'Personal development',
    developmentTime: 'Aug 2024 - Sep 2024',
    image: [
      '/projects/wedding-invitation-website/wedding-1.png',
      '/projects/wedding-invitation-website/wedding-2.png',
      '/projects/wedding-invitation-website/wedding-3.png',
      '/projects/wedding-invitation-website/wedding-4.png',
      '/projects/wedding-invitation-website/wedding-5.png',
      '/projects/wedding-invitation-website/wedding-6.png',
    ],
  },
  {
    slug: 'recipe-finder-web-app',
    title: 'Recipe Finder Web App',
    url: 'https://recipe-finder-beta-two.vercel.app/',
    shortDescription: 'Analytics and operations dashboard for products, sales, and orders.',
    detailParagraphs: [
      'This project focused on building a modern internal dashboard for sales teams to monitor KPIs, best-selling products, and order fulfillment status in realtime.',
      'I implemented reusable chart cards, table components, and filter tools, then connected them with backend APIs to keep data accurate and scalable as new modules were added.',
    ],
    languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    companyName: 'Personal development',
    developmentTime: 'Jan 2024 - May 2024',
    image: [
      '/projects/recipe-finder/recipe-1.png',
      '/projects/recipe-finder/recipe-2.png',
      '/projects/recipe-finder/recipe-3.png',
      '/projects/recipe-finder/recipe-4.png',
      '/projects/recipe-finder/recipe-5.png',
      '/projects/recipe-finder/recipe-6.png',
    ],
  },
  {
    slug: 'calculator-web-app',
    title: 'Calculator Web App',
    url: 'https://calculator-three-psi-90.vercel.app/',
    shortDescription: 'Analytics and operations dashboard for products, sales, and orders.',
    detailParagraphs: [
      'This project focused on building a modern internal dashboard for sales teams to monitor KPIs, best-selling products, and order fulfillment status in realtime.',
      'I implemented reusable chart cards, table components, and filter tools, then connected them with backend APIs to keep data accurate and scalable as new modules were added.',
    ],
    languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    companyName: 'Personal development',
    developmentTime: 'Jan 2024 - May 2024',
    image: [
      '/projects/calculator/calcu-1.png',
      '/projects/calculator/calcu-2.png',
      '/projects/calculator/calcu-3.png',
      '/projects/calculator/calcu-4.png',
    ],
  },
  {
    slug: 'admin-dashboard',
    title: 'Admin Dashboard',
    url: 'https://ymp-admin-dashboard.vercel.app/',
    shortDescription: 'Analytics and operations dashboard for products, sales, and orders.',
    detailParagraphs: [
      'This project focused on building a modern internal dashboard for sales teams to monitor KPIs, best-selling products, and order fulfillment status in realtime.',
      'I implemented reusable chart cards, table components, and filter tools, then connected them with backend APIs to keep data accurate and scalable as new modules were added.',
    ],
    languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    companyName: 'Everlast Information & App Dev Co., Ltd',
    developmentTime: 'Jan 2024 - May 2024',
    image: [
      '/projects/admin-dashboard/admin-1.png',
      '/projects/admin-dashboard/admin-2.png',
      '/projects/admin-dashboard/admin-3.png',
      '/projects/admin-dashboard/admin-4.png',
    ],
  },
  {
    slug: 'vege-web',
    title: 'Vege Web',
    url: 'https://vege-web.vercel.app/',
    shortDescription: 'Analytics and operations dashboard for products, sales, and orders.',
    detailParagraphs: [
      'This project focused on building a modern internal dashboard for sales teams to monitor KPIs, best-selling products, and order fulfillment status in realtime.',
      'I implemented reusable chart cards, table components, and filter tools, then connected them with backend APIs to keep data accurate and scalable as new modules were added.',
    ],
    languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    companyName: 'Everlast Information & App Dev Co., Ltd',
    developmentTime: 'Jan 2024 - May 2024',
    image: [
      '/projects/vege-web/vege-1.png',
      '/projects/vege-web/vege-2.png',
      '/projects/vege-web/vege-3.png',
    ],
  },
  {
    slug: 'foodie-web',
    title: 'Foodie Web',
    url: 'https://foodie-six-plum.vercel.app/',
    shortDescription: 'Analytics and operations dashboard for products, sales, and orders.',
    detailParagraphs: [
      'This project focused on building a modern internal dashboard for sales teams to monitor KPIs, best-selling products, and order fulfillment status in realtime.',
      'I implemented reusable chart cards, table components, and filter tools, then connected them with backend APIs to keep data accurate and scalable as new modules were added.',
    ],
    languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    companyName: 'Everlast Information & App Dev Co., Ltd',
    developmentTime: 'Jan 2024 - May 2024',
    image: [
      '/projects/foodie-web/foodie-1.png',
      '/projects/foodie-web/foodie-2.png',
      '/projects/foodie-web/foodie-3.png',
      '/projects/foodie-web/foodie-4.png',
      '/projects/foodie-web/foodie-5.png',
      '/projects/foodie-web/foodie-6.png',
      '/projects/foodie-web/foodie-7.png',
      '/projects/foodie-web/foodie-8.png',
    ],
  }
] as const;