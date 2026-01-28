import React from 'react'
import SectionWrapper from './SectionWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faRecycle } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

export default function WorkExperiences() {
  return (
    <SectionWrapper
      miniHeaderText="My portfolio"
      headerText="My work experiences"
      sectionId="workexperiences"
    >
      <span className='text-sm md:text-base text-center text-white'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</span>
      <div className="w-full lg:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="relative h-60 rounded-xl bg-center bg-cover group"
            style={{ backgroundImage: "url(/webImage.jpeg)" }}
          >
            <div
              className="
                absolute right-6 bottom-6
                w-[60%] md:w-[80%] h-24
                bg-white rounded-lg
                flex justify-between items-center
                gap-4 px-4
                translate-y-2
                transition-all duration-300 ease-out
                group-hover:opacity-100
                group-hover:translate-y-0
              ">
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-gray-900 text-base md:text-lg font-semibold">Project Title {i}</h3>
                <h5 className="text-sm text-gray-800">Web Design</h5>
              </div>

              <FontAwesomeIcon icon={faRecycle} className="text-2xl text-gray-800" />
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center items-center mt-6'>
        <Button>
          Show more
          <FontAwesomeIcon icon={faArrowRight} className="text-base md:text-lg ml-2" />
        </Button>
      </div>
    </SectionWrapper>
  )
}
