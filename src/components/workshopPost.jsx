import React from 'react'
import Header from './header'

import './CSS/workshopPost.css'
const WorkshopPost = () => {
  return (
    <section className='workshopPost-page'>
      <Header color="black"/>
      <div className='workshop'>
        <div className='workshopPost-left'>
          <div className='workshopPost-heading'>
            <p>Exhibition in Green & Sustainable Chemistry Conference</p>
          </div>
          <div className='workshopPost-date-place'>
            <p>12th & 13th October 2022 at Bharuch</p>
          </div>
          <div className='workshopPost-info'>
            <p>Department of Scientific & Industrial Research (DSIR) and IIT Gandhinagar (IITGN) together established a Common Research & Technology Development Hub (DSIR-IITGN-CRTDH) on Chemical Processes at IIT Gandhinagar (IITGN), Palaj, Gandhinagar. The initiative aims to engage MSMEs and other chemical industries to enhance their capabilities in technology know-how on effluent treatment, waste reduction, process improvement, research on new products and testing products/raw materials/effluents etc. Industry partners can be benefited from the state-of-the-art laboratory facilities as well as the interdisciplinary knowledge base at IIT Gandhinagar. The CRTDH at Bharuch is exhibited at the “Two days Exhibition in Green & Sustainable Chemistry Conference” for industry partners.</p>
          </div>
          <a href="/#" className='workshopPost-link'>Click for more information</a>
        </div>
        <div className='workshopPost-right'>
          <img className='workshoPost-img' src={require('./Assests/Images/workshop-post.jpg')}></img>
        </div>
      </div>
      
    </section>
  )
}

export default WorkshopPost
