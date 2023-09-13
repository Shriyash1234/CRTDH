import React from 'react'
import Header from './header'
import Footer1 from './footer1'
import Footer from './footer'
import './CSS/research.css'
const Research = () => {
  return (
    <section className='reserach-page'>
        <Header color={'black'}/>
         <div className='research'>
            <div className='research-div research-div-1'>
                <div class="overlay">
                    <p className='reserach-area-name'>Affordable Healthcare</p>
                    <p className='reserach-subarea-name'>Healthcare Delivery Models</p>
                    <p className='reserach-subarea-name'>Healthcare Innovation</p>
                    <p className='reserach-subarea-name'>Comparative Effectiveness Research</p>
                    <p className='reserach-subarea-name'>Chronic Disease Management</p>
                </div> 
            </div>
            <div className='research-div research-div-2'>
                <div class="overlay">
                    <p className='reserach-area-name'>Electronics / Renewable Energy</p>
                    <p className='reserach-subarea-name'>Wind Energy</p>
                    <p className='reserach-subarea-name'>Biomass and Bioenergy</p>
                    <p className='reserach-subarea-name'>Geothermal Energy</p>
                    <p className='reserach-subarea-name'>Grid Integration</p>
                    <p className='reserach-subarea-name'>Hydrogen and Fuel Cells</p>
                    <p className='reserach-subarea-name'>Tidal and Wave Energy</p>
                </div>
            </div>
            <div className='research-div research-div-3'>
                <div class="overlay">
                    <p className='reserach-area-name'>New Materials / Chemical Processes</p>
                    <p className='reserach-subarea-name'>Nanomaterials</p>
                    <p className='reserach-subarea-name'>Advanced Polymers</p>
                    <p className='reserach-subarea-name'>Materials for Energy Storage</p>
                    <p className='reserach-subarea-name'>Sustainable Chemistry</p>
                    <p className='reserach-subarea-name'>Additive Manufacturing (3D Printing)</p>
                </div>
            </div>
            <div className='research-div research-div-4'>
                <div class="overlay">
                    <p className='reserach-area-name'>Environmental Interventions</p>
                    <p className='reserach-subarea-name'>Climate Change Mitigation</p>
                    <p className='reserach-subarea-name'>Air Quality Improvement</p>
                    <p className='reserach-subarea-name'>Water Resource Management</p>
                    <p className='reserach-subarea-name'>Biodiversity Conservation</p>
                    <p className='reserach-subarea-name'>Natural Disaster Mitigation</p>
                    <p className='reserach-subarea-name'>Sustainable Transportation</p>
                    <p className='reserach-subarea-name'>Green Building and Architecture</p>
                </div>
            </div>
            <div className='research-div research-div-5'>
                <div class="overlay">
                    <p className='reserach-area-name'>Low-cost Machining</p>
                    <p className='reserach-subarea-name'>Tooling Optimization</p>
                    <p className='reserach-subarea-name'>Sustainable Machining</p>
                    <p className='reserach-subarea-name'>Automation and Robotics</p>
                    <p className='reserach-subarea-name'>Advanced Machining Techniques</p>
                    <p className='reserach-subarea-name'>Energy-Efficient Machining</p>
                </div>
            </div>
         </div>
         <p className='about-us-text' style={{width:"80vw",margin:"auto",padding:"30px"}}>The CRTDH program was launched during FY 2014-15. 18 CRTDHs are being established in
            sectors such as Electronics and Renewable Energy, Affordable Health, Environmental
            Interventions, Low Cost Machining and New Materials and Chemical Process. The DSIR-CRTDHs
            have presence in 14 states of the country. These hubs facilitate MSMEs to undertake
            new and improved product and process development and skill enhancement activities.
            The collaborating institutions extend hands-on training, skill development and research
            facilities to the MSMEs. Creation of these CRTDHs will enhance productivity, increase the
            innovative skills of the MSMEs and help them become globally competitive, and also
            generate more employment.
            <br></br>
            <hr></hr>
            During the time of COVID-19 pandemic, our CRTDH's repurposed their activities and
            focused on developing novel technologies for the treatment and diagnosis of COVID-19.
            All our CRTDH's are encouraging MSMEs to engage in R & D activities and helping them by
            providing necessary infrastructure and also intellectual inputs. We aim to expand the
            network of CRTDHs across India to achieve our vision to enable India to emerge as global
            Industrial and innovation hub.</p>
         <Footer1/>
         <Footer/>
    </section>
  )
}

export default Research
