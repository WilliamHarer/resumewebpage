'use client'

import InfoPaper from "@/View/Components/InfoPaper";
import PreviousEmployment from "@/View/Components/ResumeText/PreviousEmployment";
import React from "react";
import InfoCard from "@/View/Components/InfoCard";
import Image from 'next/image'
import Background from '../../public/Assets/BackgroundImageFade.jpg'
import Avatar from '../../public/Assets/Avatar.jpg'
import Skills from "@/View/Components/ResumeText/Skills";
import Header from "@/View/Components/Header";
import {useScrollTrigger} from "@mui/material";
import ContentBreak from "@/View/Components/ContentBreak";
import Introduction from "@/View/Components/Introduction";
import ResumeSection from "@/View/Components/ResumeSection";
import ProjectsSection from "@/View/Components/ProjectsSection";
import ProjectButton from "@/View/Components/ProjectButton";





export default function Home() {
  return (
      <main style={{height:'auto', backgroundColor:'#88A0C2'}}>
          <div>
              <Header/>
              {/*<div id='background_fade'/>*/}
              <div className={"imageParent"}>
                  <div style={{height:'auto',position:"relative", display:"grid"}}>
                      <div className={"gradientOverlay"}></div>
                      <Image src={Background} alt={'photograph of portland cityscape'} className={'gradientImage'}/>
                  </div>
              </div>
              <ContentBreak/>
              <Introduction/>
              <ContentBreak/>
              <ResumeSection/>
              <ContentBreak/>
              <ProjectsSection/>
              <ProjectButton/>
              <ContentBreak/>
        </div>
      </main>
  )
}
