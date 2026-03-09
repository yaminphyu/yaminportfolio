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
    description: [
      'Developed client-facing web applications using ReactJS, Next.js, TypeScript, and Tailwind CSS.',
      'Built reusable UI component libraries to improve development efficiency across multiple projects.',
      'Integrated RESTful APIs, WebSocket, and live chat systems (Chatwoot) to support real-time features.',
      'Optimized web performance and improved Lighthouse scores by reducing bundle size.',
      'Collaborated with backend developers, designers, and product managers to deliver scalable features.'
    ],
    logo: '/work-exp/everlast-logo.jpg',
    companyName: 'Everlast Information & App Dev Co., Ltd',
    companyUrl: 'https://examplecompany1.com',
    location: 'Cambodia',
  },
  {
    id: 2,
    year: 'Oct 2022 - March 2024',
    role: 'Web Developer',
    description: [
      'Developed web platforms and CMS systems for private enterprises and government clients.',
      'Designed and implemented responsive user interfaces using modern frontend technologies.',
      'Worked closely with stakeholders to translate business requirements into technical solutions.',
      'Delivered custom web applications and internal systems tailored to client needs.'
    ],
    logo: '/work-exp/villagelink-logo.png',
    companyName: 'Village Link | Awba Entity',
    companyUrl: 'https://examplecompany1.com',
    location: 'Myanmar',
  },
  {
    id: 3,
    year: 'DEC 2020 - Sep 2022',
    role: 'Web Developer',
    description: [
      'Built and maintained e-commerce platform features including product browsing and cart management.',
      'Developed API services for product listings, favorites, and cart operations.',
      'Collaborated with senior developers to implement scalable backend integrations.',
      'Contributed to improving system functionality and user experience.'
    ],
    logo: '/work-exp/agga-logo.webp',
    companyName: 'AGGA.IO Co., Ltd',
    companyUrl: 'https://examplecompany1.com',
    location: 'Myanmar',
  },
  {
    id: 4,
    year: 'Sep 2019 - Sep 2022',
    role: 'Web Developer',
    description: [
      'Built an API under the guidance of my lead developer for an e-commerce website focused on selling groceries.',
      'The functionalities include browsing products, managing the shopping cart (adding/removing items), marking favorites, and calculating items.'
    ],
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
    githubUrl: 'https://github.com/yaminphyu/Kaung-Hanny-WeddingInvitation',
    shortDescription: 'A responsive wedding invitation website that displays event details and collects guest RSVP responses through Google Forms integration.',
    detailParagraphs: [
      'Developed a modern and responsive Wedding Invitation Website to share event details with guests in a convenient digital format. The website presents important information such as the wedding schedule, venue, and celebration details in an elegant layout.',
      'The project was built using Next.js for fast performance and routing, and Tailwind CSS for creating a clean, responsive design. Guests can easily send their attendance confirmation through a Google Form integration, which allows the couple to collect responses efficiently.',
      'The website focuses on simplicity, mobile-friendly design, and a pleasant user experience to make it easy for guests to access wedding information anytime.'
    ],
    keyFeatures: [
      'Responsive design for mobile, tablet, and desktop',
      'Wedding event details and photo gallery',
      'RSVP form integration using Google Forms',
      'Smooth navigation and modern UI design',
      'Optimized performance using Next.js'
    ],
    languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Forms (RSVP response collection)'],
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
    githubUrl: 'https://github.com/yaminphyu/recipe-finder',
    shortDescription: 'A responsive recipe discovery web app that allows users to browse, search, and filter healthy recipes through a clean and interactive interface.',
    detailParagraphs: [
      'A responsive web application that allows users to discover healthy recipes and explore meal ideas through an interactive and user-friendly interface. The app provides filtering and search functionality to help users quickly find recipes based on ingredients or cooking time.'
    ],
    keyFeatures: [
      'Browse a collection of healthy recipes',
      'Search recipes by name or ingredient',
      'Filter recipes by preparation time and cooking time',
      'Responsive recipe card layout',
      'Clean and modern UI design',
      'Fast navigation using Next.js',
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
    githubUrl: 'https://github.com/yaminphyu/calculator',
    shortDescription: 'A responsive calculator web app that supports basic arithmetic operations with interactive UI and dark mode toggle.',
    detailParagraphs: [
      'A responsive calculator web application that performs basic arithmetic operations with a clean and interactive user interface. The app supports dynamic input handling and theme switching to improve user experience.',
    ],
    keyFeatures: [
      'Perform basic arithmetic operations (+, −, ×, ÷)',
      'Real-time calculation display',
      'Delete and reset functionality',
      'Dark mode toggle for theme switching',
      'Responsive layout for different screen sizes'
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
    title: 'Admin Dashboard (In Progress)',
    url: 'https://ymp-admin-dashboard.vercel.app/',
    githubUrl: 'https://github.com/yaminphyu/ecme-admin-dashboard',
    shortDescription: 'A modern admin dashboard UI currently under development, focusing on reusable components and responsive dashboard layouts.',
    detailParagraphs: [
      'A modern admin dashboard interface currently under development. The project focuses on building a scalable and reusable dashboard layout for managing users, projects, and analytics data.',
    ],
    keyFeatures: [
      'Responsive login page with authentication UI',
      'Sidebar navigation layout',
      'Dashboard overview page structure',
      'Sales target progress widget',
      'Product performance panel',
      'Modular dashboard component layout',
    ],
    plannedFeatures: [
      'Data visualization charts',
      'User management table',
      'Project management module',
      'Search and filtering functionality',
      'API integration for dynamic data',
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
    githubUrl: 'https://github.com/yaminphyu/vege-web',
    shortDescription: 'A responsive e-commerce UI for browsing organic food products with category filtering and product listing components. (Work in Progress)',
    detailParagraphs: [
      'A modern e-commerce web interface designed for browsing and purchasing organic fruits and vegetables. The project focuses on building a clean shopping experience with product browsing, category filtering, and responsive UI components.',
    ],
    keyFeatures: [
      'Responsive landing page for organic food products',
      'Product listing grid with pricing information',
      'Category filtering (Vegetables, Fruits, Bread, Meat)',
      'Product card components with “Add to Cart” button',
      'Search bar for product discovery',
      'Clean navigation menu and hero section',
    ],
    plannedFeatures: [
      'Shopping cart functionality',
      'Product detail page',
      'Checkout flow',
      'API integration for product data',
      'User authentication',
      'Order management',

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
    githubUrl: 'https://github.com/yaminphyu/foodie',
    shortDescription: 'A responsive restaurant landing page featuring menu sections, chef profiles, testimonials, and a reservation form.',
    detailParagraphs: [
      'A modern restaurant landing page designed to showcase menu items, chefs, gallery content, and customer testimonials. The website provides a clean and engaging user interface that allows visitors to explore the restaurant and make table reservations through a booking form.',
    ],
    keyFeatures: [
      'Responsive restaurant landing page layout',
      'Hero section with call-to-action',
      'Menu showcase with food items and pricing',
      'Chef profile section',
      'Customer testimonial carousel',
      'Image gallery section',
      'Table reservation form (demo submission)',
      'Smooth scrolling navigation between sections',
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