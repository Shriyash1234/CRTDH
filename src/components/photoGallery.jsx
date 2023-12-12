import React ,{useEffect} from 'react'
import Header from './header';
import Footer from './footer'
import Footer1 from './footer1'
import PhotoAlbum from "react-photo-album";

const PhotoGallery = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
const photos = [];
const videoUrls = [
  "https://www.youtube.com/embed/cDO4mhMr56s",
  "https://www.youtube.com/embed/jhbE24vq4V4",
  "https://www.youtube.com/embed/jGObYRq1BWg",
  "https://www.youtube.com/embed/Qk9-xpwCFqU",
  "https://www.youtube.com/embed/292R1onJ3aI",
  "https://www.youtube.com/embed/NIfZSLuApjU",
  "https://www.youtube.com/embed/6wbJnCRoPwg",
  "https://www.youtube.com/embed/62PfmqDvzG4",
  "https://www.youtube.com/embed/0S-3hpzzm0I",
  "https://www.youtube.com/embed/QvDfuGPmacg",
  "https://www.youtube.com/embed/Ksb9LP2FyZ4",
  "https://www.youtube.com/embed/FFQYIyRBQ3A",
  "https://www.youtube.com/embed/znlm7RjOFP0",
  "https://www.youtube.com/embed/20hbi3IbFCM"
];
const industryImpactUrls= [
  "https://www.youtube.com/embed/K-us-rH5WJM",
  "https://www.youtube.com/embed/a6KNz5zHyU0",
  "https://www.youtube.com/embed/kOzQ7Kav65Y"
]
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
      <h2 style={{margin:"80px 0px 0px 20px"}}>CRTDH Concalve 2023</h2>
      <div className='gallery-videos' id="style-1">
        {videoUrls.map((url, index) => (
          <div className='yt-video' key={index}>
            <iframe
              className="gallery-video"
              src={url}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <h2 style={{marginLeft:"20px"}}>Impact of CRTDHs on Industries</h2>
      <div className='gallery-videos' id="style-1" >
        {industryImpactUrls.map((url, index) => (
          <div className='yt-video' key={index}>
            <iframe
              className="gallery-video"
              src={url}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className='photos' style={{margin:"20px 20px"}} >
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
      <Footer1/>
      <Footer/>
    </section>
  )
}

export default PhotoGallery
