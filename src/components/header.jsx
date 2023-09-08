import React,{useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

import './headerloader'
import './CSS/header.css'
function Header(){
    const [headerBackground, setHeaderBackground] = useState('transparent');
    const [linkbg, setLinkbg] = useState('#fff');
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setHeaderBackground('#fff');
            setLinkbg("#000")
          } else {
            setHeaderBackground('transparent');
            setLinkbg("#fff")
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
    <section className='header'>
        <div className='logos'> 
           <Link to='/'> <img className='comapny-logo' src={require('./Assests/Images/company-logo.png')}/></Link>
           <p className='CRTDH-logo-phone'> CRTDH</p>
        </div>
        <div className="cm-header-wrap" style={{ backgroundColor: headerBackground }}>
            <div className="cm-menu-wrap">
                <div className="cm-menu-btn fa fa-bars"></div>
                <div className="cm-menu-inner">
                    <ul className="menu-ul clear-all" >
                        <li className="has-child">
                            <Link to="#" className ='links' style={{ color: linkbg }}>Home</Link>
                        </li>
                        <li className="has-child">
                            <Link to="#" className ='links' style={{ color: linkbg }}>About</Link>
                        </li>
                        <li className="has-child">
                            <Link to="#" className ='links' style={{ color: linkbg }}>Research</Link>
                        </li>
                        <li className="has-child">
                            <Link to="Industry" className ='links' style={{ color: linkbg }}>Industry</Link>
                        </li>
                        <li className="has-child">
                            <Link to="#" className ='links' style={{ color: linkbg }}>Facilites</Link>
                        </li>
                        <li className="has-child">
                            <Link to="#" className ='links' style={{ color: linkbg }}>Contact us</Link>
                        </li>
                        <li className="has-child">
                            <Link to="#" className ='links'>
                                <div className='searchbar'>
                                    <Search style={{ color: linkbg }}/> 
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