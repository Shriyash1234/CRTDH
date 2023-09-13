import React from 'react'
import './CSS/about.css'
const About = () => {
  return (
    <section className='about'>
        <h2 className='about-us'>About us</h2>
        <div className='separator_left'></div>
        <p className='about-us-text'>
        DSIR undertakes programmes to promote R&D by the industries and to support the industrial
        units develop state-of-the-art globally competitive technologies of high commercial value,
        catalyzing faster commercialization of laboratory-scale R&D, augment technology transfer
        capabilities, enhance the share of technology intensive exports in overall exports, strengthen
        industrial consultancy and establish a user-friendly information network to facilitate scientific
        and industrial research in the country.
        <br/>
        <hr/>
        MSMEs in India contribute about 29 per cent to the country's GDP. MSME sector is therefore,
        often referred as the backbone of Indian economy. To remain competitive, MSMEs need to
        adopt new technologies and make efforts to do meaningful Research & Development.
        However, MSMEs often find it difficult to invest in R&D and technology development activities
        due to lack of access to suitable equipment and infrastructure. In view of this requirement of
        MSMEs, DSIR has initiated a program aimed at creation of Common Research & Technology
        Development Hubs or CRTDHs, to encourage research and technology development activities
        by MSMEs.
        </p>
        <img src={require('./Assests/Images/CRTDH_labs.JPG')} className='CRTDH-labs-img'></img>
        <img src={require('./Assests/Images/areas.JPG')} className='CRTDH-labs-img'></img>
    </section>
  )
}

export default About
