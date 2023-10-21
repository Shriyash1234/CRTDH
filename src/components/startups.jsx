import React from 'react'
import './CSS/about.css'

const Startups = () => {
    return (
        <section className='about training' style={{ marginTop: '80px' }}>
            <h2 className='about-us'>Success stories with startups in CRTDHs</h2>
            <div className='separator_left'></div>

            {/* Start of the first startup information */}
            <div className='startup-info'  style={{ fontSize: '1.8rem' }}>
                <h3>1. Medical grade ultra pure water and hemodialysis unit</h3>
                <p>
                    <strong>Company Name & Address:</strong> Althion Tech Innovations Private Limited, PLOT NO 2 UPPAL IDA HYDERABAD Hyderabad TG 500039 IN<br />
                    <strong>Company Email:</strong> suryarpksrao@gmail.com<br />
                    <strong>CRTDH with which the Company associated:</strong> CSIR-CCMB, Hyderabad<br />
                    <strong>Product or technology developed at/with the CRTDH:</strong> Althion Tech Innovations Private Limited, a pioneering health-tech startup, specializes in the creation of domestically manufactured medical and healthcare equipment and devices tailored for the Indian market. Althion has acquired the licensing rights to a patented technology originally conceived by the CSIR Indian Institute of Chemical Technology in Hyderabad. Leveraging this innovative foundation, they have successfully introduced two groundbreaking products to address unmet needs in the field of Type-1 ultrapure water and hemodialysis.<br />
                    {/* Include the rest of the description here */}
                </p>
            </div>
            {/* End of the first startup information */}

            {/* Start of the second startup information */}
            <div className='startup-info'  style={{ fontSize: '1.8rem' }}>
                <h3>2. BIO-THERAPEUTIC PROTEINS</h3>
                <p>
                    <strong>Company Name & Address:</strong> Oncosimis Biotech Pvt Ltd, Genpact Road, IDA Uppal, Habsiguda, Hyderabad, Telangana, India<br />
                    <strong>Company Email:</strong> sreddy@oncosimis.com<br />
                    <strong>CRTDH with which the Company associated:</strong> CSIR-CCMB, Hyderabad<br />
                    <strong>Product or technology developed at/with the CRTDH:</strong> Oncosimis Biotech is a startup biotech company dedicated to developing and producing bio-therapeutic proteins for cancer, diabetes, and other diagnostic & industrial applications at affordable costs. The company has developed bio-therapeutic proteins using two proprietary technology platforms, AcceTT® and BacSec® which provide a distinctive advantage to manufacture biosimilars at affordable costs.<br />
                    {/* Include the rest of the description here */}
                </p>
            </div>
            {/* End of the second startup information */}

            {/* Start of the third startup information */}
            <div className='startup-info'  style={{ fontSize: '1.8rem' }}>
                <h3>3. DIAGNOSTIC KIT FOR AQUACULTURE</h3>
                <p>
                    <strong>Company Name & Address:</strong> M/s Bioartis Life Sciences Private Limited, Plot No: 41,H No: 2-3-504/3, Road No:3, Sai Nagar, Nagole, Hyderabad – 500068, Telangana.<br />
                    <strong>Company Email:</strong> bioartisls@gmail.com<br />
                    <strong>CRTDH with which the Company associated:</strong> CSIR-CCMB, Hyderabad<br />
                    <strong>Product or technology developed at/with the CRTDH:</strong> Bioartis Life Sciences Private Limited is a pioneering biotech startup that specializes in the development of diagnostic kits tailored for the aquaculture industry, with a primary focus on shrimp farming. One of their flagship products is the BioArtis WSSV PCR Detection kit, designed to identify the White Spot Syndrome Virus (WSSV).<br />
                    {/* Include the rest of the description here */}
                </p>
            </div>
            {/* End of the third startup information */}
        </section>
    )
}

export default Startups
