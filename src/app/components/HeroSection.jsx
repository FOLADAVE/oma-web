"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
    

const HeroSection = () => {
  return (
    
<section className='font-lato my-12 px-12' id='home'>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className='font-lato text-customGrey mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-950">
                Welcome to {""}
                </span>
                <br></br>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'The Diction Oracle website',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'OMA DICTION',
        1000,
        
      ]}
      wrapper="span"
      speed={200}
      repeat={Infinity}
    />
              </h1>
            <p className='text-paragraphColor text-base sm:text-lg mb-6 lg:text-lg'>
                OMA is a place where we teach both young and old how to read, write, and speak impeccable standard English.
            </p>  
            <div>
            <a href="mailto:partnerships@omadiction.pro">
  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-indigo-950 hover:bg-indigo-900 text-customBlue font-semibold'>
    Contact Us
  </button>
</a>
                <a href="#services">
                <button className='px-6 py-3 w-full sm:w-fit rounded-full font-semibold bg-transparent hover:bg-rose-800 hover:text-customBlue text-indigo-950 border-2 border-rose-800 mt-3'>Our services</button>
                </a>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-indigo-950 border-rose-900 border-8 w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] relative items-center justify-center animate-bounce-slow max-920:animate-pulse-slow">
  <Image
    src="/images/oma-hero.png"
    alt="oma image"
    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    width={310}
    height={310}
  />
</div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection
