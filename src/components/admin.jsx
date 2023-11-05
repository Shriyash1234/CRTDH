import React from 'react';
import emailjs from 'emailjs-com';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  componentDidMount() {
    // Initialize EmailJS here
    emailjs.init("X58CaIxbK2xNIb2yR");
  }

  sendMail = () => {
    const { name, email, message } = this.state;
    const serviceID = "service_r72ofma";
    const templateID = "template_21lqvvd";

    const params = {
      name,
      email,
      message,
    };

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        this.setState({
          name: '',
          email: '',
          message: '',
        });
        console.log(res);
        alert("Your message sent successfully!!");
      })
      .catch(err => console.log(err));
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div style={{display:"flex",justifyContent:"Center",marginTop:"50vh"}}>
        <button className="btn btn-primary" onClick={this.sendMail}>Submit</button>
      </div>
    );
  }
}

export default Admin;
