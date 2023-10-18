import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/about.css'
const Testing = () => {
    return (
        <section className='about training'>
            <h2 className='about-us'>Testing at CRTDH Labs</h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
            There are a lot of instrument facilities under the DSIR - CRTDHs. The exhaustive list is provided here. You can check your required instrument from the list by contacting the CRTDH and booking the required tests. 
                <br />
                <hr />
            <Link to="/facilities" className='instruments-btn' style={{top:"0px"}}>DETAILED LIST OF INSTRUMENTS AVAILABLE WITH CRTDHS</Link>

            {/* <input placeholder='Search for intended testing/pilot facility'></input> */}
            </p>
        </section>
    )
}

export default Testing
