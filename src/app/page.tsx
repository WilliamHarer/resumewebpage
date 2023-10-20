import InfoPaper from "@/View/Components/InfoPaper";
import PreviousEmployment from "@/View/Components/ResumeText/PreviousEmployment";
import React from "react";
import InfoCard from "@/View/Components/InfoCard";

export default function Home() {
  return (
      <main style={{height:'100%'}}>
          <div style={{height:'100%', display: 'flex'}}>
              <div className={'LandingDivLeft'} style={{height:'100%', maxWidth: '30%', flex:1, backgroundColor:'#EBB6AA', flexShrink: 0}}>
                  <InfoCard backgroundColor={'#246170'} height={'30%'}/>
                  <InfoCard height={'40%'}/>
                  <InfoCard height={'20%'}/>
              </div>
              <div className={'LandingDivRight'} style={{height:'100%', maxWidth: '70%',flex:1, backgroundColor:'#ACD4B1', flexShrink: 0, boxShadow: "      inset 0 1px 1px hsl(0deg 0% 0% / 0.075),\n" +
                      "      inset 0 2px 2px hsl(0deg 0% 0% / 0.075),\n" +
                      "      inset 0 4px 4px hsl(0deg 0% 0% / 0.075),\n" +
                      "      inset 0 8px 8px hsl(0deg 0% 0% / 0.075),\n" +
                      "      inset 0 16px 16px hsl(0deg 0% 0% / 0.075)"}}>
                  <InfoPaper>
                      <PreviousEmployment />
                  </InfoPaper>
              </div>

          </div>
      </main>
  )
}
