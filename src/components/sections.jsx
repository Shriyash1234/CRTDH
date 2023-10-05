import React, { useState } from 'react';
import './CSS/section.css';
import { Link } from 'react-router-dom';

const Sections = () => {
    // Define state to keep track of which circle is clicked
    const [selectedCircle, setSelectedCircle] = useState(null);

    // Define an object that maps circles to their corresponding lists
    const circleToListMap = {
        'Electronics & Renewable Energy': [
            {
                InstituteName: 'CSIR- Central Electronics Engineering Research Institute (CEERI), Pilani',
            },
            {
                InstituteName: 'CSIR - Central Scientific Instruments Organization (CSIO) (Madras Complex), Chennai',
            },
            {
                InstituteName: 'National Institute of Technology-Andhra Pradesh, Tadepalligudem',
            },
        ],
        'Affordable Health': [
            {
                InstituteName: 'CSIR- Centre for Cellular and Molecular Biology (CCMB), Hyderabad',
            },
            {
                InstituteName: 'CSIR- Institute of Himalayan Bioresource Technology (IHBT), Palampur',
            },
            {
                InstituteName: 'Indian Institute of Technology Kharagpur, Kharagpur',
                Link:"/IITKGP"
            },
            {
                InstituteName: 'Delhi Pharmaceutical Sciences and Research University (DPSRU), New Delhi',
            },
        ],
        'Environmental Intervention': [
            {
                InstituteName: 'CSIR-National Institute for Interdisciplinary Science and Technology (NIIST), Thiruvanthapuram',
            },
            {
                InstituteName: 'CSIR - Indian Institute of Toxicology Research (IITR), Lucknow',
            },
        ],
        'Low cost Machining': [
            {
                InstituteName: 'CSIR- Central Mechanical Engineering Research Institute (CMERI), Durgapur',
            },
        ],
        'Chemical Processes & New Materials': [
            {
                InstituteName: 'Indian Institute of Technology Roorkee, Roorkee',
                Link:"/IITR"
            },
            {
                InstituteName: 'Indian Institute of Technology Gandhinagar, Gandhinagar',
                Link:"/IITGN"
            },
            {
                InstituteName: 'CSIR- Central Drug Research Institute (CDRI), Lucknow',
            },
            {
                InstituteName: 'CSIR- Institute of Minerals & Materials Technology (IMMT), Bhubaneswar',
            },
            {
                InstituteName: 'CSIR- National Chemical Laboratory (NCL), Pune',
            },
            {
                InstituteName: 'National Institute of Pharmaceutical Education and Research (NIPER) Mohali, Mohali',
            },
            {
                InstituteName: 'Indian Institute of Technology Bhilai, Bhilai',
            },
            {
                InstituteName: 'Indian Institute of Technology Guwahati, Guwahati',
            },
        ],
    };

    const handleCircleClick = (circleName) => {
        setSelectedCircle(circleName);
    };

    const closePopup = () => {
        setSelectedCircle(null);
    };

    return (
        <section className="Sections">
            {Object.keys(circleToListMap).map((circleName) => (
                <div
                    key={circleName}
                    className={`circle ${selectedCircle === circleName ? 'active' : ''}`}
                    onClick={() => handleCircleClick(circleName)}
                >
                    {circleName}
                </div>
            ))}

            {selectedCircle && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="list-popup">
                        <h2>{selectedCircle}</h2>
                        <ul>
                            {circleToListMap[selectedCircle].map((item, index) => (
                                <li key={index}>
                                   <Link to={item.Link}><strong>Institute Name:</strong> {item.InstituteName}</Link> 
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Sections;
