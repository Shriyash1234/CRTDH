import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Home } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
const Footer1 = () => {
    return (
        <footer1 style={styles.footer1}>
            <div style={styles.description}>
                <h4 className='CRTDH-name-footer1'>CRTDH</h4>
                <hr></hr>
                <p className='CRTDH-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto ullam sapiente in dignissimos repudiandae vitae saepe, tempore placeat aut cumque quae neque itaque quis sit eos amet modi, iure tenetur nam reprehenderit eligendi deserunt voluptatem pariatur. Iste corporis quidem enim officiis odio consequuntur culpa labore doloremque? Quaerat necessitatibus eaque dicta neque aliquam quas! Blanditiis soluta cupiditate optio, nesciunt eaque sequi et tempora odit ipsam.</p>
            </div>
            <div className="quick-links-block" style={styles.quickLinks}>
                <h4 className='CRTDH-name-footer1'>Quick Links</h4>
                <Link to='' className='quick-links-link'> <p className='quick-links'><ArrowRight /> &nbsp;Home</p></Link>
                <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;About us</p></Link>
                <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;Research</p></Link>
                <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;Facilities</p></Link>
                <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;CRTDH Guidelines</p></Link>
            </div>
            <div style={styles.reachUs}>
                <h4 className='CRTDH-name-footer1'>Reach Us</h4>
                <p className='Head-office'><Home />&nbsp;&nbsp;Get In Touch</p>
                <p className='head-office-address'>
                    <Link to="https://www.google.com/maps/dir//Indian+Institute+Of+Technology+Gandhinagar+(IIT+Gandhinagar)+Indian+Institute+of+Technology+Palaj,+Gujarat+382355/@23.2114236,72.6842489,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x395c2adec1f16d8d:0xdc447b8706689bc3" target='_blank' style={{ color: 'white', textDecoration: 'none' }}>
                        Dr. Chinmay Ghoroi, Academic Block 4/405, IIT Gandhinagar, Palaj, Gandhinagar,
                        Gujarat – 382355</Link> </p>
                <hr></hr>
                <p className='Head-office'><Phone />&nbsp;&nbsp;CALL US</p>
                <p className='head-office-address'>+91-9925029889 (M)</p>
                <hr></hr>
                <p className='Head-office'><Mail />&nbsp;&nbsp;Email</p>
                <p className='head-office-address'>crtdh@iitgn.ac.in</p>
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
