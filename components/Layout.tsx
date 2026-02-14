import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Header from './Header';
import MobileSidebar from './MobileSidebar';
import useIndex from '@/hooks/useIndex';
import ScrollUpArrow from './ScrollUpArrow';
import { useCursorMotion } from '@/hooks/useCursorMotion';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { x, y } = useCursorMotion();
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
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-black dark:border-white rounded-full pointer-events-none z-9999"
        style={{ x, y }}
      >
        <motion.div
          className='w-full h-full rounded-full flex justify-center items-center'
        >
          <motion.div
            className='w-2 h-2 bg-black dark:bg-white rounded-full'
          />
        </motion.div>
      </motion.div>
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
    </>
  );
}
