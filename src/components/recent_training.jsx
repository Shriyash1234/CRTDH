import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './CSS/updates.css';

const data = [
    { id: 1, title: "Lorem ipsum dolor sit amet consectetur adipisicing", content: 'Venue: IIT Gandhinagar', info: "Date: 19 - 22 Nov 2023", link: "" },
    { id: 2, title: "Lorem ipsum dolor sit amet consectetur adipisicing", content: 'Venue: IIT Gandhinagar', info: "Date: 19 - 22 Nov 2023", link: "" },
    { id: 3, title: 'Card 3', content: 'Content 3' },
    { id: 4, title: 'Card 4', content: 'Content 3' },
    { id: 5, title: 'Card 5', content: 'Content 3' },
    // Add more data as needed
];

const Recent_Training = () => {
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
            <h2 className='about-us'>Recent Trainings</h2>
            <div className='separator_left'></div>
            <div className="carousel-container">
                <div className="carousel-cards">
                    {displayedCards.map((item) => (
                        <div key={item.id} className="carousel-card">
                            <h2 className='card-title'>{item.title}</h2>
                            <p className='card-content'>{item.content}</p>
                            {item.info ? <p className='card-info'>{item.info}</p> : ""}
                            <Link to='' className='know-more'>Know more</Link>
                        </div>
                    ))}
                </div>
                {/* <div className="carousel-buttons">
                    <button onClick={showPreviousPage}>Previous</button>
                    <span className="page-indicator">{`Page ${currentPage}/${totalPages}`}</span>
                    <button onClick={showNextPage}>Next</button>
                </div> */}
                <div className='buttons-carousel'>
                    <button onClick={showPreviousPage} className='previous-carousel-button'><ArrowLeft /></button>
                    <button onClick={showNextPage} className='next-carousel-button'><ArrowRight /></button>
                </div>
            </div>
        </div>
    );
};
export default Recent_Training;
