'use client'
import Image from 'next/image'
import React from 'react'
import doctorImg from '@public/doctor.png'
import GlobalContainer from '@/components/GlobalContainer'
import { motion } from "framer-motion";

import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar1'
function HeroSection() {
  return (
    <motion.section id='hero' className="w-full py-40 max-md:px-20 relative overflow-hidden flex justify-center" initial={{ opacity: 0 }}
      animate={{ opacity: 1, }}
      transition={{ duration: 0.8, ease: "easeOut" }}>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_oklch(0.32_0.1_250),_oklch(0.5_0.14_210),_oklch(0.8_0.1_189.704))]"></div>
      {/* <GlobalContainer classname='absolute top-10 z-30  max-md:px-18  '>
        <section className='px-10  glass-nav '>
          <Navbar />
        </section>
      </GlobalContainer> */}

      {/* Main layout container */}
      <div className="relative z-10 flex items-center justify-between h-full max-w-screen-xl mx-auto ">
        {/* Left Text */}
        <motion.div className="flex flex-col gap-4 max-w-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-white text-5xl font-extrabold leading-tight">
            VitalCare Hospital
          </h1>

          {/* Divider */}
          <div className="w-24 h-1 my-2 bg-white rounded-full"></div>

          <h2 className="text-white text-[28px] font-light leading-snug">
            The <span className="font-medium">Best Medical</span><br />
            and Treatment Center for You
          </h2>

          <p className="text-white/80 text-sm leading-relaxed">
            At VitalCare, we are committed to providing exceptional healthcare services with advanced technology,
            expert doctors, and compassionate care — because your health is our priority.
          </p>
          <Button className='mt-5 bg-gradient-to-r from-chart-5 to-orange-600 cursor-pointer rounded-full shadow-2xl transition-all duration-300 hover:shadow-neutral-800 hover:scale-105 shadow-neutral-700 md:max-w-1/2' size={'xl'}>Make An Appointment</Button>


        </motion.div>

        {/* Right Image Container */}
        <motion.div className=" relative w-[35%] max-lg:hidden h-full flex items-end justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {/* Circle Behind Image */}
          <div className=" bg-primary/30 rounded-full  absolute   -translate-y-1/2 top-1/2 w-[113%] aspect-square  overflow-clip  z-0"></div>
          <div className=" bg-primary/20 rounded-full  absolute  -translate-y-1/2 top-1/2 w-[130%] aspect-square  overflow-clip  z-0"></div>

          <div className=" bg-primary rounded-full border-4 flex  border-white overflow-clip  z-0">

            <div className="relative h-[130%] z-10">
              <Image
                src={doctorImg}
                alt="Doctor"
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </div>
          {/* Doctor Image */}
        </motion.div>
      </div>
    </motion.section >
  )
}

export default HeroSection