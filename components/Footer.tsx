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
      <div className='w-full flex items-center justify-center'>
        <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white mr-3" />
        <a href="mailto:contact@prebuiltui.com">contact@prebuiltui.com</a>
      </div>
      <div className="max-w-[86%] w-full h-full flex flex-col lg:flex-row items-center justify-between border-t border-white/70 gap-5 lg:gap-0 py-2">
      <span>© 2025 PrebuiltUI. All rights reserved. Distributed by ThemeWagon</span>
      <div>
        <ul className='flex gap-7'>
          {
            SOCIAL_MEDIA.map((social, index) => {
              return (
                <li key={index} className="inline-block mr-6">
                  <Link
                    href={social.url}
                    target="_blank"
                    className="text-white hover:text-white/80 transition"
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
