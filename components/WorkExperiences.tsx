import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORK_EXPERIENCES } from '@/config'
import Image from 'next/image'

const WorkExpForPC = () => {
  return (
    <div className="w-full mt-10 hidden lg:flex flex-col">
      {WORK_EXPERIENCES.map((work, index) => {
        const isRight = index % 2 === 1;

        return (
          <div
            key={`${work.year}-${index}`}
            className="relative max-w-5xl mx-auto"
          >
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#140620] dark:bg-gray-200" />

            <div className="grid grid-cols-[1fr_70px_1fr] py-10 items-center">
              
              {/* LEFT */}
              <div className='text-right'>
                {!isRight ? (
                  <>
                    <div className="flex">
                      <Image
                        src={work.logo}
                        alt={work.companyName}
                        width={50}
                        height={50}
                        className="mb-2 ml-auto"
                      />
                    </div>
                    <h2 className="text-[#11001F] dark:text-white text-base">{work.year}</h2>
                    <p className='text-[#11001F] dark:text-white text-lg font-bold'>{work.companyName}</p>
                    <p className="text-[#11001F] dark:text-white mt-2 font-semibold">{work.role}</p>
                  </>
                ) : (
                  <>
                    <span className="text-[#11001F] dark:text-gray-200">{work.description}</span>
                  </>
                )}
              </div>

              {/* CENTER DOT */}
              <div className="flex justify-center items-start">
                <span className="w-4 h-4 rounded-full bg-[#140620] dark:bg-white z-10" />
              </div>

              {/* RIGHT */}
              <div className='text-left'>
                {isRight ? (
                  <>
                    <div className={`${work.logo ? 'flex' : 'hidden'}`}>
                      <Image
                        src={work.logo}
                        alt={work.companyName}
                        width={50}
                        height={50}
                        className="mb-2 mr-auto"
                      />
                    </div>
                    <h2 className="text-[#11001F] dark:text-white text-base">{work.year}</h2>
                    <p className='text-[#11001F] dark:text-white text-lg font-bold'>{work.companyName}</p>
                    <p className="text-[#11001F] dark:text-white mt-2 font-semibold">{work.role}</p>
                  </>
                ) : (
                  <>
                    <span className="text-[#11001F] dark:text-gray-200">{work.description}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const WorkExpForMobile = () => {
  return (
    <div className='flex lg:hidden flex-col gap-10 mt-10 w-full'>
      {
        WORK_EXPERIENCES.map((work, index) => {
          return (
            <div
              key={index}
              className='w-full flex flex-col'
            >
              <div className='mb-2 flex flex-col gap-3'>
                <div className='flex justify-between items-center font-semibold text-[#11001F] dark:text-white'>
                  <span>{work.role}</span>
                  <span>{work.year}</span>
                </div>
                <div className='flex flex-col justify-center gap-3'>
                  <Image
                    src={work.logo}
                    alt={work.companyName}
                    width={50}
                    height={50}
                    className={work?.logo ? 'flex' : 'hidden'}
                  />
                  <div className='flex flex-col justify-center items-start'>
                    <span className='font-medium text-[#11001F] dark:text-gray-200'>{work.companyName}</span>
                    <span className='font-medium text-[#11001F] dark:text-gray-300'>{work.location}</span>
                  </div>
                </div>
              </div>
              <div className='text-[#11001F] dark:text-white'>{work.description}</div>
            </div>
          );
        })
      }
    </div>
  );
}

export default function WorkExperiences() {
  return (
    <SectionWrapper
      miniHeaderText="My portfolio"
      headerText="My work experiences"
      sectionId="my-work"
    >
      <WorkExpForPC />
      <WorkExpForMobile />
    </SectionWrapper>
  )
}
