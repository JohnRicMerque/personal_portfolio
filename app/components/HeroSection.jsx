"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react"
import animationData from "../assets/dev-animation.json"
import { motion } from "framer-motion"
import Cube from "./Cube"
import Footer from  './Footer'

const HeroSection = () => {
  return (
    <section className='min-h-screen grid place-items-center relative'>
        <div className='lg:py-20 py-0 lg:px-14 px-4 flex align-middle mt-0 md:mt-8' >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-96 w-96 z-0 blur-lg absolute top-3/4 -right-96 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center w-full">
                <div className="col-span-4 place-self-center mt-2 sm:mt-0">
                    <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        {/* <Image
                          src="/images/about-me.png"
                          alt="hero image"
                          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                          width={300}
                          height={300}
                          /> */}
                          {/* <Lottie className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                          width={1000}
                          height={1000}
                          animationData={animationData}>
                          </Lottie> */}
                          <Cube/>
                    </div>
                </div>
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 0.3}}
                  className="col-span-8 place-self-center sm:text-left justify-self-start mt-4">
                    <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-300">Hi, I'm{""}</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'John Ric!',
                            1000,
                            'Software Developer',
                            1000,
                            'Data Engineer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    </h1>
                    <p className="text-[#ADB7BE] text-xs sm:text-base mb-4 lg:text-xl">
                        I enjoy learning and building valuable technology.
                    </p>
                    <div className="">
                        <button className='px-1 py-1 w-full sm:w-fit rounded-2xl bg-gradient-to-br from-white via-green-500 to-green-100 mr-4 bg-white hover:bg-slate-200 text-black hover:translate-y-0.5 transition ease-in-out'>
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-xl px-5 py-2 text-white transition ease-in-out">
                                Hire Me
                            </span>
                        </button>
                        <a href="resume/John-Ric-Merque-Resume-Dev.pdf" target="_blank" rel="noopener noreferrer">
                          <button className='px-6 py-3 w-full sm:w-fit rounded-xl bg-transparent hover:bg-slate-800
                          text-white border border-white mt-3 hover:translate-y-0.5'>Resume</button>
                        </a>
                    </div>
                </motion.div>
            </div>
            
        </div>
        <Footer></Footer>
    </section>
  )
}

export default HeroSection