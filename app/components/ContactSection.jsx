import React from 'react';
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from 'next/image';
import Footer from './Footer';

const EmailSection = () => {
  return (
    <section id="contact" className='min-h-screen grid place-items-center relative'>
      <div className='lg:py-20 py-0 lg:px-14 px-4 flex flex-col align-middle mt-8'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/4 left-10 transform -translate-x-1/2 -translate-1/2"></div>
        <div className='flex justify-evenly'>
              {/* <form action="" className='flex flex-col'>
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
              </form> */}
              <Link href={"https://github.com/JohnRicMerque"}>
                <svg id="github" className='h-12 text-white hover:text-blue-500' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              </Link>
              <Link href={"https://www.linkedin.com/in/john-ric-merque-904045110/"}>
                <svg id="linkedin" className='h-12 text-white hover:text-blue-500' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </Link>
              <Link href={"https://www.facebook.com/johnric.merque/"}>
                <svg id="facebook" className='h-12 text-white hover:text-blue-500' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
              </Link>
        
              <svg id="email" className='h-12 text-white hover:text-blue-500' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        
        </div>
        <div className='z-10 mt-8'>
            <h5 className='text-xl font-bold text-white my-2'>Let's connect !</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-lg text-sm text-justify'>
                {" "}
                Hey there! 👋 I'm passionate about software development and data engineering, and I'm all in for opportunities or fun project collaborations! Whether you have a wild idea you've been itching to bring to life or you're looking for someone to streamline processes with cutting-edge technology, count me in! Let's connect our skills, brainstorm some exciting concepts, and turn them into reality together. <br />  <br />Drop me a message, and let's make magic happen! 🚀💻✨
            </p>
        </div>
      </div>
      <Footer></Footer>
    </section>
  )
}

export default EmailSection
