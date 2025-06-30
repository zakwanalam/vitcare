import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, HomeIcon } from 'lucide-react'
import React from 'react'
import injection from "@public/Screenshot 2025-06-30 113713-fotor-bg-remover-20250630121159.png"
import Image from 'next/image'

function CovidSection() {
  return (
    <section className="flex flex-col transition-all md:flex-1/3  md:flex-row items-center justify-between gap-10 md:gap-20 px-6 md:px-30 py-10 md:py-30">
          <div className="w-full md:w-1/2 bg-primary flex flex-col gap-10  py-10 items-center max-md:scale-90 justify-center rounded-3xl bg-primay min-h-[300px] md:min-h-[600px] md:min-w-[250px] md:max-w-[400px] lg:max-w-[330px]">
            <h2 className="text-white font-medium text-3xl">Covid-19 <br />Vaccine</h2>
            <Button className=" bg-[var(--primaryDark)]/90  p-10 hover:bg-[var(--primaryDark)]/60 cursor-pointer rounded-2xl">1,499 Patients</Button>
            <div className="relative pt-10 mr-2 w-50 h-50">
              <Image className="absolute w-full h-full drop-shadow-2xl drop-shadow-black/40  rotate-100 object-contain scale-220 max-md:scale-280 max-sm:scale-250  aspect-square" src={injection} alt="" />
            </div>
            <div className="flex items-center  shadow-2xl  cursor-pointer justify-center-safe px-10 p-4 bg-gradient-to-r from-blue-950 to-cyan-600  rounded-2xl">
              <Button className="bg-transparent hover:bg-transparent cursor-pointer"> Register Now</Button>
              <ArrowRight color="white" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full  md:w-1/2 flex flex-col text-center md:text-left mt-10 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              COVID Vaccine Service
            </h1>
            <h2 className="text-2xl md:text-4xl mt-2">Delivery Service</h2>
            <p className="pt-4 text-sm md:text-base">
            Get vaccinated from the comfort of your home. Our certified healthcare professionals ensure safe, fast, and reliable vaccine delivery at your doorstep.
            </p>

            <div className="my-10 h-1 w-1/4 rounded-full bg-primary mx-auto md:mx-0"></div>

            <div className="flex   md:flex-row gap-6 md:gap-10 justify-center md:justify-start">
              {/* Feature 1 */}
              <div className="flex flex-1/2 flex-col items-center md:items-start space-y-2">
                <HomeIcon className="bg-primary rounded-xl text-white w-10 h-10 p-2 aspect-square" />
                <h5 className="font-bold">Home Service</h5>
                <p className="text-sm text-center md:text-left">
                  Our medical team provides professional care directly at your home for maximum comfort and convenience.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-1/2 flex-col items-center md:items-start space-y-2">
                <Clock className="bg-primary rounded-xl text-white w-10 h-10 p-2 aspect-square" />
                <h5 className="font-bold">1 Hour Service</h5>
                <p className="text-sm text-center md:text-left">
                  "Fast response time with expert care delivered to you in under 60 minutes."
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default CovidSection