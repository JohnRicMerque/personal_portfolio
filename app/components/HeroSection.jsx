"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react"
import animationData from "../assets/dev-animation.json"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className='lg:py-20 py-0 px-4 relative' > 
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-96 w-96 z-0 blur-lg absolute top-3/4 -right-96 transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.3}} 
              className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-br from-green-500 via to-blue-200">Hi, I'm{""}</span>
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
                <p className="text-[#ADB7BE] text-sm sm:text-base mb-6 lg:text-xl">
                    Dedicated to learning and building valuable technology. 
                </p>
                <div className="div">
                    <button className='px-1 py-1 w-full sm:w-fit rounded-2xl bg-gradient-to-br from-white via-green-500 to-blue-500 mr-4 bg-white hover:bg-slate-200 text-black'>
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-xl px-5 py-2 text-white">
                            Hire Me
                        </span>
                    </button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-xl bg-transparent hover:bg-slate-800
                    text-white border border-white mt-3'>Download CV</button>
                </div>
            </motion.div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection