import React from 'react'
import { ABOUT_ME, LANGUAGES } from '@/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'

export default function AboutMe() {
  return (
    <SectionWrapper
      miniHeaderText="Introduction"
      headerText="About me"
    >
      <div className='flex flex-col lg:flex-row justify-center lg:justify-between xl:justify-center items-center lg:items-start w-full h-full gap-16 lg:gap-0'>
        <div className="relative inline-block w-[38%] lg:w-[38%] xl:w-[38%]">
          <Image
            src="/aboutme.jpg"
            alt="About Me Picture"
            width={400}
            height={700}
            className="rounded-xl"
          />

          <div className="absolute -bottom-6 -right-8 xl:right-10 w-20 xl:w-36 h-20 xl:h-36 rounded-full bg-white flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="
                    M 50, 50
                    m -35, 0
                    a 35,35 0 1,1 70,0
                    a 35,35 0 1,1 -70,0
                  "
                />
              </defs>

              <text
                fill="#111"
                fontSize="10"
                letterSpacing="2"
                fontFamily="serif"
              >
                <textPath href="#circlePath">
                  FRONTEND DEVELOPER •
                </textPath>
              </text>
            </svg>

            <div className="absolute w-14 h-14 flex items-center justify-center">
              👩‍💻
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full lg:w-[50%] xl:w-[60%] h-auto gap-5'>
          <span className='text-base font-medium'>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</span>

          <div className='w-full flex mt-4 gap-2 relative flex-wrap'>
            {
              ABOUT_ME.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="
                      group
                      w-full max-w-full md:max-w-68
                      rounded-2xl
                      border border-white/20
                      bg-transparent
                      p-6
                      transition-all duration-300 ease-out
                      hover:-translate-y-2
                      hover:bg-[#11072f]
                    "
                  >
                    <div className="mb-4 text-white/90">
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                    </div>

                    <h3 className="text-white font-semibold mb-2">
                      {item.name}
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })
            }
          </div>

          <div className='flex flex-col justify-center items-start w-full mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Languages & Frameworks</h3>
            <div className='w-full flex mt-4 gap-2 relative flex-wrap'>
              {
                LANGUAGES.map((language, index) => {
                  return (
                    <span
                      key={index}
                      className="
                        px-5
                        py-2
                        bg-transparent
                        border border-white/50
                        rounded-full
                        text-sm
                        text-white/80
                        font-medium
                      "
                    >
                      {language}
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
