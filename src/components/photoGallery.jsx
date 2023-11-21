import React from 'react'
import Header from './header';
import Footer from './footer'
import Footer1 from './footer1'
import PhotoAlbum from "react-photo-album";

const PhotoGallery = () => {
const photos = [];
  for(let i =1;i<33;i++){
    if(i%2 ==0){
        photos.push(
            {src: require(`./Assests/Images/Gallery/${String(i)}.JPG`), width: 800, height: 600}
        )
    }
    else
    {
        photos.push(
            {src: require(`./Assests/Images/Gallery/${String(i)}.JPG`), width: 1600, height: 900}
        )
    }
  }
  return (
    <section className='photoGallery'>
      <Header/>
      <div className='photos' style={{margin:"80px 20px"}}>
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
      <Footer1/>
      <Footer/>
    </section>
  )
}

export default PhotoGallery
