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
                <h3>{startup.title}</h3>
                <p>
                    <strong>Company Name:</strong> {startup.companyName} <br />
                    <strong>CRTDH with which the Company associated:</strong> {startup.associatedCRTDH} <br />
                    <strong>Product or technology developed at/with the CRTDH:</strong> {startup.productOrTechnology} <br />
                </p>
                </li>
            ))}
        </ul>
        </section>
    )
}

export default Startups
