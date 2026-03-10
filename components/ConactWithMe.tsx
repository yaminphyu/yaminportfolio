'use client';

import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import Button from './Button'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useTranslate } from '@/hooks/useTranslate'

export default function ConactWithMe() {
  const lang = useTranslate();

  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const [contactInformation, setContactInformation] = useState({
    name: '',
    email: '',
    message: ''
  });

  const MySwal = withReactContent(Swal);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const data = {
      name: contactInformation?.name,
      email: contactInformation?.email,
      message: contactInformation?.message
    };
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const alertIcon = res.ok ? 'success' : 'error';
    const alertText = res.ok ? 'Successfully sending!' : 'Error sending!';

    MySwal.fire({
      icon: alertIcon,
      title: alertText,
      showConfirmButton: false,
      timer: 1800
    });

    setStatus('idle');
    setContactInformation({
      name: '',
      email: '',
      message: ''
    });
  }

  return (
    <SectionWrapper
      miniHeaderText={lang("Contact with me")}
      headerText={lang("Get in touch")}
      sectionId="contact-me"
    >
      <div className='w-full md:w-[70%] lg:w-[50%] h-full flex flex-col items-center justify-center gap-12'>
        <span className='text-center text-[#11001F] dark:text-white text-sm md:text-base'>{lang('any questions')}</span>
        <div className='w-full'>
          <form
            className='flex flex-col gap-8'
            onSubmit={handleSubmit}
          >
            <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-4'>
              <input
                name="name"
                placeholder="Enter your name"
                required
                className='w-full lg:w-1/2 p-2.5 rounded-md bg-gray-100 dark:bg-[#18012B] border border-white/30 text-[#11001F] dark:text-white text-sm md:text-base'
                value={contactInformation?.name}
                onChange={(e) => {
                  setContactInformation(prev => ({
                    ...prev,
                    name: e.target.value
                  }));
                }}
              />
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className='w-full lg:w-1/2 p-2.5 rounded-md bg-gray-100 dark:bg-[#18012B] border border-white/30 text-[#11001F] dark:text-white text-sm md:text-base'
                value={contactInformation?.email}
                onChange={(e) => {
                  setContactInformation(prev => ({
                    ...prev,
                    email: e.target.value
                  }));
                }}
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className='p-2.5 rounded-md bg-gray-100 dark:bg-[#18012B] border border-white/30 text-[#11001F] dark:text-white w-full text-sm md:text-base'
              value={contactInformation?.message}
                onChange={(e) => {
                  setContactInformation(prev => ({
                    ...prev,
                    message: e.target.value
                  }));
                }}
            />
            <div className='w-full flex justify-center items-center'>
              <Button
                type='submit'
                arialLabel='Submit now'
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Submit now'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}
