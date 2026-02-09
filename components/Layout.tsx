import React, { useEffect, useState } from 'react';
import Header from './Header';
import MobileSidebar from './MobileSidebar';
import useIndex from '@/hooks/useIndex';
import ScrollUpArrow from './ScrollUpArrow';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const {
    toggleSidebar,
    scrolled,
    handleTheme
  } = useIndex();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div className="w-full min-h-[100vmh] flex flex-col bg-white dark:bg-[#11001F] pb-10">
      <Header
        toggleSidebar={toggleSidebar}
        scrolled={scrolled}
        handleTheme={handleTheme}
      />
      <MobileSidebar />

      <main className="w-full flex flex-col justify-center items-center pt-20 overflow-x-hidden gap-20">
        {children}
      </main>
      <ScrollUpArrow />
    </div>
  );
}
