import React from 'react'
import Header from './header'
import Carousel from './carousel'
import About from './about'
import Footer from './footer'
import './CSS/home.css'
import Footer1 from './footer1'
import Update from './updates'
const Home = () => {
  return (
    <section className='Home'>
      <Header />
      <Carousel />
      <section className='CRTDH-name'>
        <h1 className='CRTDH-main'>CRTDH</h1>
        <p className='CRTDH-full-form'>COMMON RESEARCH <br />& TECHNOLOGY DEVELOPMENT HUB</p>
      </section>
      <Update/>
      <About />
      <Footer1 />
      <Footer />
    </section>
  )
}

export default Home
