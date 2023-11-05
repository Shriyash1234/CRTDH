import React from 'react';
import emailjs from 'emailjs-com';

class Admin extends React.Component {
  componentDidMount() {
    // Initialize EmailJS here
    emailjs.init("X58CaIxbK2xNIb2yR"); // Replace with your User ID
  }

  sendMailToRecipients = (recipientEmails, currentIndex) => {
    const serviceID = "service_r72ofma"; // Replace with your service ID
    const templateID = "template_21lqvvd"; // Replace with your template ID

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
        // Send the next email after a delay (e.g., 2 seconds)
        setTimeout(() => {
          this.sendMailToRecipients(recipientEmails, currentIndex + 1);
        }, 200);
      })
      .catch((err) => {
        console.error(`Error sending email to ${email}`, err);
        // Handle the error and move on to the next email
        this.sendMailToRecipients(recipientEmails, currentIndex + 1);
      });
  }

  sendMail = () => {
    const recipientEmails = [
      "mandavekarshriyash@gmail.com",
      "crtdh@iitgn.ac.in",
      "appollo3579@gmail.com",
      "shriyashmandavekar1234@gmail.com",
      "mandavekar.shriyash@iitgn.ac.in",
      "maprcdata@gmail.com",
      "vraj.shah@iitgn.ac.in",
      "samparc77@gmail.com"
    ];

    this.sendMailToRecipients(recipientEmails, 0);
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
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
          Inauguration of Network CRTDH platform
        </button>
      </div>
    );
  }
}

export default Admin;
