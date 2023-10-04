import React,{useEffect} from 'react';
import Header from './header';
import workshopData from './Assests/data/workshopsIITGN.json';
import './CSS/workshopPost.css';

const WorkshopPost = () => {
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      const evenDivs = document.getElementsByClassName('even');
      const oddDivs = document.getElementsByClassName('odd');

      if (window.innerWidth < 991) {
        for (let i = 0; i < evenDivs.length; i++) {
          evenDivs[i].style.flexDirection = 'column-reverse';
        }
        for (let i = 0; i < oddDivs.length; i++) {
          oddDivs[i].style.flexDirection = 'column';
        }
      } else {
        for (let i = 0; i < evenDivs.length; i++) {
          evenDivs[i].style.flexDirection = 'row';
        }
        for (let i = 0; i < oddDivs.length; i++) {
          oddDivs[i].style.flexDirection = 'row';
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className='workshopPost-page'>
      <Header color="black"/>
      {/* Render the workshops */}
      {workshopData.map((workshop, index) => (
        <div className={`workshop ${index % 2 === 0 ? 'even' : 'odd'}`} key={index} id={index}>
          {index % 2 === 0 ? (
            <>
              <div className='workshopPost-left'>
                <div className='workshopPost-heading'>
                  <p>{workshop.title}</p>
                </div>
                <div className='workshopPost-date-place'>
                  <p>{workshop.datePlace}</p>
                </div>
                <div className='workshopPost-info'>
                  <p>{workshop.description}</p>
                </div>
                <a href={workshop.link} className='workshopPost-link'>
                  Click for more information
                </a>
              </div>
              <div className='workshopPost-right'>
                <img
                  className='workshoPost-img'
                  src={require(`${workshop.ImageLink}`)}
                  alt='Workshop'
                />
              </div>
            </>
          ) : (
            <>
              <div className='workshopPost-left'>
                <img
                  className='workshoPost-img'
                  src={require(`${workshop.ImageLink}`)}
                  alt='Workshop'
                />
              </div>
              <div className='workshopPost-right'>
                <div className='workshopPost-heading'>
                  <p>{workshop.title}</p>
                </div>
                <div className='workshopPost-date-place'>
                  <p>{workshop.datePlace}</p>
                </div>
                <div className='workshopPost-info'>
                  <p>{workshop.description}</p>
                </div>
                <a href={workshop.link} className='workshopPost-link'>
                  Click for more information
                </a>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default WorkshopPost;
