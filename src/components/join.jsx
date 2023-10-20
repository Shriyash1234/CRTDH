import React from 'react'
import Header from './header'
import Footer1 from './footer1'
import Footer from './footer'
const Join = () => {
  return (
    // stylesheet at Home.css
    <section className='JoinUs-page'>
        <Header/>
        <div className='JoinUs'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSejsU87yKbCJ-1L9yDE9RisdIz3BsObJXeL-u-NwEC9_2HXAg/viewform?embedded=true" width="640" height="820" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        <Footer1/>
        <Footer/>
    </section>
  )
}

export default Join
