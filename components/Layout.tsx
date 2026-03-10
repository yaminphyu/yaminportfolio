import React, { useEffect, useState } from 'react';
import Header from './Header';
import MobileSidebar from './MobileSidebar';
import useIndex from '@/hooks/useIndex';
import ScrollUpArrow from './ScrollUpArrow';
import CustomCursor from './CustomCursor';
import { useSectionHashSync } from '@/hooks/useSectionHashSync';
import { useRouter } from 'next/router';
import { handleScroll, replaceHash } from '@/util';
import { useSidebarToggle } from '@/context/SidebarToggleContext';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const {
    toggleSidebar,
    scrolled,
    handleTheme
  } = useIndex();

  const router = useRouter();
  const { setClickScrolling } = useSectionHashSync();
  const { isOpen, closeSidebar } = useSidebarToggle();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const onNavigateSection = (id: string) => {
    if (isOpen) closeSidebar();

    if (router.pathname === '/') {
      setClickScrolling();
      handleScroll(id);
      return;
    }

    const target = replaceHash(id);
    router.push(target);
  };

  if (!mounted) return <></>;

  return (
    <>
      <CustomCursor />
      <div className="w-full min-h-[100vmh] flex flex-col bg-white dark:bg-[#11001F] pb-10">

        <Header
          toggleSidebar={toggleSidebar}
          scrolled={scrolled}
          handleTheme={handleTheme}
          onNavigateSection={onNavigateSection}
        />
        <MobileSidebar onNavigateSection={onNavigateSection} />

        <main className="w-full flex flex-col justify-center items-center pt-20 overflow-x-hidden gap-20">
          {children}
        </main>
        <ScrollUpArrow />
      </div>
    </>
  );
}
