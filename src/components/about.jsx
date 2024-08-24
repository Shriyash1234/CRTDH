import React from 'react'
import './CSS/about.css'
const About = () => {
  return (
    <section className='about'>
      <h2 className='about-us'>About us</h2>
      <div className='separator_left'></div>
      <p className='about-us-text'>
         The innovation capacity of the Indian industry depends not only on large enterprises having access to financial and other resources, but crucially on Micro Small and Medium Enterprises targeting radical innovation and new product development. Micro and Small enterprises (MSEs) particularly, even though steered by talented individuals, often find it difficult to invest in R&D and technology development due to lack of access to suitable equipment, skill-sets, instruments, and other such resources.
        <br />
        <hr />
        keeping this in view, DSIR has initiated a programme aimed at creation of Common Research and Technology Development Hubs (CRTDHs) to encourage research and technology development activities by MSEs. Partial financial support would be provided to eligible institutions as grant-in aid to establish CRTDHs for enabling MSEs conduct industrial R&D and innovation activities. These hubs would facilitate MSEs to undertake new/improved product/process development and skill enhancement activities. The collaborating institutions would extend hands-on training, skill development and research information facilities to the MSEs, apart from research and technology development infrastructure. Creation of these CRTDHs will enhance productivity, increase the innovative skills of the MSEs and help them become globally competitive, and also generate more employment.
      </p>
      <img src={require('./Assests/Images/CRTDH_labs.JPG')} className='CRTDH-labs-img'></img>
    </section>
  )
}

export default About
