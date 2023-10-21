import React, { useEffect, useState } from 'react';
import { Link, useNavigate,NavLink,useLocation } from 'react-router-dom';
import CRTDHdata from './Assests/data/centers.json'; // Import your data here


import './headerloader'
import './CSS/header.css'

const centersOptions = [
  {
    InstituteName: 'IITGN',
    Link: "/CRTDH/IITGN"
  },
  {
    InstituteName: 'IITKGP',
    Link: "/CRTDH/IITKGP"
  },
  {
    InstituteName: 'IITR',
    Link: "/CRTDH/IITR"
  },
  {
    InstituteName: 'CCMB',
    Link:"/CRTDH/CCMB"
  },
  {
    InstituteName: 'IIT Bhilai',
    Link:"/CRTDH/IITBHILAI"
  },
  {
    InstituteName: 'NITAP',
    Link:"/CRTDH/NITAP"
  },
  {
    InstituteName: 'IMMT',
    Link:"/CRTDH/IMMT"
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
  const location = useLocation();
  const Navigate = useNavigate();
  const [headerBackground, setHeaderBackground] = useState('transparent');
  const color = props.color;
  const anticolor = color === 'white' ? 'black' : 'white'
  const [linkbg, setLinkbg] = useState(color);
  const isCRTDHsActive = /^\/CRTDH\/\w+/.test(location.pathname);
  console.log(isCRTDHsActive)
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
    const element = document.getElementsByClassName('break')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('break')[0];
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
    setIsCentersDropdownOpen(!isCentersDropdownOpen);
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
          <ul className="menu-ul clear-all">
            <li className={`has-child`}>
              <div className='links' style={{ color: "black", marginRight: "10px" }}>
                <NavLink to="/" exact activeClassName="activeHeader" style={{ color: "black" }}>
                  Home
                </NavLink>
              </div>
            </li>
            <li className={`has-child `}>
                <div onClick={handleAboutLink} className='links' style={{ color: "black",marginRight:"10px" }}><Link to="/" style={{ color: "black" }}>About</Link></div>
            </li>
            <li className={`has-child`}>
              <div className={`about-link links CRTDHs-link ${isCRTDHsActive ? 'activeHeader' : ''}`} style={{ color: "black" }}>
                CRTDHs
              </div>
              {renderCentersDropdown()} {/* Render the dropdown menu */}
            </li>
            <li className={`has-child`}>
              <NavLink to="/Research" activeClassName="activeHeader" style={{ color: "black" }}>
                R&D
              </NavLink>
            </li>
            <li className={`has-child`}>
              <NavLink to="/Industry" activeClassName="activeHeader" style={{ color: "black" }}>
                Industry
              </NavLink>
            </li>
            <li className={`has-child`}>
              <NavLink to="/Facilities" activeClassName="activeHeader" style={{ color: "black" }}>
                Facilities
              </NavLink>
            </li>
            <li className={`has-child`}>
                <div onClick={handleAboutLink2} className='about-link links CRTDHs-link' style={{ color: "black" }}> Contact</div>
            </li>
            <li className={`has-child`}>
              <NavLink to="/Join" activeClassName="activeHeader" style={{ color: "black" }}>
                Join us
              </NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;