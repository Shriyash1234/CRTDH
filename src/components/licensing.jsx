import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/updates.css';

const data = [
    { id: 1, title: 'License 1', link: '' },
    { id: 2, title: 'License 2', link: '' },
    { id: 3, title: 'License 3', link: '' },
    { id: 4, title: 'License 4', link: '' },
    { id: 5, title: 'License 5', link: '' },
    { id: 6, title: 'License 6', link: '' },
    { id: 7, title: 'License 7', link: '' },
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
            <h2 className='about-us'>Licences</h2>
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
