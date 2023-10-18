import React, { useEffect } from 'react';
import Header from './header';
import Footer1 from './footer1';
import Footer from './footer';
import JsonToTable from './jsontotable';
import SearchBar from './searchbar';
import jsonData from './Assests/data/IITGN.json'
import jsonData2 from './Assests/data/IITGN-Rest.json'

import './CSS/facilities.css'
function Facilities() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    <div className='facilites-page'>
      <Header color={'black'} />
      <div className="Facilities">
        <p className='list-text'>The list of equipements available at N-CRTDH</p>
        <SearchBar />
        <div className='excel-table'>
          <JsonToTable jsonData={jsonData} />
        </div>
        {/* <p className='list-text'>Rest of the instruments in DSIR-IITGN-CRTDH</p>
        <div className='excel-table'>
          <JsonToTable jsonData={jsonData2} />
        </div> */}
      </div>
      <Footer1 />
      <Footer />
    </div>

  );
}

export default Facilities;
