import React from 'react'
import Header from './header'
import Carousel from './carousel'
import About from './about'
import Footer from './footer'
import './CSS/home.css'
import Footer1 from './footer1'
import Update from './updates'
import ChatboxLogo from './Chatbox/chatboxLogo'
const Home = () => {
  return (
    <section className='Home'>
      <Header color={'white'}/>
      <Carousel />
      <section className='CRTDH-name'>
        <h1 className='CRTDH-main'>CRTDH</h1>
        <p className='CRTDH-full-form'>COMMON RESEARCH <br />& TECHNOLOGY DEVELOPMENT HUB</p>
      </section>
      <Update/>
      <About />
      <ChatboxLogo/>
      <Footer1 />
      <Footer />
    </section>
  )
}

export default Home
