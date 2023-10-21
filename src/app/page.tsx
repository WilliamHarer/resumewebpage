import InfoPaper from "@/View/Components/InfoPaper";
import PreviousEmployment from "@/View/Components/ResumeText/PreviousEmployment";
import React from "react";
import InfoCard from "@/View/Components/InfoCard";
import Image from 'next/image'
import Avatar from '../../public/Assets/Avatar.jpg'
export default function Home() {
  return (
      <main style={{height:'100%'}}>
          <div style={{height:'100%', display: 'flex'}}>
              <div className={'LandingDivLeft'} style={{height:'100%', maxWidth: '30%', flex:1, backgroundColor:'#EBB6AA', flexShrink: 0}}>
                  <InfoCard backgroundColor={'#246170'} height={'30%'}>
                      <div style={{display:'flex',flexDirection:'column'}}>
                          <div style={{maxHeight:'60%',maxWidth:'100%', flex:1, flexShrink:0, display:'flex',flexDirection:'row' }}>
                              <div style={{maxHeight:'60%',marginLeft:'10px', marginTop: '10px', marginRight:'20px', flex:1, flexShrink:0, maxWidth:'125px'}}>
                                  <Image src={Avatar} alt={'Headshot'} width={125} height={125} style={{borderRadius:200, marginLeft:'10px', marginTop: '10px', flex:1, flexShrink:0, maxWidth:'125px'}}/>
                              </div>
                              <div className={'NameAndTitle'} style={{flex:1, flexShrink:0, maxHeight:'60%',maxWidth:'75%',textAlign:'center', marginTop:'40pt'}}>
                                  <p style={{fontSize:'20pt', fontWeight: 'Bold', color:'#E9EAE4'}}>William Harer</p>
                                  <p style={{fontSize:'20pt', color:'#E9EAE4', marginTop: '10px'}}>SWE/SDET</p>
                              </div>
                          </div>
                          <div className={'Blurb'} style={{marginTop:'10px',marginLeft:'10px', maxWidth:'100%', maxHeight:'40%', textAlign:'center'}}>
                              <p style={{marginLeft:'20px',marginRight:'20px',marginBottom:'20px',fontSize:'16pt',color:'#E9EAE4'}}>Mid level Career Software Engineer, always on the look out for new and interesting tech to study.</p>
                          </div>
                      </div>
                  </InfoCard>
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
