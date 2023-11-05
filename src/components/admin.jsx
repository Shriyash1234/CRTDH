import React from 'react';
import emailjs from 'emailjs-com';
import Header from './header'

class Admin extends React.Component {
  componentDidMount() {
    emailjs.init("X58CaIxbK2xNIb2yR"); 
  }

  sendMailToRecipients = (recipientEmails, currentIndex) => {
    const serviceID = "service_r72ofma";
    const templateID = "template_21lqvvd";

    if (currentIndex >= recipientEmails.length) {
      console.log("All emails sent successfully");
      return;
    }

    const email = recipientEmails[currentIndex];

    const params = {
      recipientEmail: email,
      // You can add additional parameters if needed
    };

    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        console.log(`Email sent successfully to ${email}`, res);
        setTimeout(() => {
          this.sendMailToRecipients(recipientEmails, currentIndex + 1);
        }, 100);
      })
      .catch((err) => {
        console.error(`Error sending email to ${email}`, err);
        this.sendMailToRecipients(recipientEmails, currentIndex + 1);
      });
  }

  sendMail = () => {
    const recipientEmails = [
      "mandavekarshriyash@gmail.com",
      "appollo3579@gmail.com",
      "shriyashmandavekar1234@gmail.com",
      "mandavekar.shriyash@iitgn.ac.in",
      "maprcdata@gmail.com",
      "samparc77@gmail.com"
    ];

    this.sendMailToRecipients(recipientEmails, 0);
  }

  render() {
    return (
      <div className='Admin'>
        <Header/>
        <div style={{ display: "flex", justifyContent: "center",marginTop:"100px",marginBottom:"100px" }}>
          <img src={require('./Assests/Images/admin-page.png')} alt="Admin Page" />
          <button
            className="btn btn-primary"
            onClick={this.sendMail}
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              marginTop: "530px",
              fontSize: "2rem",
              fontWeight: "600"
            }}
          >
            Inauguration of Network CRTDH Platform
          </button>
        </div>
      </div>
    );
  }
}

export default Admin;
