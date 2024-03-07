"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

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
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusantium consequuntur perferendis deleniti corrupti saepe nesciunt nam deserunt eaque voluptatem culpa quisquam officiis qui aliquam voluptatibus quibusdam dolorum illo. Autem.</p> 
                
                <div className="flex flex-row mt-8">
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
            </div>
        </div>
    </section>
  )
}

export default AboutSection
