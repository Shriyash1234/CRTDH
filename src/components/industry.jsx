import React from 'react'
import Header from './header'
import Carousel from './carousel'
import Footer from './footer'
import Footer1 from './footer1'
import Recent_Training from './recent_training'
import Training from './training'
import Licensing from './licensing'

const Industry = () => {
  return (
    <section className='Industry'>
      <Header />
      <Carousel/>
      <Training/>
      <Recent_Training/>
      <Licensing/>
      <Footer1 />
      <Footer />
    </section>
  )
}

export default Industry
