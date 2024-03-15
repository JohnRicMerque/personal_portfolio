"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Lottie from "lottie-react"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3, faPython, faJava, faPhp, faFigma, faGithub, } from  "@fortawesome/free-brands-svg-icons"

library.add(
  faJs,faHtml5, faCss3, faPython, faJava, faPhp, faFigma, faGithub, 
)
const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className='flex flex-col gap-8'>
          <div className='bg-[#18191E] border border-[#33353F] p-4'>
            <p className='text-sm mb-2'>Programming Languages</p>
            <div className='grid md:grid-cols-8 gap-4'>
              <FontAwesomeIcon icon={faJs} style={{color: "#ffffff", width:"50px", height:"50px"}}/>
              <FontAwesomeIcon icon={faPython} style={{color: "#ffffff", width:"50px", height:"50px"}}/>
              <FontAwesomeIcon icon={faJava} style={{color: "#ffffff", width:"50px", height:"50px"}}/>
              <FontAwesomeIcon icon={faPhp} style={{color: "#ffffff", width:"50px", height:"50px"}}/>
            </div>
          </div>
          <div className='bg-[#18191E] border border-[#33353F] p-4'>
            <p className='text-sm mb-2'>Markup Languages</p>
            <div className='grid md:grid-cols-8 gap-4'>
              <FontAwesomeIcon icon={faHtml5} style={{color: "#ffffff", width:"50px", height:"50px"}}/>
              <FontAwesomeIcon icon={faCss3} style={{color: "#ffffff", width:"50px", height:"50px"}}/>
            </div>
           
          </div>
          <div className='bg-[#18191E] border border-[#33353F] p-4'>
            <p className='text-sm mb-2'>Other Tools</p>
            <div className='grid md:grid-cols-8 gap-4'>
              <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", width:"50px", height:"50px"}}/>
              <FontAwesomeIcon icon={faFigma} style={{color: "#ffffff", width:"50px", height:"50px"}}/>
            </div>
          </div>
        </div>
      )
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className='list-disc pl-4'>
              <li>Polytechnic University of the Philippines</li>
              <li>Romblon State University - Laboratory Science High School</li>
          </ul>
        )
      },
      {
        title: "Certifications",
        id: "certifications",
        content: (
          <ul className='list-disc pl-4'>
              <li>Responsive Web Design</li>
              <li>JavaScript Data Structures and Algorithms</li>
              <li>Introduction to SQl</li>
          </ul>
        )
      }
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
    <section id="about" className='text-white min-h-screen align-middle lg:px-14 px-4 grid place-items-center'>
        <div className='md:grid md:grid-cols-12 gap-10 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <div className='flex flex-col justify-center w-full md:col-span-5 gap-4'>
            <div className="flex justify-center">
              <Image className='rounded-full' src="/images/about-me.png" width={300} height={300} />
            </div>
            <h2 className='text-2xl font-bold text-white mb-4 text-center'>About Me</h2>
            <p className='text-sm lg:text-base text-justify'>A Computer Engineering Student at Polytechnic University of the Philippines aspiring to be a skilled developer or data engineer. Values deep work, atomic habits, fun and the passion for learning and building technology.</p>
          </div>
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full md:col-span-7' >
              <div className="flex flex-row mt-8 justify-start">
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
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                  >
                      {" "}Certifications{" "}
                  </TabButton>
              </div>
              <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection
