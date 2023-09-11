import React, { useState } from 'react'
import './chatbox.css'
import {HelpCircle,X} from 'lucide-react'
const ChatboxLogo = () => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        const display = document.getElementsByClassName('chatbox-logo')[0].style.display
        if(display === 'none'){
            document.getElementsByClassName('chatbox-logo')[0].style.display = 'block';
        }
        else{
            document.getElementsByClassName('chatbox-logo')[0].style.display = 'none';
        }
      };  
      const openchatboxform = () => {
        document.getElementsByClassName('chatbox-logo')[0].style.display = 'none';
        document.getElementsByClassName('chatbox-form')[0].style.transform = 'translateX(-20px)';
    }
    
    const closechatboxform = () => {
        document.getElementsByClassName('chatbox-logo')[0].style.display = 'block';
        document.getElementsByClassName('chatbox-form')[0].style.transform = 'translateX(400px)';
    }
    
    const yesClick = () =>{
        const window1 = document.getElementsByClassName('window-1')[0];
        const window3 = document.getElementsByClassName('window-3')[0];
        window1.style.display = 'none';
        window3.style.display = 'block';
    }
    const noClick = () =>{
        const window1 = document.getElementsByClassName('window-1')[0];
        const window2 = document.getElementsByClassName('window-2')[0];
        window1.style.display = 'none';
        window2.style.display = 'block';
    }
    
  return (
    <div className='chatbox'>
        <div className='chatbox-logo' onClick={openchatboxform}>
            <HelpCircle className='chatbox-icon' />
        </div>
        <div className='chatbox-form'>
            <div className='chat'>Chat</div>
            <X className='close-button' onClick={closechatboxform}/>
            <div className='chat-screen'>
                <div className='chat-window window-1'>
                    <p className='chat-text'>Welcome!<br/>Did you find what you were looking for?</p>
                    <div className='yes-no-buttons'>
                        <div className='yes-but but' onClick={yesClick}>YES</div>
                        <div className='no-but but' onClick={noClick}>NO</div>
                    </div>
                </div>
                <div className='chat-window window-2'>
                    <p className='chat-text'>Are you looking about this sections?</p>
                    <ol type="1">
                        <li className='chat-box-chat-but'>Testing</li>
                        <li className='chat-box-chat-but'>Licensing</li>
                        <li className='chat-box-chat-but'>Training</li>
                        <li className='chat-box-chat-but'>Other</li>
                    </ol>
                </div>
                <div className='chat-window window-3'>
                    <p className='chat-text'>If you have any questions or query, contact us.</p>
                    <form action='https://docs.google.com/forms/d/e/1FAIpQLSfFJ2v78aYPAvS3cvJLLy8mqVkF5c1rphxPrwuezgT6QMmQfg/formResponse'>
                        <p className='form-name'>Name</p>
                            <input className='name-input' type="text" name='entry.1328098496'></input>
                        <p className='form-name'>Email</p>
                            <input className='name-input' type="email" name='entry.64733621'></input>
                        <p className='form-name'>Phone</p>
                            <input className='name-input' type="tel" name='entry.1221224977'></input>
                        <p className='form-name'>Related field</p>
                            <input className='name-input' type="text" name='entry.1723803182'></input>  
                        <p className='form-name'>Your query</p>  
                            <textarea className='query-input' rows="6" cols="26" name='entry.1592288433'></textarea>      
                        <button type='submit' className='form-submit-but' >Submit</button>    
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatboxLogo
