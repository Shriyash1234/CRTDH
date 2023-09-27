import React, { useEffect, useState } from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import CRTDHdata from './Assests/data/centers.json'
import './CSS/center.css'
const Center = () => {
  const CenterCode = "IITR";
  const [data, setData] = useState([]);
  function collectCRTDHdata() {
    for (let i = 0; i < CRTDHdata.length; i++) {
      if (CRTDHdata[i].CenterCode === CenterCode) {
        setData(CRTDHdata[i])
      }
    }
  }
  useEffect(() => {
    collectCRTDHdata()
  }, [])
  return (
    <section className='center'>
      <Header color="black" />
      <div className='center-img'>
        {
          data.ImagePath ? <img src={require('./Assests/Images/CRTDHs/' + data.ImagePath)} className='CRTDH-img'>
          </img> : ""

        }
      </div>
      <div className='CRTDH-center-research-areas'>
        <h1 className='CRTDH-center-name'>{data.CenterName}</h1>
        <h2 className='research-areas'>Research Areas</h2>

        {data["ResearchAreas"] && (
          <ul>
            {Object.values(data["ResearchAreas"]).map((researchArea, index) => (
              <li key={index} className='research-area-name'>
                {researchArea}
              </li>
            ))}
          </ul>
        )}

      </div>
      <section className='CRTDH-center-info about training'>
        <h2 className='about-us'>Information </h2>
        <div className='separator_left'></div>
        {data["Information"] && (
          <p className='about-us-text'>
            {Object.values(data["Information"]).map((info, index) => (
              <div key={index}>
                {info}
                <br />
                <hr />
              </div>
            ))}
          </p>
        )}

      </section>
      <section className='CRTDH-center-facilities about training'>
        <h2 className='about-us'>Facilities </h2>
        <div className='separator_left'></div>
        <p className='about-us-text'>
          {data.Facilities}
          <br />
          <Link to={data.FacilitiesLink}>Link to the Equipments</Link>
          <hr />
        </p>
      </section>
      <section className='Current Research about training'>
        <h2 className='about-us'>Current Research </h2>
        <div className='separator_left'></div>
        <p className='about-us-text'>
          CRTDH IITGN is currently working on:
          {data["CurrentResearch"] && (
            <ol>
              {Object.values(data["CurrentResearch"]).map((research) => (
                <li>
                  {research}
                </li>
              ))}
            </ol>
          )}
        </p>
      </section>
      <section className='CRTDH-center-Contacts about training'>
        <h2 className='about-us'>Contacts </h2>
        <div className='separator_left'></div>
        <p className='about-us-text'>
          Here is the list of contacts at CRTDH IITGN.
          <br />
          <hr />
          <ol>
            {
              data.Contacts ? <li>
                {data.Contacts.POC.Name}
                <br />
                {data.Contacts.POC.Designation}
                <br />
                <hr />
                <span style={{ fontWeight: 600 }}>Address:</span> {data.Contacts.Address}
                <br />
                <span style={{ fontWeight: 600 }}>Phone Number:</span> {data.Contacts.PhoneNumber}
                <br />
                <span style={{ fontWeight: 600 }}>Email:</span> {data.Contacts.Email}
              </li> : ""
            }

          </ol>
          <hr />
        </p>
      </section>
    </section>
  )
}

export default Center
