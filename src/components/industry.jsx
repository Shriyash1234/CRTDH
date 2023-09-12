import React from 'react'
import Header from './header'
import Carousel1 from './carousel1'
import Footer from './footer'
import Footer1 from './footer1'
import Recent_Training from './recent_training'
import Training from './training'
import Licensing from './licensing'

const Industry = () => {
  return (
    <section className='Industry'>
      <Header color="black"/>
      {/* <Carousel1 /> */}
      <Training />
      <Recent_Training />
      <Licensing />
      <Footer1 />
      <Footer />
    </section>
  )
}

export default Industry
