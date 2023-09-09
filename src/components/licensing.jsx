import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/updates.css';

const data = [
    { id: 1, title: 'Card 1', content: 'Content 3' },
    { id: 2, title: 'Card 2', content: 'Content 3' },
    { id: 3, title: 'Card 3', content: 'Content 3' },
    { id: 4, title: 'Card 4', content: 'Content 3' },
    { id: 5, title: 'Card 5', content: 'Content 3' },
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
                                marginBottom: '10px',
                            }}
                        >
                            <h2 className='card-title' style={{ margin: 'auto 0' }}>{item.title}</h2>
                            <p className='card-content' style={{ margin: 'auto 0' }}>{item.content}</p>
                            {item.info ? <p className='card-info' style={{ margin: 'auto 0' }}>{item.info}</p> : ""}
                            <Link to='' className='know-more'>Know more</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Licensing;
