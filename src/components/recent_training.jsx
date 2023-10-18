import React from 'react';
import './CSS/updates.css';

const data = [
    "Reducing discharge of hazardous chemicals in dye and textile industries (October 24, 2018)",
    "Use of ICP-MS to determine the toxic heavy metals in industrial effluents (October 31, 2018)",
    "HPTLC for Industrial product analysis (February 19, 2020)",
    "Industry interaction @ Vapi GIDC (February 29, 2020)",
    "Cluster-wise virtual meet with the members of Salt industry Manufacturing Association (February 05, 2021). The meeting was arranged through CII Gujarat chapter and ISMA.",
    "Cluster-wise meeting (through video conferencing) with textile industry members Surat GIDC (March 11, 2021) arranged through Southern Gujarat Chamber of Commerce & Industry",
    "Industry interaction with Pharma industries (Nov 30, 2021) through CII",
    "Industry interaction @ Nandesari GIDC (December 11, 2021)",
    "Process Hazard Analysis for Chemical Industries (PHA), December 29-30, 2021",
    "Industry Connections (iConnect2022) with GCCI, March 03, 2022",
    "Industry Interaction @ Bharuch (October 12-13, 2022)",
    "Industry Connections @ IITGN (FEBRUARY 24, 2023)"
];

const Recent_Training = () => {
    return (
        <div
            style={{
                width: '100vw',
                padding: '30px 5%',
                display: 'flex',
                flexDirection: 'column',
            }}
        ><h2 className='about-us'>Upcoming Training/Industry Meet</h2>
            <div className='separator_left'></div>
            <div className="list-container">
                <ul className="list">
                    {data.map((item, index) => (
                        <li key={index} className="list-item" style={{ fontSize: '1.8rem' }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Recent_Training;
