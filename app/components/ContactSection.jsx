import React from 'react';
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section id="contact" className='grid md:grid-cols-2 md:my-12 py-24 gap-2 relative lg:px-14 px-4'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className='z-10'>
          <h5 className='text-xl font-bold text-white my-2'>Let's connect !</h5>
          <p className='text-[#ADB7BE] mb-4 max-w-lg'>
              {" "}
              Hey there! 👋 I'm passionate about software development and data engineering, and I'm all in for opportunities or fun project collaborations! Whether you have a wild idea you've been itching to bring to life or you're looking for someone to streamline processes with cutting-edge technology, count me in! Let's connect our skills, brainstorm some exciting concepts, and turn them into reality together. <br />Drop me a message, and let's make magic happen! 🚀💻✨
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href={"https://github.com/JohnRicMerque"}>
                <Image src={GithubIcon} alt="GitHub Icon"/>
            </Link>
            <Link href={"https://www.linkedin.com/in/john-ric-merque-904045110/"}>
                <Image src={LinkedinIcon} alt="LinkedIn Icon"/>
            </Link>
            
          </div>  
      </div>
      <div>
            <form action="" className='flex flex-col'>
              <div className='mb-6' >
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Email</label>
                <input
                  type="email"
                  id='email'
                  required
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='example@gmail.com'
                />
              </div>
              <div className='mb-6' >
                <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                <input
                  type="text"
                  id='subject'
                  required
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder='Say Hi !'
                />
              </div>
              <div className="mb-6">
                <label 
                  htmlFor="message"
                  className='text-white block text-sm mb-2 font-medium'>
                    Message
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                  placeholder="Let's talk about... " />
              </div>
              <button
                type='submit'
                className='bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-lg w-full' >
                Send Message   
              </button>
            </form>
      </div>
    </section>
  )
}

export default EmailSection
