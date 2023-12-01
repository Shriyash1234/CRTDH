import React,{useEffect} from 'react'
import Header from './header'
import './CSS/news.css'
import { Link } from 'react-router-dom'
import NewsData from './Assests/data/news.json'
import Footer1 from './footer1'
import Footer from './footer'
const News = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <section className='News-page'>
       <Header/>
       <div className='News-section'>
       {
        NewsData.map((news)=>(
            <a href={news.newsLink} target="_blank" className='newsLink'>
                <div className='news'>
                    <img className='news-img' src={require('./Assests/Images/news/'+news.newsImg)}/>
                    <div className='news-info'>
                        <p className='media'>{news.media}</p>
                        <p className='news-info-text'>{news.newsInfo}</p>
                    </div>
                </div>
            </a>
        ))
       } 
       </div>
       <Footer1/>
       <Footer/>
    </section>
  )
}

export default News
