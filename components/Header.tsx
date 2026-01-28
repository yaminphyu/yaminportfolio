import React, { useEffect, useState } from 'react'
import { NAV_LIST, THEME } from '@/config';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { useSidebarToggle } from '@/context/SidebarToggleContext';
import { handleScroll } from '@/util';

interface LogoProps {
  isFooter?: boolean;
}

export const Logo = ({
  isFooter = false,
}: LogoProps) => {
  return (
    <div className="text-white text-xl font-semibold">
      <Link href="/">
        <span className={isFooter ? 'text-xl md:text-3xl' : 'text-lg'}>{THEME}</span>
        <span className={`text-[#e631f6] ${isFooter ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>.</span>
      </Link>
    </div>
  );
};

const NavBarItem = ({
  handleScroll
}: {
  handleScroll: (id: string) => void;
}) => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-10 px-10 py-3 rounded-full border border-white/20 backdrop-blur-md">
        {NAV_LIST.map((nav, index) => (
          <li key={index}>
            <button
              onClick={() => handleScroll(nav?.id)}
              className="text-white hover:text-white/80 transition"
            >
              {nav.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HireMe = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  return (
    <div className="flex items-center gap-4">
      <Button cusCss='w-10 h-10 !p-0 flex items-center justify-center'>
        <FontAwesomeIcon icon={faMoon} />
      </Button>
      <Button cusCss='hidden md:flex'>
        Hire me
      </Button>
      <MobileSidebarToggle toggleSidebar={toggleSidebar} />
    </div>
  );
};

const MobileSidebarToggle = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  return (
    <div className="md:hidden">
      <FontAwesomeIcon
        icon={faBars}
        className="text-white text-lg cursor-pointer"
        onClick={toggleSidebar}
      />
    </div>
  );
}

export default function Header() {
  const { toggleSidebar } = useSidebarToggle();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 z-50 w-full h-20
        flex items-center justify-center
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#130819]/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[86%] w-full h-full flex items-center justify-between">
        <Logo />
        <NavBarItem handleScroll={handleScroll} />
        <HireMe toggleSidebar={toggleSidebar} />
      </div>
    </header>
  )
}
