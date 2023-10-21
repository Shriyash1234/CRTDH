import React,{useEffect} from 'react'
import Header from './header'
import Footer from './footer'
import Footer1 from './footer1'
import Recent_Training from './recent_training'
import Training from './training'
import Licensing from './licensing'
import Testing from './testing'
import Projects from './projects'
import UpcomingEvents from './upcomingEvents'
import Startups from './startups'

const Industry = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
},[])
  return (
    <section className='Industry'>
      <Header color="black"/>
      {/* <Carousel1 /> */}
      <Projects/>
      <Licensing />
      <Startups/>
      <Training />
      <Recent_Training />
      <UpcomingEvents/>
      <Testing/>
      <Footer1 />
      <Footer />
    </section>
  )
}

export default Industry
