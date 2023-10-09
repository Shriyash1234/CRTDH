import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import './CSS/updates.css';

const data = [
    { id: 1, img: require('./Assests/Images/update1.jpg') },
    { id: 2, img: require('./Assests/Images/update2.jpg')},
    { id: 3, title: 'One-day training workshop on HPTLC for Industrial Product Analysis', date: '20th July, 2022', location: '', content: 'Department of Scientific & Industrial Research (DSIR) and IIT Gandhinagar (IITGN) together established a Common Research & Technology Development Hub (DSIR-IITGN-CRTDH) on Chemical Processes at IIT Gandhinaagr (IITGN), Palaj, Gandhinagar. The initiative aims to engage MSMEs and other chemical industries to enhance their capabilities in technology know-how on effluent treatment, waste reduction, process improvement, research on new products and testing products/raw materials/effluents etc. Industry partners can be benefited from the state-of-the-art laboratory facilities as well as the interdisciplinary knowledge base at IIT Gandhinagar. The CRTDH at IITGN is arranging a one-day training workshop on “One-day training workshop on HPTLC for Industrial Product Analysis” for industry partners.' },
    { id: 4, title: 'Process Hazard Analysis for Chemical Industries', date: '29-30 December, 2021', location: '', content: 'Common Research & Technology Development Hub (CRTDH) in association with Centre for Safety Engineering at IIT Gandhinagar announces a two-day workshop on the “Process Hazard Analysis for Chemical Industries (PHA)” for plant practitioners, engineers, regulators and policymakers of Chemical industries. As part of this workshop, PHA tools such as HAZOP and Risk Analysis etc. would be discussed with practical case studies and group exercises etc. This workshop aims to train the participants on various risk reduction strategies to enhance process safety in chemical process industries. It will help professionals understand the challenges and best methods for a safer and healthy workplace by addressing the process hazard analysis.' },
    { id: 5, title: 'One-day training workshop on HPTLC for Industrial Product Analysis', date: '20th July, 2022', location: '', content: 'Department of Scientific & Industrial Research (DSIR) and IIT Gandhinagar (IITGN) together established a Common Research & Technology Development Hub (DSIR-IITGN-CRTDH) on Chemical Processes at IIT Gandhinaagr (IITGN), Palaj, Gandhinagar. The initiative aims to engage MSMEs and other chemical industries to enhance their capabilities in technology know-how on effluent treatment, waste reduction, process improvement, research on new products and testing products/raw materials/effluents etc. Industry partners can be benefited from the state-of-the-art laboratory facilities as well as the interdisciplinary knowledge base at IIT Gandhinagar. The CRTDH at IITGN is arranging a one-day training workshop on “One-day training workshop on HPTLC for Industrial Product Analysis” for industry partners.' },
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
                            <img src={item.img} alt="" />
                            {
                                item.img?"":
                                <>
                                <h2 className='card-title'>{item.title}</h2>
                                <p className='card-content'>{item.date}</p>
                                <p className='card-content'>{item.location}</p>
                                <p className='card-content'>{item.content}</p>
                                {item.info ? <p className='card-info'>{item.info}</p> : ""}
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
