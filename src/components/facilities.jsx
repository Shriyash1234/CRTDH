import React, { useEffect,useState } from 'react';
import Header from './header';
import Footer1 from './footer1';
import Footer from './footer';
import JsonToTable from './jsontotable';
import SearchBar from './searchbar';

import majorFacilities from './Assests/data/majorFacilities.json'
import jsonData from './Assests/data/IITGN.json'

import './CSS/facilities.css'
function Facilities() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  const [projectVisibility, setProjectVisibility] = useState({});

    const toggleProjectVisibility = (index) => {
        setProjectVisibility({
        ...projectVisibility,
        [index]: !projectVisibility[index],
        });
    };
  return (
    <div className='facilites-page'>
      <Header color={'black'} />
      <div className="Facilities">
        <p className='list-text'>CRTDH Facilities</p>
        {
          majorFacilities.map((project,index)=>(
            <div className='about-us-text project-div'>
                <div className='project-info'>
                    <p style={{fontWeight:"700"}}>{project.Name}</p> 
                    <p>{projectVisibility[index] ? project.Info : project.Info.slice(0, 400)}</p>
                    {project.Info.length > 400 && (
                    <p className="read-more-link" onClick={() => toggleProjectVisibility(index)}>
                        {projectVisibility[index] ? 'Read Less' : 'Read More'}
                    </p>
                    )}
                </div>
                {
                    project.ImageLink?
                    <img src={require(`${project.ImageLink}`)} className='project-picture'></img>:""
                }
            </div>
          ))
        }
        <p className='list-text'>Instrument Facilities</p>
          <div className='about-us-text project-div'>
                <div className='project-info'>
                    <p>All CRTDH Labs have several sophisticated instruments accessible to MSMEs and Startups for solving their problems. CRTDHs conduct hands-on training programs for many of these instruments. Also, multiple industry members and startups are getting their required tests done at these facilities across the country. </p> 
                </div>
                <img src={require("./Assests/Images/Projects/iitgnlab.png")} className='project-picture'></img> 
            </div>
        <SearchBar />
        <div className='excel-table'>
          <JsonToTable jsonData={jsonData} />
        </div>
      </div>
      <Footer1 />
      <Footer />
    </div>

  );
}

export default Facilities;
