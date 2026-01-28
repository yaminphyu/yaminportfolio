import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode;
  miniHeaderText: string;
  headerText: string;
  sectionId: string;
}

export default function SectionWrapper({
  children,
  miniHeaderText,
  headerText,
  sectionId,
}: SectionWrapperProps) {
  return (
    <section
      className="relative max-w-[86%] md:max-w-[78%] w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-5 md:p-5"
      id={sectionId}
    >
      <h3 className='text-base md:text-xl text-white'>{miniHeaderText}</h3>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">{headerText}</h2>
      {children}
    </section>
  )
}
