import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from "next/link"
import Image from 'next/image'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl, techStack}) => {
  return (
    <div className='rounded-xl maingroup'>
      <div className='h-32 md:h-40 lg:h-40 rounded-t-xl relative group' style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover"}}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#121212] gap-4 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-1000" data-aos="fade-up">
            <Link
              href={gitUrl} 
              className='h-9 w-9 border-2 relative rounded-xl border-[#ADB7BE] hover:border-white group/link'>
                  <CodeBracketIcon 
                    className='h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white hover:scale-110 transition-all duration-300 ease-in-out'>
                  </CodeBracketIcon>        
            </Link>
            <Link href={previewUrl} className='h-9 w-9 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                <EyeIcon className='h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white hover:scale-110 transition-all duration-300 ease-in-out'/>
            </Link>
        </div>
      </div>
      <div className="text-white hover: hover:text-green-200 rounded-b-xl bg-[#181818] py-3 px-4 min-h-20">
        <div className="flex justify-between">
          <h6 className='text-sm font-semibold mb-1'>{title}</h6>
          <div className="flex gap-1">
            {techStack.map((technology, index) => (
            // <p key={index}>
            //   #{technology}
            // </p>
            <Image className='h-[15px]' src={`/images/icons/${technology}.png` } width={15} height={15}></Image>
            ))}
          </div>
        </div>
        <p className='text-xs text-[#ADB7Be] justify-center align-middle'>{description}</p>
      </div>
    </div>
  );
};


export default ProjectCard
