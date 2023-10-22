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

// Convert the date strings to Date objects and sort them in reverse order
const sortedData = data
    .map((item) => {
        // Extract the date part from the string and convert it to a Date object
        const dateString = item.match(/\(.*\)/)[0].replace(/[()]/g, ''); // Extract date within parentheses
        const date = new Date(dateString);
        return { item, date };
    })
    .sort((a, b) => b.date - a.date) // Sort in reverse order by date
    .map((item) => item.item); // Map back to the original format

const Recent_Training = () => {
    return (
        <div
            style={{
                width: '100vw',
                padding: '30px 5%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h2 className='about-us'>Events at CRTDHs</h2>
            <div className='separator_left'></div>
            <div className="list-container events-container">
                <ul className="list">
                    {sortedData.map((item, index) => (
                        <li key={index} className="list-item about-us-text">
                            {item}
                        </li>
                    ))}
                </ul>
                <img src={require('./Assests/Images/conclave2022.JPG')} className='event-img'></img>
            </div>
            <p style={{fontSize:"3rem",color:"red"}}>Plese Provide the list of events</p>
        </div>
    );
};

export default Recent_Training;
