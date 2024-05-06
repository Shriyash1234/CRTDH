import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './CSS/updates.css';
import video from './Assests/Videos/CRTDH-2023.mp4'

const data = [
    { id: 1, img: require('./Assests/Images/inverter.jpg'), info:"Dr. N. Kalaiselvi, the Director General of CSIR-cum-Secretary DSIR, Ministry of Science and Technology, Government of India, visited DSIR funded CRTDH at CSIO Chennai and witness of 30 kVA solar inverter test facility for MSMEs (April 15, 2024)."},
    { id: 2,title:"DSIR-CRTDH Concalve 2023",location:"IIT Gandhinagar", video:"Yes" },
    { id: 3, img: require('./Assests/Images/update2.jpg'),Link:"https://dpsru.edu.in/chintan-shivir/"},
    { id: 4, title: 'New Technology for Industrial Effluent Treatment', location: 'Technology Development by CRTDH-IIT Gandhinagar',ytLink:'yes' },
    { id: 5, title: 'Anaemia Diagnosis At Rs 1: How Does This Paper Strip Test Work? | The Quint', location: 'Technology Development by CRTDH-IIT Kharagpur',ytLink:'yes' },
    { id: 6, img: require('./Assests/Images/update3.jpg')},
    { id: 7, img: require('./Assests/Images/update1.jpg'),Link:"https://crtdh.iitgn.ac.in/conclave2023/" },
];


const Update = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(2);

    const totalCards = data.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const displayedCards = data.slice(startIndex, endIndex);

    const showNextPage = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
    };

    const showPreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 991 && cardsPerPage !== 1) {
                setCardsPerPage(1);
            } else if (window.innerWidth >= 991 && cardsPerPage !== 2) {
                setCardsPerPage(2);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [cardsPerPage]);
    return (
        <div
            style={{
                width: '100vw',
                padding: '30px 5%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h2 className='about-us'>Updates</h2>
            <div className='separator_left'></div>
            <div className="carousel-container">
                <div className="carousel-cards">
                    {displayedCards.map((item) => (
                        <div key={item.id} className="carousel-card">
                            {
                            item.img?
                            <>
                                <img src={item.img} className="update-img" alt="" />
                                {item.info ? <p className='card-info' style={{textAlign:"justify"}}>{item.info}</p> : ""}
                                {
                                    item.Link?<a href={item.Link}>Click Here</a>:""
                                }
                                
                            </>
                            :""
                            }
                            {
                                item.img?"":
                                <>
                                {item.title?<h2 className='card-title'>{item.title}</h2>:""}
                                {item.date?<h2 className='card-content'>{item.date}</h2>:""}
                                {item.location?<h2 className='card-content'>{item.location}</h2>:""}
                                {item.date?<h2 className='card-content'>{item.date}</h2>:""}
                                {item.content?<h2 className='card-content'>{item.content}</h2>:""}
                                {item.info ? <p className='card-info'>{item.info}</p> : ""}
                                {item.video ?<video height="300px" controls><source src={video} type="video/mp4"/></video>:""}
                                {item.id === 5 ? (
                            <iframe
                                width="400"
                                height="300"
                                className="ytVideo"
                                src="https://www.youtube.com/embed/XScoB6KmQiM"
                                title="Anaemia Diagnosis At Rs 1: How Does This Paper Strip Test Work? | The Quint"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            ) : item.id === 4 ? (
                            <iframe
                                width="400"
                                height="300"
                                className="ytVideo"
                                src="https://www.youtube.com/embed/Hkg-NfHc8dE"
                                title="Affordable New Technology for Industrial Effluent Treatment"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            ) : (
                            ""
                            )}

                            </>
                            }
                        </div>
                    ))}
                </div>
                <div className='carousel-buttons'>
                    <button onClick={showPreviousPage} className='previous-carousel-button'><ArrowLeft /></button>
                    <button onClick={showNextPage} className='next-carousel-button'><ArrowRight /></button>
                </div>
            </div>
        </div>
    );
};
export default Update;
