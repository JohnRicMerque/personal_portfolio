"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className='list-disc pl-4'>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
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
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-me.png" width={400} height={400}></Image>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg text-justify'>A Computer Engineering Student at Polytechnic University of the Philippines aspiring to be a skilled developer or data engineer. Values deep work, atomic habits, fun and the passion for learning and building technology.</p> 
                
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
