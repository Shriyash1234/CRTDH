import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import CRTDHdata from './Assests/data/centers.json'; // Import your data here


import './headerloader'
import './CSS/header.css'

const centersOptions = [
  {
    InstituteName: 'IITGN',
    Link: "/IITGN"
  },
  {
    InstituteName: 'IITKGP',
    Link: "/IITKGP"
  },
  {
    InstituteName: 'IITR',
    Link: "/IITR"
  },
  {
    InstituteName: 'CCMB',
    Link:"/CCMB"
  },
  {
    InstituteName: 'IIT Bhilai',
    Link:"/IITBHILAI"
  },
  {
    InstituteName: 'NITAP',
    Link:"/NITAP"
  },
  {
    InstituteName: 'IMMT',
    Link:"/IMMT"
  },
  {
    InstituteName: 'CEERI',
  },
  {
    InstituteName: 'CSIO',
  },
  
  {
    InstituteName: 'IHBT',
  },
  
  {
    InstituteName: 'DPSRU',
  },
  {
    InstituteName: 'NIIST',
  },
  {
    InstituteName: 'IITRes',
  },
  {
    InstituteName: 'CMERI',
  },
  {
    InstituteName: 'CDRI',
  },
  
  {
    InstituteName: 'NCL',
  },
  {
    InstituteName: 'NIPER',
  },
  {
    InstituteName: 'IITG',
  },
];

function Header(props) {
  const centers = CRTDHdata; 
  const Navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('Home');
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
    setActiveLink('About')
    const element = document.getElementsByClassName('about-us-text')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('about-us-text')[0];
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

  const [isCentersDropdownOpen, setIsCentersDropdownOpen] = useState(true); // Add dropdown state

  const handleCentersDropdownClick = () => {
    // Toggle the dropdown state
    setIsCentersDropdownOpen(!isCentersDropdownOpen);
    setActiveLink('CRTDHs')
  };
  const handleRDLink = (linkText) => {
    setActiveLink("R&D");
  };
  const handleIndutryLink = (linkText) => {
    setActiveLink("Industry");
  };
  const handleFacilitiesLink = (linkText) => {
    setActiveLink("Facilities");
  };

  const renderCentersDropdown = () => {
    const dropdownStyles = {
      color: 'black', // Change the color to black
      flexDirection: 'column', // Display the list vertically
      backgroundColor:"white"
    };
    const dropdown = {
      color: 'black', // Change the color to black
    };

    if (isCentersDropdownOpen) {
      const visibleItems = centersOptions.slice(0, 18); // Display the first 5 items
      const scrollableItems = centersOptions.slice(18); // The rest of the items are scrollable
  
      return (
        <ul className="centers-dropdown" style={dropdownStyles}>
          {/* Map and render the visible items */}
          {visibleItems.map((institute, index) => (
            <li 
            key={index} style={{width:'100%'}}
            >
              <Link to={institute.Link} style={dropdown}>
                {institute.InstituteName}
              </Link>
            </li>
          ))}
          {/* Scrollable list for the remaining items */}
          <div className="scrollable-list">
            {scrollableItems.map((institute, index) => (
              <Link
                key={index}
                to={institute.Link}
                className="scrollable-item"
                style={dropdown}
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
      <div className="cm-header-wrap" style={{ backgroundColor: "white" }}>
        <div className="cm-menu-wrap">
          <div className="cm-menu-btn fa fa-bars"></div>
          <div className="cm-menu-inner">
            <ul className="menu-ul clear-all" >
              <li className={`has-child ${activeLink === 'Home' ? 'activeHeader' : ''}`}>
                <div onClick={handleAboutLink1} className='links' style={{ color: "black",marginRight:"10px" }}><Link to="/" style={{ color: "black" }}>Home</Link></div>
              </li>
              <li className={`has-child ${activeLink === 'About' ? 'activeHeader' : ''}`}>
                <div onClick={handleAboutLink} className='links' style={{ color: "black",marginRight:"10px" }}><Link to="/" style={{ color: "black" }}>About</Link></div>
              </li>
              <li className={`has-child ${activeLink === 'CRTDHs' ? 'activeHeader' : ''}`} onClick={handleCentersDropdownClick}>
                <div className='about-link links CRTDHs-link' style={{ color: "black" }}>CRTDHs</div>
                {renderCentersDropdown()} {/* Render the dropdown menu */}
              </li>
              <li className={`has-child ${activeLink === 'R&D' ? 'activeHeader' : ''}`} onClick={handleRDLink}>
                <Link to="/Research" className='links' style={{ color: "black" }}>R&D</Link>
              </li>
              <li className={`has-child ${activeLink === 'Industry' ? 'activeHeader' : ''}`} onClick={handleIndutryLink}>
                <Link to="/Industry" className='links' style={{ color: "black" }}>Industry</Link>
              </li>
              <li className={`has-child ${activeLink === 'Facilities' ? 'activeHeader' : ''}`} onClick={handleFacilitiesLink}>
                <Link to="/Facilities" className='links' style={{ color: "black" }}>Facilites</Link>
              </li>
              <li className={`has-child ${activeLink === 'ContactUs' ? 'activeHeader' : ''}`}>
                <div onClick={handleAboutLink2} className='about-link links CRTDHs-link' style={{ color: "black" }}> Contact</div>
              </li>
              <li className={`has-child ${activeLink === 'Join' ? 'activeHeader' : ''}`}>
                <Link to="/Join" className='about-link links CRTDHs-link' style={{ color: "black" }}> Join us</Link>
              </li>
              {/* <li className="has-child">
                <div onClick={handleSearch} className='about-link links ' style={{ color: "black" }}><Link to="/Facilities" className='links'>
                  <div className='searchbar'>
                    <Search style={{ color: "black" }} />
                    <p className='search-text' style={{ color: "black" }}>&nbsp;&nbsp;&nbsp;Search</p>
                  </div>
                </Link>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;