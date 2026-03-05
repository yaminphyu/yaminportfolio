import SectionWrapper from './SectionWrapper'
import { PROJECTS } from '@/config'
import { useTranslate } from '@/hooks/useTranslate'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const lang = useTranslate();

  return (
    <SectionWrapper
      miniHeaderText={lang('Projects')}
      headerText={lang('Featured Projects')}
      sectionId="projects"
    >
      <p className='text-center text-[#11001F] dark:text-gray-300 max-w-2xl'>
        {lang('Projects section subtitle')}
      </p>

      <div className='w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {PROJECTS.map((project) => (
          <article
            key={project.slug}
            className='rounded-2xl border border-gray-300 dark:border-white/20 p-6 bg-white/70 dark:bg-[#170b22] backdrop-blur-md transition-transform duration-300 hover:-translate-y-2'
          >
            <div className='w-full h-44 rounded-xl border border-dashed border-gray-400 dark:border-white/30 overflow-hidden flex items-center justify-center'>
              {project?.image.length > 0 ? (
                <Image
                  src={project?.image[0]}
                  alt={`${project.title} thumbnail`}
                  width={600}
                  height={400}
                  className='w-full h-full object-cover'
                />
              ) : (
                <span className='text-[#11001F] dark:text-gray-200 text-sm'>{lang('Empty image')}</span>
              )}
            </div>
            <h3 className='mt-4 text-xl font-semibold text-[#11001F] dark:text-white'>
              {project.title}
            </h3>
            <p className='mt-3 text-sm leading-6 text-[#11001F] dark:text-gray-300'>
              {project.shortDescription}
            </p>
            <div className='mt-5 flex flex-wrap gap-2'>
              {project.languages.map((item) => (
                <span
                  key={item}
                  className='px-3 py-1 text-xs rounded-full border border-gray-500 dark:border-white/40 text-[#11001F] dark:text-gray-200'
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className='mt-6 inline-flex text-sm font-semibold text-[#11001F] dark:text-white underline underline-offset-4'
            >
              {lang('View details')}
            </Link>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
