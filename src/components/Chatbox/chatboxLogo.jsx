import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './chatbox.css'
import { HelpCircle, X } from 'lucide-react'
const ChatboxLogo = () => {
  const Navigate = useNavigate();
  const openchatboxform = () => {
    document.getElementsByClassName('chatbox-logo')[0].style.display = 'none';
    if (window.innerWidth < 768) {
      document.getElementsByClassName('chatbox-form')[0].style.transform = 'translateX(1vh)';
    }
    else {
      document.getElementsByClassName('chatbox-form')[0].style.transform = 'translateX(-20px)';
    }
  }
  const handleTestingLink = () => {
    const element = document.getElementsByClassName('training')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/Industry');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('training')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const handleLicensingLink = () => {
    const element = document.getElementsByClassName('licensing')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/Industry');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('licensing')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const closechatboxform = () => {
    document.getElementsByClassName('chatbox-logo')[0].style.display = 'block';
    document.getElementsByClassName('chatbox-form')[0].style.transform = 'translateX(400px)';
    const window1 = document.getElementsByClassName('window-1')[0];
    const window3 = document.getElementsByClassName('window-3')[0];
    window1.style.display = 'block';
    window3.style.display = 'none';
  }

  const yesClick = () => {
    const window1 = document.getElementsByClassName('window-1')[0];
    const window3 = document.getElementsByClassName('window-3')[0];
    window1.style.display = 'none';
    window3.style.display = 'block';
  }
  const noClick = () => {
    const window1 = document.getElementsByClassName('window-1')[0];
    const window2 = document.getElementsByClassName('window-2')[0];
    window1.style.display = 'none';
    window2.style.display = 'block';
  }
  const otherClick = () => {
    const window2 = document.getElementsByClassName('window-2')[0];
    const window3 = document.getElementsByClassName('window-3')[0];
    window2.style.display = 'none';
    window3.style.display = 'block';
  }

  return (
    <div className='chatbox'>
      <div className='chatbox-logo' onClick={openchatboxform}>
        <p><span className = "connect-with" >Connect with</span> DSIR | CRTDH</p>
      </div>
      <div className='chatbox-form'>
        <div className='chat'>Contact</div>
        <X className='close-button' onClick={closechatboxform} />
        <div className='chat-screen'>
          <div className='chat-window window-1'>
            <p className='chat-text'>Welcome!<br />to DSIR - CRTDH Labs</p>
            <div className='yes-no-buttons'>
              <div className='yes-but but' onClick={yesClick}>Your Details & Requirements</div>
              {/* <div className='no-but but' onClick={noClick}>NO</div> */}
            </div>
          </div>
          <div className='chat-window window-2'>
            <p className='chat-text'>Are you looking about this sections?</p>
            <ol type="1">
              <li className='chat-box-chat-but'>Testing</li>
              <li onClick={handleLicensingLink} className='chat-box-chat-but'>Licensing</li>
              <li onClick={handleTestingLink} className='chat-box-chat-but'>Training</li>
              <li onClick={otherClick} className='chat-box-chat-but'>Other</li>
            </ol>
          </div>
          <div className='chat-window window-3'>
            <p className='chat-text'>If you have any questions or query, contact us.</p>
            <form action='https://docs.google.com/forms/d/e/1FAIpQLSe0mK4aFg78sEmrb0WwDq4tm6TZQgV0rLJdJJy4A-Y_bfx3zQ/formResponse'>
              <p className='form-name'>Name</p>
              <input className='name-input' type="text" name='entry.379228942'></input>
              <p className='form-name'>Email</p>
              <input className='name-input' type="email" name='entry.216861817'></input>
              <p className='form-name'>Phone</p>
              <input className='name-input' type="tel" name='entry.1868777862'></input>
              <p className='form-name'>Related Area(s)</p>
              <input className='name-input' type="text" name='entry.1748510637'></input>
              <p className='form-name'>Help expected</p>
              <textarea className='query-input' rows="6" cols="26" name='entry.916994720'></textarea>
              <button type='submit' className='form-submit-but' >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatboxLogo
