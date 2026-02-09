import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { NAV_LIST, SYSTEM_LANGUAGES, THEME } from '@/config';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { handleScroll } from '@/util';
import { useTranslate } from '@/hooks/useTranslate';
import { HeaderProps, TranslateFn } from '@/types';
import { useRouter } from 'next/router';

interface LogoProps {
  isFooter?: boolean;
}

export const Logo = ({
  isFooter = false,
}: LogoProps) => {
  return (
    <div className="text-[#11001F] dark:text-white text-xl font-semibold">
      <Link href="/">
        <span className={isFooter ? 'text-xl md:text-3xl' : 'text-lg'}>{THEME}</span>
        <span className={`text-[#e631f6] ${isFooter ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>.</span>
      </Link>
    </div>
  );
};

const NavBarItem = ({
  handleScroll,
  lang
}: {
  handleScroll: (id: string) => void;
  lang: TranslateFn
}) => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-10 px-10 py-3 rounded-full border border-gray-500 dark:border-white/20 backdrop-blur-md">
        {NAV_LIST.map((nav, index) => (
          <li key={index}>
            <button
              onClick={() => handleScroll(nav?.id)}
              className="text-[#11001F] dark:text-white hover:text-[#2c292e] dark:hover:text-white/80 transition cursor-pointer"
            >
              {lang(nav.name)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HireMe = ({
  toggleSidebar,
  handleTheme,
  locale,
  changeLang,
  setOpen,
  open,
  langRef,
  lang,
}: {
  toggleSidebar: () => void;
  handleTheme: () => void;
  locale: ReactNode,
  changeLang: (lang: string) => void;
  setOpen: (key: boolean) => void;
  open: boolean,
  langRef: React.RefObject<HTMLDivElement | null>;
  lang: TranslateFn;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className='relative w-auto h-8 py-2 px-1 border flex justify-center items-center rounded-md border-gray-500 dark:border-gray-700'
      >
        <div
          ref={langRef}
          className="text-gray-600 dark:text-white flex items-center gap-1 select-none"
          onClick={() => setOpen(!open)}
        >
          <span className="uppercase text-xs">{locale}</span>
          <FontAwesomeIcon icon={faAngleDown} className='text-xs' />
        </div>
        {
          open && (
            <ul
              className="
                absolute top-full right-0 mt-2
                w-auto
                rounded-md
                border border-gray-300 dark:border-gray-700
                bg-white dark:bg-black
                shadow-lg
                overflow-hidden
              text-gray-700 dark:text-white
                z-50
              "
            >
              {SYSTEM_LANGUAGES.map((item) => (
                <li
                  key={item.key}
                  onMouseDown={() => changeLang(item.key)}
                  onClick={() => changeLang(item.key)}
                  className="
                    px-3 py-2 text-xs text-center
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    cursor-pointer
                    transition
                  "
                >
                  {item.value}
                </li>
              ))}
            </ul>
          )
        }
      </div>
      <Button
        cusCss='w-10 h-10 !p-0 flex items-center justify-center'
        onClick={handleTheme}
      >
        <FontAwesomeIcon
          icon={faMoon}
          className='cursor-pointer'
        />
      </Button>
      <Button
        cusCss='hidden md:flex'
        onClick={() => handleScroll('contact-me')}
      >
        {lang('Contact me')}
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
        className="text-[#11001F] dark:text-white text-lg cursor-pointer"
        onClick={toggleSidebar}
      />
    </div>
  );
}

export default function Header({
  toggleSidebar,
  scrolled,
  handleTheme
}: HeaderProps) {
  const lang = useTranslate();

  const [open, setOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const changeLang = (lang: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query
      },
      router.asPath,
      { locale: lang }
    );
    setOpen(false); };

  return (
    <header
      className={`
        fixed top-0 z-50 w-full h-20
        flex items-center justify-center
        transition-all duration-300
        ${
          scrolled
            ? "bg-gray-100 dark:bg-[#130819]/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[86%] w-full h-full flex items-center justify-between">
        <Logo />
        <NavBarItem
          handleScroll={handleScroll}
          lang={lang}
        />
        <HireMe
          toggleSidebar={toggleSidebar}
          handleTheme={handleTheme}
          locale={locale}
          changeLang={changeLang}
          setOpen={setOpen}
          open={open}
          langRef={langRef}
          lang={lang}
        />
      </div>
    </header>
  )
}
