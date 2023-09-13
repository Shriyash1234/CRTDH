import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/updates.css';

const data = [
    { id: 1, title: 'Technology 1', link: '' },
    { id: 2, title: 'Technology 2', link: '' },
    { id: 3, title: 'Technology 3', link: '' },
    { id: 4, title: 'Technology 4', link: '' },
    { id: 5, title: 'Technology 5', link: '' },
    { id: 6, title: 'Technology 6', link: '' },
    { id: 7, title: 'Technology 7', link: '' },
    // Add more data as needed
];

const Licensing = () => {
    return (
        <div
            style={{
                width: '100vw',
                padding: '30px 5%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h2 className='about-us licensing'>Licences/Technology avaliable with CRTDHs</h2>
            <div className='separator_left'></div>
            <div className="carousel-container">
                <div className="carousel-cards">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="carousel-card"
                            style={{
                                width: '100vw',
                                height: 'fit-content',
                                display: 'flex',
                                flexDirection: 'row',
                                alignContent: 'center',
                                margin: '2px',
                            }}
                        >
                            <h2 className='card-title' style={{ margin: 'auto 0' }}>{item.title}</h2>
                            <Link to='' className='know-more'>Know more</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Licensing;
