import React from 'react'
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import { downloadPdf, handleScroll } from '@/util'
import { NAME } from '@/config'
import { useTranslate } from '@/hooks/useTranslate'

export default function HeroSection() {
  const lang = useTranslate();

  return (
    <SectionWrapper
      sectionId="hero-section"
      isHomepage={true}
    >
      <Image
        src="/jennie.jpg"
        alt="Profile Picture"
        width={140}
        height={120}
        className="rounded-full"
      />
      <h3 className="text-base md:text-xl text-[#11001F] dark:text-white">{lang(`Hi! I'm {0}`, [lang(NAME)])}</h3>
      <h1 className="text-center font-semibold text-2xl md:text-5xl mt-5 text-[#11001F] dark:text-white">frontend developer</h1>
      <p className="text-center text-sm md:text-base leading-5 md:leading-8 text-[#11001F] dark:text-white">{lang('hero content')}</p>
      <div className="flex items-center gap-4">
        <button
          className="w-36 h-12 p-1 flex items-center justify-center rounded-full text-white font-semibold cursor-pointer text-sm md:text-base bg-linear-to-r from-purple-500 to-pink-500"
          aria-label="Toggle theme"
          onClick={() => handleScroll('contact-me')}
        >
          {lang('contact me')}
          <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </button>

        <button
          className="w-36 h-12 p-1 flex items-center justify-center rounded-full text-[#11001F] dark:text-white font-semibold cursor-pointer text-sm md:text-base border border-gray-500 dark:border-white/30"
          aria-label="Toggle theme"
          onClick={downloadPdf}
        >
          {lang('my resume')}
          <FontAwesomeIcon icon={faDownload} className="ml-1" />
        </button>
      </div>
    </SectionWrapper>
  )
}
