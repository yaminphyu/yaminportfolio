import React from 'react';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#130819] mb-10">
      <Header />

      <main className="w-full flex flex-col justify-center items-center pt-20 overflow-x-hidden gap-20">
        {children}
      </main>
    </div>
  );
}
