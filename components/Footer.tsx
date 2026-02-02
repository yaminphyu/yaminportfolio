import { SOCIAL_MEDIA } from '@/config'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import { Logo } from './Header';

export default function Footer() {
  return (
    <footer className='w-full h-full flex flex-col items-center justify-center gap-3'>

      <div className='w-full flex items-center justify-center'>
        <Logo isFooter={true} />
      </div>
      <div className='w-full flex items-center justify-center text-[#11001F] dark:text-white'>
        <FontAwesomeIcon icon={faEnvelope} className="text-lg md:text-2xl mr-3" />
        <a className='text-sm md:text-base' href="mailto:contact@prebuiltui.com">contact@prebuiltui.com</a>
      </div>
      <div className="max-w-[86%] w-full h-full flex flex-col lg:flex-row items-center justify-center md:justify-between border-t border-gray-800 dark:border-white/70 gap-5 lg:gap-0 py-2">
      <span className='text-[#11001F] dark:text-white text-sm md:text-base'>© 2025 PrebuiltUI. All rights reserved. Distributed by ThemeWagon</span>
      <div>
        <ul className='flex justify-center gap-7'>
          {
            SOCIAL_MEDIA.map((social: any, index: number) => {
              return (
                <li
                  key={index}
                  className="inline-block mr-6 text-sm md:text-base text-[#11001F] dark:text-white hover:text-gray-700 dark:hover:text-gray-200">
                  <Link
                    href={social.url}
                    target="_blank"
                    className="transition"
                  >
                    {social.name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
      </div>
    </footer>
  )
}
