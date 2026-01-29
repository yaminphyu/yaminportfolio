import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode;
  miniHeaderText?: string;
  headerText?: string;
  sectionId: string;
  isHomepage?: boolean;
}

export default function SectionWrapper({
  children,
  miniHeaderText,
  headerText,
  sectionId,
  isHomepage = false,
}: SectionWrapperProps) {
  return (
    <section
      className={`
        ${isHomepage
          ? 'max-w-[88%] md:max-w-[40%] gap-3 md:gap-5 -mt-20 md:mt-auto px-5'
          : 'max-w-[86%] md:max-w-[78%] gap-5 py-20'
        }
        relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center md:py-20 md:px-5
      `}
      id={sectionId}
    >
      <h3 className='text-base md:text-xl text-white'>{miniHeaderText}</h3>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">{headerText}</h2>
      {children}
    </section>
  )
}
