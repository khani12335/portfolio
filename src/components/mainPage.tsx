"use client";
import { useEffect } from "react";
// for animation or scroll lab
import AOS from "aos";
import "aos/dist/aos.css";

import { Detail } from "./detail";
import { Sidebar } from "./sidebar";
import MobileCard from "./mobilecomponents/card";

import Skills from "./mobilecomponents/skills";
import Projects from "./mobilecomponents/projects";
import Education from "./mobilecomponents/education";
import Experience from "./mobilecomponents/experience";
import Contact from "./mobilecomponents/contact";

const MainPage = () => {
    // useEffect for AOS
    useEffect(() => {
        AOS.init({
          once: false,
        });
      }, []);
  return (
    <div>
      {/* mobile screen*/}
      <div className="over-flow-x-hidden h-screen md:hidden">
        {/* card */}
        <MobileCard/>
        {/* education */}
        <Education/>
        {/* experince */}
        <Experience/>
        {/* skill */}
        <Skills/>
        {/* project */}
        <Projects/>
        {/* contact */}
        <Contact/>
      </div>
      {/* desktop screen */}
    <div className="hidden md:flex md:overflow-hidden h-screen">
      {/* side bar */}
      <div className="w-1/5"><Sidebar/></div>
      {/* details */}
      <div className="w-full"><Detail/></div>
    </div>
    </div>
  )
}

export default MainPage
