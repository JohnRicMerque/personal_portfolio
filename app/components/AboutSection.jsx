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

library.add(
  faJs,faHtml5, faCss3, faPython, faJava, faPhp, faFigma, faGithub, faReact, faUser,
)
const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className='flex flex-col gap-4'>
          <div className='bg-[#18191E] border border-[#33353F] p-4 hover:shadow-md hover:-translate-y-0.5 transition ease-in-out' >
            <p className='text-sm mb-2 text-slate-300'>Languages</p>
            <div className='grid md:grid-cols-8 gap-4'>
              <FontAwesomeIcon icon={faJs} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <FontAwesomeIcon icon={faPython} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <FontAwesomeIcon icon={faJava} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <FontAwesomeIcon icon={faPhp} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <FontAwesomeIcon icon={faHtml5} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <FontAwesomeIcon icon={faCss3} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <Image className="" src={"/images/kotlin.svg"} alt={"kotlin.svg"} width={40} height={40} />
            </div>
          </div>

          <div className='bg-[#18191E] border border-[rgb(51,53,63)] p-4 hover:shadow-md hover:-translate-y-0.5 transition ease-in-out'>
            <p className='text-sm mb-2 text-slate-300'>Web Frameworks</p>
            <div className='grid md:grid-cols-8 gap-4'>
              <Image className="dark:invert" src={"/images/nextjs.svg"} alt={"nextjs.svg"} width={40} height={40} />
              <FontAwesomeIcon icon={faReact} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <Image className="" src={"/images/tailwindcss.svg"} alt={"tailwind.svg"} width={40} height={40} />
            </div>
          </div>
          
          <div className='bg-[#18191E] border border-[rgb(51,53,63)] p-4 hover:shadow-md hover:-translate-y-0.5 transition ease-in-out'>
            <p className='text-sm mb-2 text-slate-300'>Data</p>
            <div className='grid md:grid-cols-8 gap-4'>
              <Image className="" src={"/images/sql.png"} alt={"sql.png"} width={40} height={40} />
              <FontAwesomeIcon icon={faPython} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <Image className="" src={"/images/postgresql.svg"} alt={"postgresql.svg"} width={40} height={40} />
            </div>
          </div>
          
          <div className='bg-[#18191E] border border-[#33353F] p-4 hover:shadow-md hover:-translate-y-0.5 transition ease-in-out'>
            <p className='text-sm mb-2 text-slate-300'>Other Tools</p>
            <div className='grid md:grid-cols-8 gap-4'>
              <Image className="" src={"/images/firebase.svg"} alt={"firebase.svg"} width={50} height={40} />
              <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
              <FontAwesomeIcon icon={faFigma} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
            </div>
          </div>
        </div>
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
        <></>
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
              <Image className='rounded-full ' src="/images/about-me.png" width={250} height={250} />
            </div>
            <div className='mb-4 flex justify-center items-center gap-1'>
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
