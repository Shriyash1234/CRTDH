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
      "prakash.muthudoss@a2z4r.com"	,
"sanjib.banerjee@iitbhilai.ac.in "	,
"aa.kulkarni@ncl.res.in"	,
"as.kushwaha@cdri.res.in"	,
"sankarp@nitandhra.ac.in"	,
"sypujar1970@gmail.com"	,
"chinmayg@iitgn.ac.in "	,
"gkjdpsru@gmail.com"	,
"csshah12@gmail.com"	,
"sales@alpschem.com"	,
"aipindia85@gmail.com"	,
"pankajpanchal19@gmail.com"	,
"project@alpschem.com"	,
"aruna.vavilala@aurobindo.com "	,
"ruteshvs@paragonind.com"	,
"research@acmeprocess.net "	,
"cheaan.aacharya1@gmail.com"	,
"moshin.sheliya@honestbiovet.com"	,
"dhiraj.bhatia@iitgn.ac.in"	,
"yadav_pankaj@iitgn.ac.in"	,
"hetal@vihita-bio.com"	,
"aanak@accumaximum.com"	,
"ceo@aastropure.com"	,
"chintans99@gmail.com"	,
"vk_parmar@spuvvn.edu"	,
"huveapi@gmail.com"	,
"aanandmirani@gmail.com"	,
"ngpandya@elecon.com"	,
"mail@navkarseeds.com"	,
"drkdbhatt@outlook.com"	,
"kbtrivedi27@gmail.com"	,
"tanmay17@gmail.com"	,
"kaushal.sharma@voxco.in"	,
"kbtrivedi27@gmail.com"	,
"firdaus_md@iitgn.ac.in"	,
"vivek.joshi@gacl.co.in"	,
"pravin.thombare@celestispharma.com"	,
"romal@parshwnath.com"	,
"sales@alpschem.com"	,
"tejas@tmppindia.com"	,
"cmd@omecpl.co.in"	,
"prakrutishah0@gmail.com"	,
"patelbhupendra8585@gmail.com"	,
"pdayal@iitgn.ac.in"	,
"mavensgreenenergy@gmail.com"	,
"mavensgreenenergy@gmail.com"	,
"jay@shreenathjirasayan.com"	,
"vgandhi@boronmolecular.com.au"	,
"partha.ram@iitr.res.in"	,
"anup.chandra@yahoo.com"	,
"sendtomahesh@gmail.com"	,
"Smit@7horsesinternational.com"	,
"sankarp@nitandhra.ac.in"	,
"amin.ismaili@godeepak.com"	,
"rucha@letsexcel.in "	,
"irshadlove2001@gmail.com"	,
"amogh.amscp23@spt.pdpu.ac.in"	,
"tvishwajeet84@gmail.com"	,
"amitpathak32200@gmail.com"	,
"gargigon7@gmail.com"	,
"singhketan706@gmail.com"	,
"vinodm@iitgn.ac.in"	,
"kumarranjeet@iitgn.ac.in"	,
"rohanpatekar181299@gmail.com"	,
"rohanpatekar24499@gmail.com"	,
"abhishek.mmscp23@spt.pdpu.ac.in"	,
"kumawat_akshant@iitgn.ac.in"	,
"nathanael.jmscp23@spt.pdpu.ac.in"	,
"abhaymagar90@gmail.com"	,
"ishanya21@iiserb.ac.in"	,
"sudhanshu281994@gmail.com"	,
"sudhanshu281994@gmail.com"	,
"jani_vruddhi@iitgn.ac.in"	,
"anuj.buch@iitgn.ac.in"	,
"chaitali.mandal@yahoo.co.in"	,
"maneesh@niper.ac.in"	,
"vaenkat152000@gmail.com"	,
"shubham.p@iitgn.ac.in"	,
"sohom.banner@gmail.com"	,
"sales@alpschem.com"	,
"charmibhalani00@gmail.com"	,
"saurabh@niist.res.in"	,
"monilshah@roopdyes.com"	,
"saumils@iitgn.ac.in"	,
"jagruti.p@iitgn.ac.in"	,
"akshaynpatel@yahoo.com"	,
"ankursingh@iitgn.ac.in"	,
"jenissamuel@iitgn.ac.in"	,
"bidhan.sahu@iitgn.ac.in"	,
"chavda_jaydeepsinh@iitgn.ac.in"	,
"jeevanaboina.krishna@iitgn.ac.in"	,
"dhruv.parekh@iitgn.ac.in"	,
"23110093@iitgn.ac.in"	,
"jayesh.prajapati@iitgn.ac.in"	,
"shibarams@iitgn.ac.in"	,
"aniket.ratnaparkhi@iitgn.ac.in"	,
"bagiyapalak@iitgn.ac.in"	,
"sujit@iitgn.ac.in"	,
"aniruddha.ajaykumar@iitgn.ac.in"	,
"sbarik@iitgn.ac.in"	,
"deep.st@iitgn.ac.in"	,
"chinthala.shivamani@iitgn.ac.in"	,
"Mekala.sohitha@iitgn.ac.in"	,
"banavath.naik@iitgn.ac.in"	,
"achintya.jana@iitgn.ac.in"	,
"vubbani.chandra@iitgn.ac.in"	,
"abirarashid@iitgn.ac.in"	,
"harish.singh@iitgn.ac.in"	,
"shounak.naskar@iitgn.ac.in"	,
"guduru_aditya@iitgn.ac.in"	,
"mata.s@iitgn.ac.in"	,
"amandeepsingh.dhanjal@iitgn.ac.in"	,
"vengurlekarrudra@iitgn.ac.in"	,
"Monika.chhajed@iitgn.ac.in"	,
"sadafsomya@iitgn.ac.in"	,
"dipeshsc@iitgn.ac.in"	,
"anushkabiswas@iitgn.ac.in"	,
"birjedeven@iitgn.ac.in"	,
"ritika.srivastava@iitgn.ac.in"	,
"23110306@iitgn.ac.in"	,
"rishiraj.a@iitgn.ac.in"	,
"somesh.ps@iitgn.ac.in"	,
"balafix@gmail.com"	,
"shrishithasree@iitgn.ac.in"	,
"firdaus_md@iitgn.ac.in"	,
"sachintawde@iitgn.ac.in"	,
"laxmi.hirani@iitgn.ac.in"	,
"srivastavashriyansh@iitgn.ac.in"	,
"aravind.chadhar@iitgn.ac.in"	,
"chokshiavnish@iitgn.ac.in"	,
"ranjitsjoshi@gmail.com"	,
"rizwanq@iitgn.ac.in"	,
"prachi.sharma@iitgn.ac.in"	,
"bharti.malvi@iitgn.ac.in"	,
"kratisingh955@gmail.com"	,
"radeepak@iitgn.ac.in"	,
"rohitsingh@iitgn.ac.in"	,
"yashwant.k@iitgn.ac.in"	,
"manisha.o@iitgn.ac.in"	,
"jay.b@iitgn.ac.in"	,
"swenysakariya43@gmail.com"	,
"pam3@accumaximum.com"	,
"gujarat1@accumaximum.com"	,
"himanshu@nasscom.in"	,
"viji@ccmb.res.in"	,
"sriharitha.rowthu@iitgn.ac.in"	,
"sahusandhyarani@gmail.com"	,
"dashshritilekha@iitgn.ac.in"	,
"balramkrishnamadanabc@gmail.com"	,
"yschaudhary@immt.res.in"	,
"manish@immt.res.in"	,
"anil.immt@gmail.com"	,
"akbhardwaj7079@gmail.com"	,
"tiwaritanu@iitgn.ac.in"	,
"d.patel@krishnadyes.net"	,
"harendra501@gmail.com"	,
"narendrababu.nita@gmail.com"	,
"pam4@accumaximum.com"	,
"manibhadrachemicals@ymail.com"	,
"iqura_m@iitgn.ac.in"	,
"suchit.amin@architorg.com"	,
"kandarp.amin@architorg.com"	,
"aipindia85@gmail.com"	,
"aipindia85@gmail.com"	,
"remedylabs1@gmail.com"	,
"selvaganesh.k@iitgnac.in"	,
"hmsm2003@yahoo.com"	,
"drjaiminvasamsmechair@gmail.com"	,
"ceo@aastropure.com"	,
"kfinechem@gmail.com"	,
"prg@siddhiindia.com"	,
"arpit.rohit@valiantorganics.com"	,
"vikash.singh@iitgn.ac.in"	,
"yash@ihubgujarat.in"	,
"project@siddhiindia.com"	,
"str.amd@valiantorganics.com"	,
"engineer.ahd@valiantorganics.com"	,
"ramesh@dynemic.com"	,
"info@ratnamani.in"	,
"info@ratnamani.in"	,
"Shital.patwa@dosaabl.com"	,
"rasyotra_anshul@iitgn.ac.in"	,
"narsiram.gurjar@iitgn.ac.in"	,
"project@siddhiindia.com"	,
"priya@nic.in"	,
"vipin.shukla@gov.in"	,
"suman.dsir@nic.in"	,
" s_pyjar@cneri.res.in"	,
"mandavekar.shriyash@iitgn.ac.in"	
    ];
    alert("Sending emails")
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
