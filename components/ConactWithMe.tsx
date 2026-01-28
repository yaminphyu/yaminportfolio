import React from 'react'
import SectionWrapper from './SectionWrapper'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function ConactWithMe() {
  return (
    <SectionWrapper
      miniHeaderText="Connect with me"
      headerText="Get in touch"
    >
      <div className='w-full md:w-[70%] lg:w-[50%] h-full flex flex-col items-center justify-center gap-12'>
        <span className='text-center'>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</span>
        <div className='w-full'>
          <form className='flex flex-col gap-8'>
            <div className='w-full flex gap-4'>
              <input type="text" placeholder='Enter your name' className='w-1/2 p-2.5 rounded-md bg-[#1e0f36] border border-white/30 text-white'/>
              <input type="email" placeholder='Enter your email' className='w-1/2 p-2.5 rounded-md bg-[#1e0f36] border border-white/30 text-white'/>
            </div>
            <textarea
              placeholder='Enter your message'
              rows={8}
              className='p-2.5 rounded-md bg-[#1e0f36] border border-white/30 text-white w-full'
            />
            <div className='w-full flex justify-center items-center'>
              <Button>
                Submit now
                <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}
