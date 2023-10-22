import React, { useEffect } from 'react'
import Header from './header'
import Footer1 from './footer1'
import Footer from './footer'
import './CSS/research.css'
const Research = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <section className='reserach-page'>
        <Header color={'black'}/>
         <div className='research'>
            <h2 className='about-us'>R&D for MSMEs/Startups</h2>
            <p className='about-us-text' style={{margin:"0px 5%",textAlign:"justify"}}>DSIR has extended funding support to 18 CRTDHs from FY 2014-1015. 18 CRTDHs are being established in sectors such as Electronics and Renewable Energy, Affordable Health, Environmental Interventions, Low-cost Machining and New Materials and Chemical Processes across 14 states. These CRTDHs are located at IITs, NITs, CSIR research Labs, and Universities based on the geographical location and evaluating their expertise and capability to create a conducive ecosystem for MSME clusters around them to support R&D efforts. These hubs facilitate MSMEs to undertake new and improved product and process development and skill enhancement activities. The collaborating institutions extend hands-on training, skill development, and research facilities to the MSMEs. Over the years, the 18 CRTDHs supported by DSIR have made an excellent impact by developing an infrastructure for R&D, sensitizing and engaging a large number of MSMEs/Startups for R&D activities, developing /transforming technologies, generating intellectual properties, fulfilling last-mile societal needs. Creating these CRTDHs enhanced productivity, increased the innovative skills of the MSMEs/Startups, made them globally competitive, and generated more employment.</p>
            <div className='yt-video-div'>
                <iframe width="868"  className="research-video" src="https://www.youtube.com/embed/AUf4pJS9UEw" title="CRTDH Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='research-div research-div-1'>
                <div class="overlay">
                    <p className='reserach-area-name'>Affordable Healthcare</p>
                    <p className='reserach-subarea-name'>Affordable Diagnostic Kits</p>
                    <p className='reserach-subarea-name'>Biomedical sensing</p>
                    <p className='reserach-subarea-name'>Novel Drug Delivery </p>
                    <p className='reserach-subarea-name'>Precision Medicine</p>
                    <p className='reserach-subarea-name'>Pharmaceuticals</p>
                    <p className='reserach-subarea-name'>Nutraceuticals</p>
                    <p className='reserach-subarea-name'>Cosmeceuticals</p>
                    <p className='reserach-subarea-name'>Affordable Health Insurance</p>
                </div> 
            </div>
            <div className='research-div research-div-2'>
                <div class="overlay">
                    <p className='reserach-area-name'>Electronics / Renewable Energy</p>
                    <p className='reserach-subarea-name'>Power system modernization</p>
                    <p className='reserach-subarea-name'>Renewable Energy integration.</p>
                    <p className='reserach-subarea-name'>Energy storage systems </p>
                    <p className='reserach-subarea-name'>Power Electronics</p>
                    <p className='reserach-subarea-name'>Smart grid applications</p>
                    <p className='reserach-subarea-name'>Power management and intelligent control</p>
                </div>
            </div>
            <div className='research-div research-div-3'>
                <div class="overlay">
                    <p className='reserach-area-name'>New Materials / Chemical Processes</p>
                    <p className='reserach-subarea-name'>Nanomaterials</p>
                    <p className='reserach-subarea-name'>Advanced Polymers</p>
                    <p className='reserach-subarea-name'>Sustainable Chemistry</p>
                    <p className='reserach-subarea-name'>Continuous Manufacturing</p>
                    <p className='reserach-subarea-name'>Process Development</p>
                    <p className='reserach-subarea-name'>Process Scaleup</p>
                </div>
            </div>
            <div className='research-div research-div-4'>
                <div class="overlay">
                    <p className='reserach-area-name'>Environmental Interventions</p>
                    <p className='reserach-subarea-name'>Industrial odor control biofilters</p>
                    <p className='reserach-subarea-name'>Industrial wastewater treatment </p>
                    <p className='reserach-subarea-name'>Sewage treatment</p>
                    <p className='reserach-subarea-name'>High-rate anaerobic wastewater treatment</p>
                    <p className='reserach-subarea-name'>Dioxin research and monitoring facility</p>
                </div>
            </div>
            <div className='research-div research-div-5'>
                <div class="overlay">
                    <p className='reserach-area-name'>Low-cost Machining</p>
                    <p className='reserach-subarea-name'>Low cost automation</p>
                    <p className='reserach-subarea-name'>CNC technology CAD-CAM / CIM</p>
                    <p className='reserach-subarea-name'>Tool design & engg.</p>
                    <p className='reserach-subarea-name'>Mechatronics</p>
                    <p className='reserach-subarea-name'>Factory automation</p>
                    <p className='reserach-subarea-name'>Integrated material handling system</p>
                    <p className='reserach-subarea-name'>Productivity engg. & management</p>
                </div>
            </div>
         </div>
         <p className='about-us-text research-text'>
            <br></br>
            <hr></hr>
            During the COVID-19 pandemic, our CRTDHs repurposed their activities and focused on developing novel technologies to treat and diagnose COVID-19. All our CRTDHs encouraged MSMEs to engage in R & D activities and helped them by providing the necessary infrastructure/intellectual inputs. DSIR aims to expand the network of CRTDHs across the country to make India a global Industrial and innovation hub.</p>
         <Footer1/>
         <Footer/>
    </section>
  )
}

export default Research
