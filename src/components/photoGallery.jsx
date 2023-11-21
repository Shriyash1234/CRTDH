import React from 'react'
import Header from './header';
import Footer from './footer'
import Footer1 from './footer1'
import PhotoAlbum from "react-photo-album";

const PhotoGallery = () => {
const photos = [];
for (let i = 1; i < 33; i++) {
    const image = require(`./Assests/Images/Gallery/${String(i)}.JPG`);
    photos.push({
        src: image,
        width: i % 2 === 0 ? 800 : 1600,
        height: i % 2 === 0 ? 600 : 900,
    });
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
