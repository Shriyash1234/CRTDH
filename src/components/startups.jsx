import React from 'react'
import StartupsData from './Assests/data/startups.json'
import './CSS/about.css'

const Startups = () => {
    return (
        <section className='about training' style={{ marginTop: '80px' }}>
        <h2 className='about-us'>Success stories with startups in CRTDHs</h2>
        <div className='separator_left'></div>
        <ul >
            {StartupsData.map((startup, index) => (
                <li className='startup-info about-us-text' key={index}>
                <p>
                    <strong>{startup.companyName}</strong> {startup.productOrTechnology} <br />
                </p>
                </li>
            ))}
        </ul>
        </section>
    )
}

export default Startups
