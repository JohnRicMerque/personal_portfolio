"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Lottie from "lottie-react"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3, faPython, faJava, faPhp, faFigma, faGithub, faReact } from  "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

library.add(
  faJs,faHtml5, faCss3, faPython, faJava, faPhp, faFigma, faGithub, faReact, faUser,
)
const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <Skills />
      )
    },
    {
        title: "Education",
        id: "education",
        content: (
           <Education />
        )
      },
      {
        title: "Experience",
        id: "experience",
        content: (
          <Experience />
        )
      },
      {
        title: "Interests",
        id: "interests",
        content: (
          <ul className='list-disc'>
          </ul>
        )
      },
]

const AboutSection = () => {
  const [ tab, setTab ] = useState("skills")
  const [ isPending, startTransition ] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  }

  return (
    <section id="about" className='text-white align-middle lg:px-14 px-4 grid place-items-center'>
        <div className='md:grid md:grid-cols-12 gap-10 py-4 px-4 xl:gap-16 sm:py-10 xl:px-16 min-h-screen items-center'>
          <div className=' mt-12 flex flex-col justify-center w-full md:col-span-4 gap-4'>
            <div className="flex justify-center">
              <Image className='' src="/images/about-me-image2-black.gif" width={250} height={250} alt='Profile Picture'/>
            </div>
            <div className='mb-2 flex justify-center items-center gap-1'>
              <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", width:"20px", height:"20px"}}/>
              <h2 className='text-xl font-bold text-white text-center'>  About Me</h2>
            </div>
            <p className='text-green-300 text-base font-semibold'> John Ric Merque | 21 </p>
            <p className='text-slate-300 text-sm lg:text-sm text-justify'>A Computer Engineering Student at Polytechnic University of the Philippines aspiring to be a skilled developer or data engineer. </p>
            
            <p className='text-slate-300 text-sm lg:text-sm text-justify'>I value deep work, atomic habits, having fun and the passion for learning and building technology with colleagues.</p>
          </div>
          <div className='h-full mt-4 md:mt-0 text-left flex justify-start flex-col md:col-span-8' >
                <div className='h-full flex flex-col '>
                  <div className="flex flex-row gap-4 mt-8">
                      <TabButton
                      selectTab={() => handleTabChange("skills")}
                      active={tab === "skills"}
                      >
                          {" "}Skills{" "}
                      </TabButton>
                      <TabButton
                      selectTab={() => handleTabChange("education")}
                      active={tab === "education"}
                      >
                          {" "}Education{" "}
                      </TabButton>
                      <TabButton
                      selectTab={() => handleTabChange("experience")}
                      active={tab === "experience"}
                      >
                          {" "}Experience{" "}
                      </TabButton>
                      <TabButton
                      selectTab={() => handleTabChange("interests")}
                      active={tab === "interests"}
                      >
                          {" "}Interests{" "}
                      </TabButton>
                  </div>
                  <div className="mt-4">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection
