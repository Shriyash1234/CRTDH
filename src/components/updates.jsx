import React, { useState } from 'react';
import './CSS/updates.css';

const data = [
    { id: 1, title: 'Card 1', content: 'Content 1' },
    { id: 2, title: 'Card 2', content: 'Content 2' },
    { id: 3, title: 'Card 3', content: 'Content 3' },
    { id: 4, title: 'Card 4', content: 'Content 3' },
    { id: 5, title: 'Card 5', content: 'Content 3' },
    // Add more data as needed
];

const Update = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 3;
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
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className="carousel-buttons">
                    <button onClick={showPreviousPage}>Previous</button>
                    <span className="page-indicator">{`Page ${currentPage}/${totalPages}`}</span>
                    <button onClick={showNextPage}>Next</button>
                </div>
            </div>
        </div>
    );
};
export default Update;
