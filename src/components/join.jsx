import React, { useState } from 'react';
import Header from './header';
import Footer1 from './footer1';
import Footer from './footer';

const Join = () => {
  const [showIndividualForm, setShowIndividualForm] = useState(true);

  const toggleForm = (isIndividual) => {
    setShowIndividualForm(isIndividual);
  };

  return (
    <section className="JoinUs-page">
      <Header />
      <div className="form-buttons">
          <button
            onClick={() => toggleForm(true)}
            className={showIndividualForm ? 'active joinUsButton' : 'joinUsButton'}
          >
            Individual
          </button>
          <button
            onClick={() => toggleForm(false)}
            className={showIndividualForm ? 'joinUsButton' : 'active joinUsButton'}
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
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        ) : (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfPG4o3ynZxHOv9spsZbyOn77tQ9atHdXAFH6LXVgKscAJNRg/viewform?embedded=true"
            width="640"
            height="288"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        )}
      </div>

      <Footer1 />
      <Footer />
    </section>
  );
};

export default Join;
