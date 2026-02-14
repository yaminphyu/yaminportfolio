import React from 'react'
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import { downloadPdf, handleScroll } from '@/util'
import { NAME } from '@/config'
import { useTranslate } from '@/hooks/useTranslate'
import { motion } from 'framer-motion'
import WavyTextAnimation from './WavyTextAnimation'

export default function HeroSection() {
  const lang = useTranslate();
  const name = lang(NAME as "Yamin Phyu");
  const text = "frontend developer";

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
      <h3 className="text-base md:text-xl text-[#11001F] dark:text-white">{lang(`Hi! I'm {0}`, { 0: name })}</h3>
      <WavyTextAnimation text={text} />
      <p className="text-center text-sm md:text-base leading-5 md:leading-8 text-[#11001F] dark:text-white">{lang('hero content')}</p>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1, opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 1 }}
          className="w-36 h-12 p-1 flex items-center justify-center rounded-full text-white font-semibold text-sm md:text-base bg-linear-to-r from-purple-500 to-pink-500"
          aria-label="Toggle theme"
          onClick={() => handleScroll('contact-me')}
        >
          {lang('contact me')}
          <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 1 }}
          className="w-36 h-12 p-1 flex items-center justify-center rounded-full text-[#11001F] dark:text-white font-semibold text-sm md:text-base border border-gray-500 dark:border-white/30"
          aria-label="Toggle theme"
          onClick={downloadPdf}
        >
          {lang('my resume')}
          <FontAwesomeIcon icon={faDownload} className="ml-1" />
        </motion.button>
      </div>
    </SectionWrapper>
  )
}
