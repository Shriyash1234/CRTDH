import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import './CSS/center.css'
const Center = () => {
  return (
    <section className='center'>
      <Header color="white"/>
      <div className='center-img'>
        <img src={require('./Assests/Images/CRTDHs/IITGN.jpeg')} className='CRTDH-img'></img>
      </div>
      <div className='CRTDH-center-research-areas'>
        <h1 className='CRTDH-center-name'>CRTDH IIT Gandhinagar</h1>
        <h2 className='research-areas'>Research Areas</h2>
        <ul>
            <li className='research-area-name'>Nanomaterials</li>
            <li className='research-area-name'>Advanced Polymers</li>
            <li className='research-area-name'>Materials for Energy Storage</li>
            <li className='research-area-name'>Sustainable Chemistry</li>
            <li className='research-area-name'>Additive Manufacturing (3D Printing)</li>
        </ul>
      </div>
      <section className='CRTDH-center-info about training'>
        <h2 className='about-us'>Information </h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
            Gujarat is home to number of chemical based Micro, Small and Medium Enterprises (MSMEs). However, there is no institutional mechanism for industries to interact with academic institutions for Research and Technology Development. The establishment of the Common Research and Technology Development Hub sponsored by Department of Scientific and Industrial Research (DSIR) and Indian Institute of Technology Gandhinagar, IITGN (DSIR-IITGN-CRTDH) on Chemical Processes is one of the important initiatives for chemical industries.
            <br />
            <hr />
            Dyes, dye intermediates and textile are core chemical industries in India and mostly located in Gujarat. It is also the second highest export segment in the chemical industry and shares about 7% in the global market. Nearly 80% of the total dye production capacity of India is in the state of Gujarat due to the availability of raw materials and dominance of textile industry in the regions. Approximately 70% of the dye products from Gujarat are being exported to different countries. Gujarat have about 1000 dyestuff units in Ahmedabad, Vatva, Naroda, Odhav, Vadodara, Ankleshwar, Surat, Valsad and Vapi. However, the sector is performing very badly in terms of waste generation and its treatment. The environmental issue is also preventing manufacturer to produce new products as per market demand and expansion of existing products. The dye effluent contains very high COD and TDS. The release of untreated wastewater poses a threat to the environment and causes serious problem to groundwater and surface water. In addition, it is also water intensive industry (requires approximately 800 liters of water per kg of dye). Moreover, MSMEs are using age-old manufacturing processes without any effort to improve the water usage in the process. As water is one of the major problems in the changed climatic condition, reduction in process water will benefit the industry and society. To achieve aggressive growth of the industry, we are working on this major problem. Also, any improvement in manufacturing processes, reduction in water usage and waste generation will be a great contribution to our environment.
            <br />
            <hr />
            The DSIR-IITGN-CRTDH is working towards the development and customization of different dye and textile industries. A Process Technology Lab along with the pilot plant facility is developed for the dye and textile MSMEs. A multidisciplinary approach is taking to enhance the capabilities of MSMEs. The CRTDH is developing technological know-how for effluent treatment, waste reduction, process improvement, and testing products/raw materials. The help from CRTDH will strengthen MSME in the competitive market and expand their business. The DSIR-IITGN-CRTDH is expected to leverage the existence of different centres, high-quality labs, and Research Park at IITGN. The facility is a one-stop solution for many of chemical industries in the country.
            </p>
      </section>
      <section className='CRTDH-center-facilities about training'>
        <h2 className='about-us'>Facilities </h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
            In addition to the above, other institute facilities of IITGN such as X-ray diffraction, SEM- EDS, LC-MS, AFM, Confocal Microscopy, NMR etc and to do large scale simulation and modeling of various bio-treatment processes we have a commercial software called SIMBA, standard modelling software like ASPEN, ASPEN Dynamics, COMSOL, ANSYS and Matlab etc. which will also be accessible for research and development purpose.
            Here is the list of items that are available with CRTDH IITGN.
            <br />
            <Link to='/Facilities'>Link to the Equipments</Link>
            <hr />
            </p>
      </section>
      <section className='Current Research about training'>
        <h2 className='about-us'>Current Research </h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
            CRTDH IITGN is currently working on:
            <ol>
                <li>Physical Treatment followed by Catalytic Oxidation Treatment of Industrial effluent.</li>
                <li>Bio/Electro Coagulation Treatment followed by adsorption technique for complex dye industrial effluent.</li>
                <li>Flocculation and Coagulation followed by Fenton.</li>
                <li>Coagulation of STP/ETP effluent by using waste utilized chemical.</li>
                <li>Color Removal by using Bio-Polymer.</li>
                <li>Continuous Manufacturing scheme for Reactive Dye/Pigment.</li>
                <li>Continuous washing process for Benzene based its derivative.</li>
                <li>Chlorination based effluent treatment technique.</li>
                <li>Microbubble followed by Ozonation for the treatment of Hospital wastewater.</li>
                <li>Organic and Inorganic salt separation by using fractional crystallization.</li>
                <li>Separation of Acid gas by using Counter Current Packed Absorption Column</li>
                <li>Sewage Water Treatment by using phytoremediation</li>
                <li>Anode preparation for advance Li-Ion Battery.</li>
                <li>Metal Recovery from Li-Ion Battery using Liquid-Liquid Extraction.</li>
            </ol>
            <br />
            <hr />
            </p>
      </section>
      <section className='CRTDH-center-Contacts about training'>
        <h2 className='about-us'>Contacts </h2>
            <div className='separator_left'></div>
            <p className='about-us-text'>
            Here is the list of contacts at CRTDH IITGN.
            <br />
            <hr/>
            <ol>
                <li>
                DR. CHINMAY GHOROI
                <br />
                Principle Investigator of DSIR-IITGN-CRTDH
                <br />
                Professor of Chemical Engineering
                <br />
                <hr/>
                <span style={{fontWeight:600}}>Address:</span> Academic Block 4/405, IIT Gandhinagar, Palaj, Gandhinagar,  Gujarat - 382355
                <br />
                <span style={{fontWeight:600}}>Phone Number:</span> +79-2395-2405 (O) +79-2395-2254 (O) +91-9925029889 (M)
                <br/>
                <span style={{fontWeight:600}}>Email:</span> crtdh@iitgn.ac.in
                </li>
            </ol>
            <hr />
            </p>
      </section>
    </section>
  )
}

export default Center
