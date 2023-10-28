import React, { useState } from 'react';
import './CSS/section.css';
import { Link } from 'react-router-dom';
import {X} from 'lucide-react'

const Sections = () => {
    // Define state to keep track of which circle is clicked
    const [selectedCircle, setSelectedCircle] = useState(null);

    // Define an object that maps circles to their corresponding lists
    const circleToListMap = {
        'Electronics & Renewable Energy': [
            {
                InstituteName: 'CSIR- Central Electronics Engineering Research Institute (CEERI), Pilani',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg')
            },
            {
                InstituteName: 'CSIR - Central Scientific Instruments Organization (CSIO) (Madras Complex), Chennai',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg')
            },
            {
                InstituteName: 'National Institute of Technology-Andhra Pradesh, Tadepalligudem',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg'),
                Link:"/CRTDH/NITAP"
            },
        ],
        'Affordable Health': [
            {
                InstituteName: 'CSIR- Centre for Cellular and Molecular Biology (CCMB), Hyderabad',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg'),
                Link:"/CRTDH/CCMB"
            },
            {
                InstituteName: 'CSIR- Institute of Himalayan Bioresource Technology (IHBT), Palampur',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg'),
                Link:"CRTDH/IHBT"
            },
            {
                InstituteName: 'Indian Institute of Technology Kharagpur, Kharagpur',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg'),
                Link:"/CRTDH/IITKGP"
            },
            {
                InstituteName: 'Delhi Pharmaceutical Sciences and Research University (DPSRU), New Delhi',
                Img:require('./Assests/Images/CRTDH-logos/DPSRU.jpg')
            },
        ],
        'Environmental Intervention': [
            {
                InstituteName: 'CSIR-National Institute for Interdisciplinary Science and Technology (NIIST), Thiruvanthapuram',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg')
            },
            {
                InstituteName: 'CSIR - Indian Institute of Toxicology Research (IITR), Lucknow',
                Img:require('./Assests/Images/CRTDH-logos/CSIR-IIT.png')
            },
        ],
        'Low cost Machining': [
            {
                InstituteName: 'CSIR- Central Mechanical Engineering Research Institute (CMERI), Durgapur',
                Img:require('./Assests/Images/CRTDH-logos/CMERI.jpg')
            },
        ],
        'Chemical Processes & New Materials': [
            {
                InstituteName: 'Indian Institute of Technology Roorkee, Roorkee',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg'),
                Link:"/CRTDH/IITR"
            },
            {
                InstituteName: 'Indian Institute of Technology Gandhinagar, Gandhinagar',
                Img:require('./Assests/Images/CRTDH-logos/CRTDH-IITGN.png'),
                Link:"/CRTDH/IITGN"
            },
            {
                InstituteName: 'CSIR- Central Drug Research Institute (CDRI), Lucknow',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg')
            },
            {
                InstituteName: 'CSIR- Institute of Minerals & Materials Technology (IMMT), Bhubaneswar',
                Img:require('./Assests/Images/CRTDH-logos/IMMT.jpg'),
                Link:"/CRTDH/IMMT"
            },
            {
                InstituteName: 'CSIR- National Chemical Laboratory (NCL), Pune',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg')
            },
            {
                InstituteName: 'National Institute of Pharmaceutical Education and Research (NIPER), Mohali',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg')
            },
            {
                InstituteName: 'Indian Institute of Technology Bhilai, Bhilai',
                Img:require('./Assests/Images/CRTDH-logos/IIT-Bhilai.jpg'),
                Link:"/CRTDH/IITBHILAI"
            },
            {
                InstituteName: 'Indian Institute of Technology Guwahati, Guwahati',
                Img:require('./Assests/Images/CRTDH-logos/yet-to-arrive.jpg')
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
                            <X className='close-button-centers'onClick={closePopup}/>
                            {circleToListMap[selectedCircle].map((item, index) => (
                                <li key={index} className='CRTDH-logo-name'>
                                   <Link to={item.Link} >{item.InstituteName}</Link> 
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
