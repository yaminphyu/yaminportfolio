import React from 'react'
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative max-w-[88%] md:max-w-[40%] w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-5 p-5">
      <Image
        src="/jennie.jpg"
        alt="Profile Picture"
        width={140}
        height={120}
        className="rounded-full"
      />
      <h3 className="text-xl text-white">Hi! I'm Eliana Jade</h3>
      <h1 className="text-center font-semibold text-4xl md:text-5xl mt-5 text-white">frontend web developer based in London.</h1>
      <p className="text-center text-base leading-8 text-white">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className="flex items-center gap-4">
        <button
          className="w-36 h-12 p-1 flex items-center justify-center rounded-full text-white font-semibold cursor-pointer bg-linear-to-r from-purple-500 to-pink-500"
          aria-label="Toggle theme"
        >
          contact me
          <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </button>

        <button
          className="w-36 h-12 p-1 flex items-center justify-center rounded-full text-white font-semibold cursor-pointer border border-white/30"
          aria-label="Toggle theme"
        >
          my resume
          <FontAwesomeIcon icon={faDownload} className="ml-1" />
        </button>
      </div>
    </section>
  )
}
