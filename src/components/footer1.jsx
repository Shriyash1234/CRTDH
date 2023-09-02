import React from 'react';
import { Link } from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {Home} from 'lucide-react';
import {Phone} from 'lucide-react';
import {Mail} from 'lucide-react';
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
                  <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;Contact</p></Link> 
            </div>
            <div style={styles.reachUs}>
                <h4 className='CRTDH-name-footer1'>Reach Us</h4>
                    <p className='Head-office'><Home />&nbsp;&nbsp;HEAD OFFICE</p>
                    <p className='head-office-address'>Co-ordinator CRTDH Business Development Officer CSIR-IMMT, Bhubaneswar Acharya Vihar, Bhubaneswar-751013 P: +91-674-237-9294/9160</p>
                <hr></hr>
                    <p className='Head-office'><Phone />&nbsp;&nbsp;CALL US</p>
                    <p className='head-office-address'>+91-674-237-9294/9160</p>
                <hr></hr>
                    <p className='Head-office'><Mail />&nbsp;&nbsp;Email</p>
                    <p className='head-office-address'>abc@crtdh.ac.in</p>
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
        display:'flex',
        // justifyContent:'center',
        flexDirection:'column',
        // alignItems:'center',
        flex: '1 1 30%',
        padding: '20px 20px 20px 70px',
    },
    reachUs: {
        flex: '1 1 30%',
        marginBottom: '20px',
        display:'flex',
        // justifyContent:'center',
        flexDirection:'column',
        alignItems:'left',
        padding: '20px',
    }
};
