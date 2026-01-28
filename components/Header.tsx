import React, { useEffect, useState } from 'react'
import { NAV_LIST, THEME } from '@/config';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

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

const NavBarItem = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-10 px-10 py-3 rounded-full border border-white/20 backdrop-blur-md">
        {NAV_LIST.map((nav, index) => (
          <li key={index}>
            <Link
              href={nav.href}
              className="text-white hover:text-white/80 transition"
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HireMe = () => {
  return (
    <div className="flex items-center gap-4">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white cursor-pointer"
        aria-label="Toggle theme"
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>

      <button className="px-5 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition cursor-pointer">
        Hire me
      </button>
    </div>
  );
};

export default function Header() {
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
        <NavBarItem />
        <HireMe />
      </div>
    </header>
  )
}
