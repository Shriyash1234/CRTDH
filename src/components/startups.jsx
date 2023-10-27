import React from 'react'
import StartupsData from './Assests/data/startups.json'
import './CSS/about.css'

const Startups = () => {
    return (
        <section className='about training'>
        <h2 className='about-us'>Success stories with startups in CRTDHs</h2>
        <div className='separator_left'></div>
        <ul >
            {StartupsData.map((startup, index) => (
                <li className='startup-info about-us-text' key={index}>
                <p>
                    <strong>{startup.companyName}</strong> {startup.productOrTechnology} <br />
                    {
                        startup.id==="CannedFood"?
                        <div className='yt-video-industry-div'>
                            <iframe width="868" height="488" className="yt-video-industry" src="https://www.youtube.com/embed/SayXSVoI6xI" title="Ready to Eat traditional canned food without chemical preservatives | Kangri Dham | CSIR IHBT (GOI)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                            </iframe>
                        </div>
                        :""
                    }
                </p>
                </li>
            ))}
        </ul>
        </section>
    )
}

export default Startups
