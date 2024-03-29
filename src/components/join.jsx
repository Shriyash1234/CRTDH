import React, { useState,useEffect } from 'react';
import Header from './header';
import Footer1 from './footer1';
import Footer from './footer';

const Join = () => {
  const [showIndividualForm, setShowIndividualForm] = useState(true);

  const toggleForm = (isIndividual) => {
    setShowIndividualForm(isIndividual);
  };
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <section className="JoinUs-page">
      <Header />
      <div className="form-buttons">
          <button
            onClick={() => toggleForm(true)}
            className={showIndividualForm ? 'active-join-btn joinUsButton' : 'joinUsButton'}
          >
            Individual
          </button>
          <button
            onClick={() => toggleForm(false)}
            className={showIndividualForm ? 'joinUsButton' : 'active-join-btn joinUsButton'}
          >
            Organizational
          </button>
        </div>

      <div className="JoinUs">
        {showIndividualForm ? (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSejsU87yKbCJ-1L9yDE9RisdIz3BsObJXeL-u-NwEC9_2HXAg/viewform?embedded=true"
            width="640"
            height="820"
          >
            Loading…
          </iframe>
        ) : (
          <div style={{width:"400px",textAlign:"justify"}}>
           <b>CRTDH Consortium Membership</b> 
              <p>Interested Industry/Startup can write to dsir@ncrtdh.in Industry/Startup are encouraged to join as a consortium member (Organizational Membership) of the DSIR-sponsored network CRTDHs to get various benefits such as licensing, co-development of new technologies/products/processes in addition to customized training/workshop programs, organizational access to instrument facilities /pilot plant facilities etc. in network CRTDHs. (Details coming soon)</p>
          </div>
          // <iframe
          //   src="https://docs.google.com/forms/d/e/1FAIpQLSfPG4o3ynZxHOv9spsZbyOn77tQ9atHdXAFH6LXVgKscAJNRg/viewform?embedded=true"
          //   width="640"
          //   height="288"
          // >
          //   Loading…
          // </iframe>
        )}
      </div>

      <Footer1 />
      <Footer />
    </section>
  );
};

export default Join;
