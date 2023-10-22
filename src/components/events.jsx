import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './CSS/updates.css';

const data = [
    "Chinatan Shivir @DSIR-CRTDH-IITR, Lucknow (August 24, 2023)",
    "Chintan Shivir @CRTDH-IITKGP (27th July 2023)",
    "Industry Connections @ IITGN (February 24, 2023)",
    "DSIR-CRTDH Conclave 2022, CSIR-IITR (November 17-18,2022)",
    "Industry Connections (iConnect 2022) with GCCI, March 03, 2022",
    "Industry interaction with Pharma industries through CII, Gujrat (Nov 30, 2021) ",
    "Industry interaction @ Vapi GIDC (February 29, 2020)",
    "HPTLC for Industrial product analysis (February 19, 2020)",
    "Cluster-wise virtual meet with the members of Salt industry Manufacturing Association (February 05, 2021). The meeting was arranged through CII Gujarat chapter and ISMA.",
    "Cluster-wise meeting (through video conferencing) with textile industry members Surat GIDC (March 11, 2021) arranged through Southern Gujarat Chamber of Commerce & Industry",
    "Industry interaction @ Nandesari GIDC (December 11, 2021)",
    "Process Hazard Analysis for Chemical Industries (PHA), December 29-30, 2021",
    "Industry Interaction @ Bharuch (October 12-13, 2022)",
    "Reducing discharge of hazardous chemicals in dye and textile industries (October 24, 2018)",
    "Use of ICP-MS to determine the toxic heavy metals in industrial effluents (October 31, 2018)",
];
const Links = [
    "https://pib.gov.in/PressReleasePage.aspx?PRID=1952007",
    "https://www.youtube.com/watch?v=PumM2298Zaw&ab_channel=IITKharagpurOfficial",
    "Blank",
    "https://www.youtube.com/watch?v=hQtZtLzIt3E&ab_channel=CSIRIITR",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
    "Blank",
]
// Convert the date strings to Date objects and sort them in reverse order
// const sortedData = data
//     .map((item) => {
//         // Extract the date part from the string and convert it to a Date object
//         const dateString = item.match(/\(.*\)/)[0].replace(/[()]/g, ''); // Extract date within parentheses
//         const date = new Date(dateString);
//         return { item, date };
//     })
//     .sort((a, b) => b.date - a.date) // Sort in reverse order by date
//     .map((item) => item.item); // Map back to the original format

const Recent_Training = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? data : data.slice(0, 9);
    const toggleShowAll = () => {
        setShowAll(!showAll);
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
            <h2 className='about-us'>Events at CRTDHs</h2>
            <div className='separator_left'></div>
            <div className="list-container events-container">
            <ul className="list">
                {visibleItems.map((item, index) => (
                <li key={index} className="list-item about-us-text">
                    {Links[index] !== "Blank" ? (
                    <Link to={Links[index]}>{item}</Link>
                    ) : (
                    <p>{item}</p>
                    )}
                </li>
                ))}
                {data.length > 9 && (
                <p className='read-more-link' style={{fontSize:"2rem"}} onClick={toggleShowAll}>
                {showAll ? 'Show Less' : 'Read More'}
                </p>
               )}
            </ul>
            
            <div className='event-img-div'>
                <img src={require('./Assests/Images/conclave2022.JPG')} className='event-img'></img>
                <p style={{fontSize:"1.8rem"}}> DSIR - CRTDH at CSIR - IITR, Lucknow (Nov 17- 18, 2022) </p>
                <Link to="https://youtu.be/1O16uYggvKg" style={{fontSize:"1.8rem"}}>Conclave News</Link>
            </div>
            </div>
        </div>
    );
};

export default Recent_Training;
