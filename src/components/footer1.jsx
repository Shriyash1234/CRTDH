import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Home } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Navigate } from 'react-router-dom';
const Footer1 = () => {
    const handleAboutLink = () => {
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
    return (
        <footer1 style={styles.footer1}>
            <div style={styles.description}>
                <h4 className='CRTDH-name-footer1'>CRTDH</h4>
                <hr></hr>
                <p className='CRTDH-desc'>DSIR, Government of India, has supported a couple of research-driven academic institutions and labs, across the country in setting up CRTDHs. These CRTDHs provide common infrastructural facilities, pilot facilities, technology support, training, and access to specialized services for MSMEs and Startups in the areas of  Affordable healthcare, New Materials/Chemical Processes, Electronics/Renewable Energy,   Environmental Interventions,    and Low-cost Machining. This multi-institutional national effort by DSIR has engaged several MSMEs and Startups across the country. </p>
            </div>
            <div className="quick-links-block" style={styles.quickLinks}>
                <h4 className='CRTDH-name-footer1'>Quick Links</h4>
                <Link to="/" className='quick-links-link'> <p className='quick-links'><ArrowRight /> &nbsp;Home</p></Link>
                <div onClick={handleAboutLink} style={{cursor:'pointer'}} className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;About us</p></div>
                <Link to='/Research' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;Research</p></Link>
                <Link to='/Facilities' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;Facilities</p></Link>
                <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;CRTDH Compendium 2022</p></Link>
            </div>
            <div style={styles.reachUs}>
                <h4 className='CRTDH-name-footer1'>Reach Us</h4>
                <p className='Head-office'><Home />&nbsp;&nbsp;Get In Touch</p>
                <p className='head-office-address'>
                    Dr Vipin Chandra Shukla, Scientist F<br></br>
                     Department of Scientific & Industrial Research (DSIR)
                    Technology Bhawan, New Mehrauli Road
                    New Delhi-110016. India</p>
                <hr></hr>
                <p className='Head-office'><Phone />&nbsp;&nbsp;CALL US</p>
                <p className='head-office-address'>+91-11 26590463,+91-11 26590696</p>
                <hr></hr>
                <p className='Head-office'><Mail />&nbsp;&nbsp;Email</p>
                <p className='head-office-address'><a href="mailto:vipin.shukla@gov.in">vipin.shukla@gov.in</a></p>
            </div>
        </footer1>
    );
};

export default Footer1;

const styles = {
    footer1: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    description: {
        flex: '1 1 30%',
        marginBottom: '20px',
        padding: '20px',
    },
    quickLinks: {
        display: 'flex',
        // justifyContent:'center',
        flexDirection: 'column',
        // alignItems:'center',
        flex: '1 1 30%',
        padding: '20px 20px 20px 70px',
    },
    reachUs: {
        flex: '1 1 30%',
        marginBottom: '20px',
        display: 'flex',
        // justifyContent:'center',
        flexDirection: 'column',
        alignItems: 'left',
        padding: '20px',
    }
};
