import React from 'react'
import Header from './header'
import Carousel from './carousel'
import Statistics from './statistics'
import About from './about'
import Footer from './footer'
import './CSS/home.css'
import Footer1 from './footer1'
import Update from './updates'
import ChatboxLogo from './Chatbox/chatboxLogo'
import Sections from './sections'

const Home = () => {
  return (
    <section className='Home'>
      <Header color="white" />
      <Carousel />
      <section className='CRTDH-name'>
        <p className='CRTDH-full-form'>Network - </p>
        <h1 className='CRTDH-main'>CRTDH</h1>
        <p className='CRTDH-full-form'>Commonn Rseserach <br />& Technology Developement Hub</p>
        <p className='CRTDH-full-form'>Department of Scientific and Industrial Research</p>
      </section>
      <Statistics />
      <Update />
      <About />
      <Sections />
      <ChatboxLogo />
      <Footer1 />
      <Footer />
    </section>
  )
}

export default Home
