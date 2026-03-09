import { PROJECTS } from '@/config';
import { useSidebarToggle } from '@/context/SidebarToggleContext';
import { useTranslate } from '@/hooks/useTranslate';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const lang = useTranslate();
  const { previewImage, setPreviewImage } = useSidebarToggle();

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPreviewImage(null);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [setPreviewImage]);

  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className='min-h-screen px-6 py-28 flex flex-col justify-center items-center gap-4'>
        <h1 className='text-2xl font-semibold text-[#11001F] dark:text-white'>{lang('Project not found')}</h1>
        <Link href='/' className='underline text-[#11001F] dark:text-white'>
          {lang('Back to home')}
        </Link>
      </main>
    );
  }

  const company = project.companyName || lang('Personal development');

  return (
    <>
      <main className='min-h-screen md:px-6 md:py-10 mx-auto max-w-[87%] md:max-w-[90%]'>
        <Link href='/' className='inline-flex mb-4 md:mb-8 underline text-[#11001F] dark:text-white'>
          {lang('Back to home')}
        </Link>

        <div className='rounded-2xl border border-gray-300 dark:border-white/20 p-6 md:p-10 bg-white/80 dark:bg-[#170b22]'>
          <h1 className='text-3xl md:text-4xl font-bold text-[#11001F] dark:text-white'>{project.title}</h1>

          <div className='flex flex-col md:flex-row mt-4 md:mt-5 gap-1 md:gap-3 justify-start md:justify-between md:items-center'>
            <span
              className='px-3 py-1 text-xs rounded-full text-[#11001F] dark:text-white border border-[#11001F] dark:border-white/40 text-[#11001F]dark:text-gray-300 hover:border-pink-500 hover:text-pink-500 w-20.5 cursor-pointer'
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              Github Url
            </span>
            <Link
              href={`${project.url}`}
              target='_blank'
              className='inline-block text-md font-medium text-[#11001F] dark:text-gray-300 underline underline-offset-2 tracking-wide hover:text-pink-500'
            >
              {project.url}
            </Link>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
            {project.image?.map((image, index) => (
              <div
                key={index}
                className='w-full h-56 md:h-72 rounded-xl border border-dashed border-gray-400 dark:border-white/40 overflow-hidden flex items-center justify-center'
              >
                {image ? (
                  <button
                    type='button'
                    onClick={() => setPreviewImage(image)}
                    className='w-full h-full cursor-zoom-in'
                    aria-label='View larger image'
                  >
                    <Image
                      src={image}
                      alt={`${project.title} image ${index + 1}`}
                      width={900}
                      height={700}
                      className='w-full h-full object-cover'
                    />
                  </button>
                ) : (
                  <span className='text-[#11001F] dark:text-gray-200'>{lang('Empty image')}</span>
                )}
              </div>
            ))}
          </div>

          <div className='mt-8 space-y-3 text-[#11001F] dark:text-gray-300'>
            {project.detailParagraphs.map((paragraph, index) => (
              <p key={index} className='leading-7'>{paragraph}</p>
            ))}
          </div>

          <ul className='mt-8 list-disc pl-5 space-y-2 text-[#11001F] dark:text-gray-200 leading-relaxed'>
            {project?.keyFeatures.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='rounded-xl border border-gray-300 dark:border-white/20 p-4'>
              <h2 className='font-semibold text-[#11001F] dark:text-white'>{lang('Languages')}</h2>
              <div className='mt-3 flex flex-wrap gap-2'>
                {project.languages.map((item) => (
                  <span key={item} className='px-3 py-1 rounded-full border border-gray-500 dark:border-white/40 text-sm text-black dark:text-white'>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-xl border border-gray-300 dark:border-white/20 p-4 space-y-3'>
              <div>
                <h2 className='font-semibold text-[#11001F] dark:text-white'>{lang('Company')}</h2>
                <p className='text-[#11001F] dark:text-gray-300'>{company}</p>
              </div>
              <div>
                <h2 className='font-semibold text-[#11001F] dark:text-white'>{lang('Development time')}</h2>
                <p className='text-[#11001F] dark:text-gray-300'>{project.developmentTime}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {previewImage && (
        <div
          className='fixed inset-0 z-100 bg-black/80 backdrop-blur-sm p-6 md:p-10 flex items-center justify-center'
          onClick={() => setPreviewImage(null)}
        >
          <button
            type='button'
            className='absolute top-5 right-5 text-white text-3xl leading-none'
            onClick={() => setPreviewImage(null)}
            aria-label='Close image preview'
          >
            ×
          </button>
          <div onClick={(event) => event.stopPropagation()} className='w-full h-full flex items-center justify-center'>
            <Image
              src={previewImage}
              alt='Project preview'
              width={1600}
              height={1200}
              className='max-h-[90vh] w-[90%] rounded-xl'
            />
          </div>
        </div>
      )}
    </>
  );
}
