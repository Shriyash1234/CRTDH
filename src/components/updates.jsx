import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './CSS/updates.css';

const data = [
    { id: 1, img: require('./Assests/Images/update1.jpg'),Link:"http://tiny.cc/DSIR-CRTDH" },
    { id: 2, img: require('./Assests/Images/update2.jpg'),Link:"https://dpsru.edu.in/chintan-shivir/"},
    { id: 3, title: 'New Technology for Industrial Effluent Treatment', location: 'Technology Development by CRTDH-IIT Gandhinagar',ytLink:'yes' },
    { id: 4, title: 'Anaemia Diagnosis At Rs 1: How Does This Paper Strip Test Work? | The Quint', location: 'Technology Development by CRTDH-IIT Kharagpur',ytLink:'yes' },
    { id: 5, img: require('./Assests/Images/update3.jpg')},
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
                                {
                                    item.Link?<a href={item.Link}>Click Here</a>:""
                                }
                                
                            </>
                            :""
                            }
                            {
                                item.img?"":
                                <>
                                <h2 className='card-title'>{item.title}</h2>
                                <p className='card-content'>{item.date}</p>
                                <p className='card-content'>{item.location}</p>
                                <p className='card-content'>{item.content}</p>
                                {item.info ? <p className='card-info'>{item.info}</p> : ""}
                                {item.id === 4 ? (
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
                            ) : item.id === 3 ? (
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
