import React, { useEffect, useState } from 'react'
import Header from './header'
import { Link,useParams } from 'react-router-dom'
import CRTDHdata from './Assests/data/centers.json'
import './CSS/center.css'

const Center = () => {
  let {CenterCode} = useParams();
  // const CenterCode = "IITGN";
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
          List of Facilites at CRTDH {CenterCode}
        {data["SomeFacilities"] && (
          
          <ul>
            {Object.values(data["SomeFacilities"]).map((researchArea, index) => (
              <li key={index} className='research-area-name'>
                {researchArea}
              </li>
            ))}
          </ul>
        )}
          {data.Facilities}
          <br/>
          {
            data["FacilitiesLink"] && (
              <Link to={data.FacilitiesLink} className='instruments-btn'>DETAILED LIST OF INSTRUMENTS AVAILABLE WITH DSIR-IITGN-CRTDH</Link>
            )
          }
          <br/>
          {
            data["ServiceChargesLink"] && (
              <Link to={data.ServiceChargesLink} className='service-charges-btn'>THE SERVICE CHARGES FOR DSIR-IITGN-CRTDH FACILITIES</Link>
            )
          }
          <br/>
          {
            data["PilotPlantLink"] && (
              <Link to={data.PilotPlantLink} className='pilot-plant-btn'>PILOT PLANT FACILITIES AVAILABLE WITH DSIR-IITGN-CRTDH</Link>
            )
          }
        </p>
      </section>
      {
          data["CurrentResearch"] && (
            <section className='Current Research about training' style={{marginTop:"50px"}}>
            <h2 className='about-us'>Current Research </h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
              CRTDH {CenterCode} is currently working on:
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
            {
                data["ResearchLink"] && (
                  <Link to={data.ResearchLink} className='instruments-btn'style={{width:"fit-content"}}>CRTDH A PLACE FOR INCUBATION</Link>
                )
              }
          </section>
          )
        }
      
      {
        data["Technologies"] && (
          <section className='CRTDH-center-technologies about tarining'>
            <h2 className='about-us'>Technologies </h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
              {data.Technologies}
              <br/>
              The List of Technologies developed by CRTDH {CenterCode}
              {data["ListOfTechnologies"] && (
                <ol>
                  {Object.values(data["ListOfTechnologies"]).map((research) => (
                    <li>
                      {research}
                    </li>
                  ))}
                </ol>
              )}
            </p>
          </section>
        )
      }
      
      {
        data["Workshops"] && (
          <section className='CRTDH-center-workshops about training'>
            <h2 className='about-us'>Workshops/Conferences </h2>
            <div className='separator_left'></div>
              {
                data["Workshops"] && (
                  <p className='about-us-text'>{data.Workshops}
                  <br/>
                  {data["ListOfWorkShops"] && (
                    <>
                    <br/>
                    <p className='about-us-text'>Here is the list of workshops/conferences conducted by {CenterCode}</p>
                    <ol>
                      {Object.values(data["ListOfWorkShops"]).map((research) => (
                        <li>
                          {research}
                        </li>
                      ))}
                    </ol>
                    </>
                  )}
                  <Link to={data.WorkShopsLink} className='instruments-btn'style={{width:"fit-content"}}>Detailed List Of workshops conducted by CRTDH-IITGN</Link>
                  </p> 
                )
              }
          </section>
        )
        }
        {
        data["Services"] && (
          <section className='CRTDH-center-Services about tarining'>
            <h2 className='about-us'>Services </h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
              {data.Services}
              <br/>
              {data["ListOfServices"] && (
                <ol>
                  {Object.values(data["ListOfServices"]).map((research) => (
                    <li>
                      {research}
                    </li>
                  ))}
                </ol>
              )}
            </p>
          </section>
        )
      }
      {
        data["SocialImpact"] && (
          <section className='CRTDH-center-SocialImpact about tarining'>
            <h2 className='about-us'>SocialImpact </h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
              {data.SocialImpact}
            </p>
          </section>
        )
      }
      
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
