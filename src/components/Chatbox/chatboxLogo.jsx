import React from 'react'
import './chatbox.css'
import {HelpCircle} from 'lucide-react'
const ChatboxLogo = () => {
  return (
    <div className='chatbox'>
        <div className='chatbox-logo'>
            <HelpCircle className='chatbox-icon' />
        </div>
        <div className='chatbox-form'>
            <div className='chat'>Chat</div>
            <div className='chat-screen'>
                <div className='chat-window window-1'>
                    <p className='chat-text'>Welcome!<br/>Did you find what you were looking for?</p>
                    <div className='yes-no-buttons'>
                        <div className='yes-but but'>YES</div>
                        <div className='no-but but'>NO</div>
                    </div>
                </div>
                <div className='chat-window window-2'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatboxLogo
