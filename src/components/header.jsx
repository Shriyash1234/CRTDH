import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

import './headerloader'
import './CSS/header.css'
function Header(props) {
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
  return (
    <section className='header'>
      <div className='logos'>
        <Link to='/'> <img className='comapny-logo' src={require('./Assests/Images/company-logo.png')} /></Link>
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
              <li className="has-child">
                <div onClick={handleAboutLink2} className='about-link links' style={{ color: linkbg }}> <Link to="/" className='links' style={{ color: linkbg }}>Contact us</Link></div>
              </li>
              <li className="has-child">
                <Link to="#" className='links'>
                  <div className='searchbar'>
                    <Search style={{ color: linkbg }} />
                    <p className='search-text' style={{ color: linkbg }}>&nbsp;&nbsp;&nbsp;Search</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;