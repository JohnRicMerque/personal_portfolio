import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section> 
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"><span className="text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-500">Hi, I'm{""}</span>
                John Ric!
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta rem quo veniam.
                </p>
                <div className="div">
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-white via-green-500 to-blue-500 mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800
                    text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                      src="/images/hero-image.png"
                      alt="hero image"
                      className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                      width={300}
                      height={300}
                      />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection