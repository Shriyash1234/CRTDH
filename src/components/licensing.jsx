import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './CSS/updates.css';

const data = [
    {
        id: 1,
        title: 'New Technology for Industrial Effluent Treatment',
        CRTDH: 'CRTDH, IIT Gandhinagar',
        content: 'The newly developed metal complex works under a wide range of pH; for industrial textile effluent, the COD reduction is > 90%.',
        img: require('./Assests/Images/technologies/1.png'),
        link: 'https://www.youtube.com/watch?v=Hkg-NfHc8dE&ab_channel=IITGandhinagar'
    }
];

const Licensing = () => {
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
            } else if (window.innerWidth >= 991 && cardsPerPage !== 1) {
                setCardsPerPage(1);
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
            <h2 className='about-us licensing'>Licenses/Technologies available with CRTDHs</h2>
            <div className='separator_left'></div>
            <div className="carousel-container">
                <div className="carousel-cards">
                    {displayedCards.map((item) => (
                        <div
                            key={item.id}
                            className="carousel-card1"
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                margin: '2px',
                            }}
                        >
                            <h2 className='card-title'>{item.title} at {item.CRTDH} </h2>
                            <p className='card-content1 about-us-text' >{item.content}</p>
                            {
                                item.link?<a target="_blank" href={item.link} className='about-us-text'>Youtube link</a>:""
                            }
                            <img src={item.img} alt={item.title} className='update-img1' />
                        </div>
                    ))}
                </div>
                <div className='buttons-carousel'>
                    <button onClick={showPreviousPage} className='previous-carousel-button'><ArrowLeft /></button>
                    <button onClick={showNextPage} className='next-carousel-button'><ArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Licensing;
