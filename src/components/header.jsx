import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import CRTDHdata from './Assests/data/centers.json'; // Import your data here


import './headerloader'
import './CSS/header.css'

const centersOptions = [
  {
    InstituteName: 'Indian Institute of Technology Gandhinagar, Gandhinagar',
    Link:"/IITGN"
  },
  {
    InstituteName: 'CSIR- Central Electronics Engineering Research Institute (CEERI), Pilani',
  },
  {
    InstituteName: 'CSIR - Central Scientific Instruments Organization (CSIO) (Madras Complex), Chennai',
  },
  {
    InstituteName: 'National Institute of Technology-Andhra Pradesh, Tadepalligudem',
  },
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
  {
    InstituteName: 'CSIR-National Institute for Interdisciplinary Science and Technology (NIIST), Thiruvanthapuram',
  },
  {
    InstituteName: 'CSIR - Indian Institute of Toxicology Research (IITR), Lucknow',
  },
  {
    InstituteName: 'CSIR- Central Mechanical Engineering Research Institute (CMERI), Durgapur',
  },
  {
    InstituteName: 'Indian Institute of Technology Roorkee, Roorkee',
    Link:"/IITR"
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
];

function Header(props) {
  const centers = CRTDHdata; 
  const Navigate = useNavigate();
  const [headerBackground, setHeaderBackground] = useState('transparent');
  const color = props.color;
  const anticolor = color === 'white' ? 'black' : 'white'
  const [linkbg, setLinkbg] = useState(color);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderBackground("#fff");
        color === 'white' ? setLinkbg(anticolor) : setLinkbg(color)
      } else {
        color === 'white' ? setHeaderBackground('transparent') : setHeaderBackground('#fff');
        setLinkbg(color)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleAboutLink = () => {
    const element = document.getElementsByClassName('about-us')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('about-us')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const handleAboutLink1 = () => {
    const element = document.getElementsByClassName('caro')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('caro')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const handleAboutLink2 = () => {
    const element = document.getElementsByClassName('CRTDH-name-footer1')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('CRTDH-name-footer1')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const handleSearch = () => {
    const element = document.getElementsByClassName('list-text')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/Facilities');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('list-text')[0];
        console.log(updatedElement)
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const [isCentersDropdownOpen, setIsCentersDropdownOpen] = useState(false); // Add dropdown state

  const handleCentersDropdownClick = () => {
    // Toggle the dropdown state
    setIsCentersDropdownOpen(!isCentersDropdownOpen);
  };

  const renderCentersDropdown = () => {
    const dropdownStyles = {
      color: 'black', // Change the color to black
      backgroundColor:"white",
      flexDirection: 'column', // Display the list vertically
    };
    const dropdown = {
      color: 'black', // Change the color to black
    };

    if (isCentersDropdownOpen) {
      const visibleItems = centersOptions.slice(0, 5); // Display the first 5 items
      const scrollableItems = centersOptions.slice(5); // The rest of the items are scrollable
  
      return (
        <ul className="centers-dropdown" style={dropdownStyles}>
          {/* Map and render the visible items */}
          {visibleItems.map((institute, index) => (
            <li 
            key={index}
            >
              <Link style={dropdown} to={institute.Link}>
                {institute.InstituteName}
              </Link>
            </li>
          ))}
          {/* Scrollable list for the remaining items */}
          <div className="scrollable-list">
            {scrollableItems.map((institute, index) => (
              <Link
                key={index}
                style={dropdown}
                to={institute.Link}
                className="scrollable-item"
              >
                {institute.InstituteName}
              </Link>
            ))}
          </div>
        </ul>
      );
    }
    return null;
  };
  
  

  return (
    <section className='header'>
      <div className='logos'>
        <Link to='/'> <img className='comapny-logo' src={require('./Assests/Images/dsir.jpg')} /></Link>
        <p className='CRTDH-logo-phone'> CRTDH</p>
      </div>
      <div className="cm-header-wrap" style={{ backgroundColor: headerBackground }}>
        <div className="cm-menu-wrap">
          <div className="cm-menu-btn fa fa-bars"></div>
          <div className="cm-menu-inner">
            <ul className="menu-ul clear-all" >
              <li className="has-child">
                <div onClick={handleAboutLink1} className='about-link links' style={{ color: linkbg }}><Link to="/" className='links' style={{ color: linkbg }}>Home</Link></div>
              </li>
              <li className="has-child">
                <div onClick={handleAboutLink} className='about-link links' style={{ color: linkbg }}><Link to="/" className='links' style={{ color: linkbg }}>About</Link></div>
              </li>
              <li className="has-child">
                <Link to="/Research" className='links' style={{ color: linkbg }}>Research</Link>
              </li>
              <li className="has-child">
                <Link to="/Industry" className='links' style={{ color: linkbg }}>Industry</Link>
              </li>
              <li className="has-child">
                <Link to="/Facilities" className='links' style={{ color: linkbg }}>Facilites</Link>
              </li>
              <li className="has-child" onClick={handleCentersDropdownClick}>
                <div className='about-link links' style={{ color: linkbg }}>Centers</div>
                {renderCentersDropdown()} {/* Render the dropdown menu */}
              </li>
              <li className="has-child">
                <div onClick={handleAboutLink2} className='about-link links' style={{ color: linkbg }}> Contact us</div>
              </li>
              <li className="has-child">
                <div onClick={handleSearch} className='about-link links' style={{ color: linkbg }}><Link to="/Facilities" className='links'>
                  <div className='searchbar'>
                    <Search style={{ color: linkbg }} />
                    <p className='search-text' style={{ color: linkbg }}>&nbsp;&nbsp;&nbsp;Search</p>
                  </div>
                </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;