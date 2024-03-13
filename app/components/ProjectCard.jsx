import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div className='hover:border-gray-800 border border-[#121212] rounded-xl maingroup'>
      <div className='h-52 md:h-62 rounded-t-xl relative group' style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover"}}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] gap-4 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500">
            <Link href={gitUrl} className='h-11 w-11 border-2 relative rounded-xl border-[#ADB7BE] hover:border-white group/link'>
                <CodeBracketIcon className='h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
            </Link>
            <Link href={previewUrl} className='h-11 w-11 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                <EyeIcon className='h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
            </Link>
        </div>
      </div>
      <div className="text-white hover: hover:text-slate-400 rounded-b-xl bg-[#181818] py-3 px-4 min-h-24 ">
        <h5 className='font-lg font-semibold mb-1'>{title}</h5>
        <p className='text-sm text-[#ADB7Be] justify-center align-middle'>{description}</p>
      </div>
    </div>
  );
};


export default ProjectCard
