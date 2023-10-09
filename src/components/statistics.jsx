import React from 'react'
import './CSS/statistics.css'
const Statistics = () => {
  return (
    <section className='statistics-page'>
      <p className='statistics-head'>CRTDH Statistics (OCT 2023)</p>
      <div className='statistics'>
        <div className='statistics-div stat-1'>
          <img src={require('./Assests/Images/icons/place.png')} className='stat-img'></img>
          <p className='stat-text'>Total CRTDHs & Area<br/> 18 & 208384 Sqft</p> 
        </div>
        <div className='statistics-div stat-3'>
          <img src={require('./Assests/Images/icons/patent.png')} className='stat-img'></img>
          <p className='stat-text'>Patents filed<br/> 73</p>
        </div>
        <div className='statistics-div stat-4'>
          <img src={require('./Assests/Images/icons/projects.png')} className='stat-img'></img>
          <p className='stat-text'>MSME Engaged & Startups<br/> 1209 & 63</p>
        </div>
        <div className='statistics-div stat-6'>
          <img src={require('./Assests/Images/icons/employement1.png')} className='stat-img'></img>
          <p className='stat-text'>MESME Sensitized<br/> 1976</p>
        </div>
        <div className='statistics-div stat-5'>
          <img src={require('./Assests/Images/icons/technology.png')} className='stat-img'></img>
          <p className='stat-text'>Technologies Created<br/> 102</p>
        </div>
         <div className='statistics-div stat-2'>
          <img src={require('./Assests/Images/icons/employement1.png')} className='stat-img'></img>
          <p className='stat-text'>Trained Manpower<br/> 2518</p>
        </div>
        
      </div>
    </section>
  )
}

export default Statistics
