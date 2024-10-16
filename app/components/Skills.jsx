import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faJava, faPhp, faHtml5, faCss3, faReact, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const SkillsSection = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* Languages Section */}
      <div className='bg-[#18191E] border border-[#33353F] p-4 hover:shadow-md hover:-translate-y-0.5 transition ease-in-out'>
        <p className='text-sm mb-2 text-slate-300'>Languages</p>
        <div className='grid md:grid-cols-8 gap-4'>
          <FontAwesomeIcon icon={faJs} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <FontAwesomeIcon icon={faPython} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <FontAwesomeIcon icon={faJava} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <FontAwesomeIcon icon={faPhp} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <FontAwesomeIcon icon={faHtml5} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <FontAwesomeIcon icon={faCss3} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <Image src={"/images/kotlin.svg"} alt={"kotlin.svg"} width={40} height={40} />
        </div>
      </div>

      {/* Web Frameworks Section */}
      <div className='bg-[#18191E] border border-[rgb(51,53,63)] p-4 hover:shadow-md hover:-translate-y-0.5 transition ease-in-out'>
        <p className='text-sm mb-2 text-slate-300'>Web Frameworks</p>
        <div className='grid md:grid-cols-8 gap-4'>
          <Image src={"/images/nextjs.svg"} alt={"nextjs.svg"} width={40} height={40} style={{ filter: "invert(100%)" }} />
          <FontAwesomeIcon icon={faReact} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <Image src={"/images/tailwindcss.svg"} alt={"tailwind.svg"} width={40} height={40} />
        </div>
      </div>

      {/* Data Section */}
      <div className='bg-[#18191E] border border-[rgb(51,53,63)] p-4 hover:shadow-md hover:-translate-y-0.5 transition ease-in-out'>
        <p className='text-sm mb-2 text-slate-300'>Data</p>
        <div className='grid md:grid-cols-8 gap-4'>
          <Image src={"/images/sql.png"} alt={"sql.png"} width={40} height={40} />
          <FontAwesomeIcon icon={faPython} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <Image src={"/images/postgresql.svg"} alt={"postgresql.svg"} width={40} height={40} />
        </div>
      </div>

      {/* Other Tools Section */}
      <div className='bg-[#18191E] border border-[#33353F] p-4 hover:shadow-md hover:-translate-y-0.5 transition ease-in-out'>
        <p className='text-sm mb-2 text-slate-300'>Other Tools</p>
        <div className='grid md:grid-cols-8 gap-4'>
          <Image src={"/images/firebase.svg"} alt={"firebase.svg"} width={50} height={40} />
          <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
          <FontAwesomeIcon icon={faFigma} style={{color: "#ffffff", width:"40px", height:"40px"}}/>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
