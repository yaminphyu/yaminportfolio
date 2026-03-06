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
            <div className='flex flex-wrap items-center gap-3 mt-6'>
              <Link
                href={project.url}
                target='_blank'
                className='group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#11001F]/20 dark:border-white/20 text-[#11001F] dark:text-white hover:bg-[#11001F] hover:text-white dark:hover:bg-white dark:hover:text-[#11001F] transition-all duration-200'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {lang('Live Demo')}
              </Link>

              <Link
                href={project.githubUrl}
                target='_blank'
                className='group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#11001F]/20 dark:border-white/20 text-[#11001F] dark:text-white hover:bg-[#11001F] hover:text-white dark:hover:bg-white dark:hover:text-[#11001F] transition-all duration-200'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                {lang('GitHub')}
              </Link>

              <Link
                href={`/projects/${project.slug}`}
                className='group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[#11001F]/20 dark:border-white/20 text-[#11001F] dark:text-white hover:bg-[#11001F] hover:text-white dark:hover:bg-white dark:hover:text-[#11001F] transition-all duration-200'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {lang('Details')}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
