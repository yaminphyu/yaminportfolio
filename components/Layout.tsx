import React, { useEffect, useState } from 'react';
import Header from './Header';
import MobileSidebar from './MobileSidebar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div className="w-full min-h-[100vmh] flex flex-col bg-white dark:bg-[#11001F] pb-10">
      <Header />
      <MobileSidebar />

      <main className="w-full flex flex-col justify-center items-center pt-20 overflow-x-hidden gap-20">
        {children}
      </main>
    </div>
  );
}
