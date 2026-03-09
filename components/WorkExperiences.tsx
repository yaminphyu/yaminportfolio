import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORK_EXPERIENCES } from '@/config'
import Image from 'next/image'
import { useTranslate } from '@/hooks/useTranslate';
import { TranslateFn } from '@/types';

type LangProps = {
  lang: TranslateFn
}

const renderDescriptionList = (description: string | readonly string[], lang: TranslateFn) => {
  const descriptions = Array.isArray(description) ? description : [description];

  return (
    <ul className='list-disc pl-5 space-y-2 text-[#11001F] dark:text-gray-200 leading-relaxed'>
      {descriptions.map((item, index) => (
        <li key={`${item}-${index}`}>
          {lang(item)}
        </li>
      ))}
    </ul>
  );
};

const WorkExpForPC = ({ lang }: LangProps) => {
  return (
    <div className="w-full mt-10 hidden lg:flex flex-col">
      {WORK_EXPERIENCES.map((work, index) => {
        const isRight = index % 2 === 1;

        return (
          <div
            key={`${work.year}-${index}`}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#140620] dark:bg-gray-200" />

            <div className="grid grid-cols-[1fr_70px_1fr] py-8 items-center gap-4">
              
              <div className='text-right'>
                {!isRight ? (
                  <>
                    <div className="flex">
                      <Image
                        src={work.logo}
                        alt={work.companyName}
                        width={50}
                        height={50}
                        className="mb-3 ml-auto rounded-md object-cover"
                      />
                    </div>
                    <h2 className="text-[#11001F]/80 dark:text-white/80 text-sm font-medium">{lang(work.year)}</h2>
                    <p className='text-[#11001F] dark:text-white text-lg font-bold mt-1'>{work.companyName}</p>
                    <p className="text-[#11001F] dark:text-white mt-2 font-semibold">{work.role}</p>
                    <p className="text-[#11001F]/80 dark:text-white/70 mt-1 text-sm">{work.location}</p>
                    </>
                ) : (
                  <div className="rounded-2xl border border-[#140620]/10 dark:border-white/15 p-6 bg-[#140620]/3 dark:bg-white/5 text-left">
                    {renderDescriptionList(work.description, lang)}
                  </div>
                )}
              </div>

              <div className="flex justify-center items-start">
                <span className="w-4 h-4 rounded-full bg-[#140620] dark:bg-white z-10" />
              </div>

              <div className='text-left'>
                {isRight ? (
                  <>
                    <div className={`${work.logo ? 'flex' : 'hidden'}`}>
                      <Image
                        src={work.logo}
                        alt={work.companyName}
                        width={50}
                        height={50}
                        className="mb-3 mr-auto rounded-md object-cover"
                      />
                    </div>
                    <h2 className="text-[#11001F]/80 dark:text-white/80 text-sm font-medium">{lang(work.year)}</h2>
                    <p className='text-[#11001F] dark:text-white text-lg font-bold mt-1'>{work.companyName}</p>
                    <p className="text-[#11001F] dark:text-white mt-2 font-semibold">{work.role}</p>
                    <p className="text-[#11001F]/80 dark:text-white/70 mt-1 text-sm">{work.location}</p>
                  </>
                ) : (
                  <div className="rounded-2xl border border-[#140620]/10 dark:border-white/15 p-6 bg-[#140620]/3 dark:bg-white/5 text-left">
                    {renderDescriptionList(work.description, lang)}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const WorkExpForMobile = ({ lang }: LangProps) => {
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
                  <span>{lang(work.year)}</span>
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
              <div className="rounded-2xl border border-[#140620]/10 dark:border-white/15 p-6 bg-[#140620]/3 dark:bg-white/5 text-left">
                {renderDescriptionList(work.description, lang)}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default function WorkExperiences() {
  const lang = useTranslate();

  return (
    <SectionWrapper
      miniHeaderText={lang('My portfolio')}
      headerText={lang('My work experiences')}
      sectionId="my-work"
    >
      <WorkExpForPC lang={lang} />
      <WorkExpForMobile lang={lang} />
    </SectionWrapper>
  )
}
