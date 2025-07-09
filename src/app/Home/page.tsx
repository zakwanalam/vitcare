import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Statistics from "./components/Statistics";
import GlobalContainer from "@/components/GlobalContainer";
import React from "react";
import Benefits from "./components/Benefits";
import Testemonials from "./components/Testemonials";
import bgImg from '@public/3798.jpg'
import CovidSection from "./CovidSection";
import { Footer } from "@/components/footer7";
import Newsletter from "./components/Newsletter";
import { Navbar } from "@/components/navbar1";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <React.Fragment>
      <GlobalContainer classname="  bg-white fixed z-40 shadow-2xl ">
        <div className="px-3">
          <Navbar />
        </div>
      </GlobalContainer>
      {/* <GlobalContainer> */}
        <HeroSection />
      {/* </GlobalContainer> */}
      <GlobalContainer classname="py-10">
        <Statistics />
      </GlobalContainer>
      <GlobalContainer classname="bg-accent py-15">
        <Benefits />
      </GlobalContainer>
      <GlobalContainer classname="relative">
        <div className="absolute -z-40 bg-primary w-screen left-0 h-full"></div>
        <Image className="absolute -z-30 opacity-36  w-screen left-0 h-full" src={bgImg} alt="" />
        <Testemonials />
      </GlobalContainer>
      <GlobalContainer classname="bg-accent">
        <CovidSection />
      </GlobalContainer>
      <GlobalContainer classname="bg-accent py-15 px-5 ">
        <Newsletter />
      </GlobalContainer>
      <GlobalContainer classname="bg-primary ">
        <Footer />
      </GlobalContainer>
    </React.Fragment>
  );
}
