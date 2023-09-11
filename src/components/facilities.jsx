import React from 'react'
import Header from './header'
import Carousel1 from './carousel1'
import Footer from './footer'
import Footer1 from './footer1'
import Service_Charges from './service_charges'
import Instruments from './instruments'


const Facilities = () => {
  return (
    <section className='Facilities'>
      <Header />
      <Carousel1 />
      <Instruments/>
      <Service_Charges/>
      <Footer1 />
      <Footer />
    </section>
  )
}

export default Facilities
