import React from 'react'
import './CSS/statistics.css'
const Statistics = () => {
  return (
    <section className='statistics-page'>
      <p className='statistics-head'>CRTDH Statistics</p>
      <div className='statistics'>
        <div className='statistics-div stat-1'>
          <img src={require('./Assests/Images/icons/place.png')} className='stat-img'></img>
          <p className='stat-text'>Total centers<br/> 18</p> 
        </div>
        <div className='statistics-div stat-2'>
          <img src={require('./Assests/Images/icons/employement1.png')} className='stat-img'></img>
          <p className='stat-text'>Employed people<br/> 150</p>
        </div>
        <div className='statistics-div stat-3'>
          <img src={require('./Assests/Images/icons/patent.png')} className='stat-img'></img>
          <p className='stat-text'>Patents filed<br/> 70</p>
        </div>
        <div className='statistics-div stat-4'>
          <img src={require('./Assests/Images/icons/projects.png')} className='stat-img'></img>
          <p className='stat-text'>Developed projects<br/> 200</p>
        </div>
        <div className='statistics-div stat-5'>
          <img src={require('./Assests/Images/icons/technology.png')} className='stat-img'></img>
          <p className='stat-text'>Technologies developed<br/> 280</p>
        </div>
      </div>
    </section>
  )
}

export default Statistics