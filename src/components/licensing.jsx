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
        content: 'CRTDH, IIT Gandhinagar developed a two-step method for wastewater treatment. The first step deploys conventional coagulation and flocculation, followed by chemical oxidation using a combination of a bio-inspired molecular metal complex and H2O2 in the second step. The catalytic unit efficiently degrades a versatile array of toxic industrial dyes with varying molecular templates in the aqueous solution at room temperature. Unlike the traditional radical-based Fenton chemistry, the newly developed metal complex forms a metal hydroxo intermediate, which actively destroys the aromatic backbone and decolorizes the effluent. The two-step process is active over a broad pH range (pH 3–11). It exhibits excellent efficiency for textile effluents. The capability of the technology is successfully demonstrated at a 1000-liter scale at the Industry site, showcasing the high technology readiness level (TRL 6) of the process.',
        img: require('./Assests/Images/technologies/1.png'),
        linkText:"Demonstration video in 100 L scale",
        link: 'https://www.youtube.com/watch?v=Hkg-NfHc8dE&ab_channel=IITGandhinagar'
    },
    {
        id: 2,
        title: 'One step dry synthesis of nano-biocomposite for controlled drug release',
        CRTDH: 'CRTDH, IIT Gandhinagar',
        content: 'CRTDH, IIT Gandhinagar developed a new iron-based magnetic nano bio-composite (nano-Fe-CNB) using a one-step solventless dry process using a seaweed-based biopolymer. The detailed analysis of the developed nano Fe-CNB shows that nano-Fe-CNB consists of nanoparticles of 5–10 nm decorated on 7–8 nm thick 2-D graphitic carbon material. The impregnation of nano-Fe-CNB into the calcium alginate (CA) hydrogel beads is found to have good drug loading capacity as well as pH-responsive control release behavior, which is demonstrated using doxorubicin (DOX) as a model cancer drug. The drug loading experiments exhibit ∼94% loading of DOX, and release shows ∼38% and ∼8% release of DOX at pH 5.4 and 7.4, respectively. The developed nano Fe-CNB facilitates strong electrostatic interactions with cationic DOX molecules at pH 7.4 and thereby restricts the release of the drug at physiological pH. However, at cancer cell pH (5.4), the interaction between the drug and nano-Fe-CNB reduces, which facilitates more drug release at pH 5.4 (cancer cell). Thus, the developed nano-biocomposite has the potential to reduce the undesired side effects associated with faster release of drugs.',
        img: require('./Assests/Images/technologies/13.png'),
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
                            <h2 className='card-content1 card-title'>{item.title} at {item.CRTDH} </h2>
                            <p className='card-content1 about-us-text' >{item.content}</p>
                            {
                                item.link?<a target="_blank" href={item.link} className='about-us-text'>{item.linkText}</a>:""
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
