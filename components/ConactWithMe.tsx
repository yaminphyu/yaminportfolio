import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function ConactWithMe() {
  const [contactInformation, setContactInformation] = useState({
    name: '',
    email: '',
    message: ''
  });

  const MySwal = withReactContent(Swal)

  const sendEmail = async (e?: React.MouseEvent) => {
    e?.preventDefault();

    const { name, email, message } = contactInformation;
    if (!name || !email || !message) return;
    
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        message: `
          Hi, this is ${name}.
          ${message}
        `
      }),
    });
  
    const data = await res.json();

    setContactInformation({
      name: '',
      email: '',
      message: ''
    });

    const { success } = data || {};

    if (!success) return;
    MySwal.fire({
      icon: "success",
      title: "Successfully sending!",
      showConfirmButton: false,
      timer: 1800
    });
  };

  return (
    <SectionWrapper
      miniHeaderText="Connect with me"
      headerText="Get in touch"
      sectionId="contact-me"
    >
      <div className='w-full md:w-[70%] lg:w-[50%] h-full flex flex-col items-center justify-center gap-12'>
        <span className='text-center text-white text-sm md:text-base'>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</span>
        <div className='w-full'>
          <form
            className='flex flex-col gap-8'
            onSubmit={(e) => {
              e.preventDefault();
              sendEmail();
            }}
          >
            <div className='w-full flex gap-4'>
              <input
                type="text"
                placeholder='Enter your name'
                className='w-1/2 p-2.5 rounded-md bg-[#1e0f36] border border-white/30 text-white text-sm md:text-base'
                value={contactInformation?.name}
                onChange={(e) => {
                  setContactInformation({
                    ...contactInformation,
                    name: e.target.value
                  });
                }}
              />
              <input
                type="email"
                placeholder='Enter your email'
                className='w-1/2 p-2.5 rounded-md bg-[#1e0f36] border border-white/30 text-white text-sm md:text-base'
                value={contactInformation?.email}
                onChange={(e) => {
                  setContactInformation({
                    ...contactInformation,
                    email: e.target.value
                  });
                }}
              />
            </div>
            <textarea
              placeholder='Enter your message'
              rows={8}
              className='p-2.5 rounded-md bg-[#1e0f36] border border-white/30 text-white w-full text-sm md:text-base'
              value={contactInformation?.message}
              onChange={(e) => {
                setContactInformation({
                  ...contactInformation,
                  message: e.target.value
                });
              }}
            />
            <div className='w-full flex justify-center items-center'>
              <Button
                type='submit'
              >
                Submit now
                <FontAwesomeIcon icon={faArrowRight} className="text-base md:text-lg ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}
