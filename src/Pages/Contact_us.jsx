import React from 'react';
import  SendIcon from '@mui/icons-material/Send';
import { Rating } from '@mui/material';

const Contact = () => {
  return (
    <>
    <div id="contact">
        <form action="" method="post">
          <h2>Contact Us</h2>
            <input type="text" placeholder='Name' autoComplete='true' />
            <input type="email" name="Email" placeholder='Email' id="" autoComplete='true' />
            <p>{<Rating/>}</p>
            <input type="text" placeholder='Message' autoComplete='true'/>
            <div className="btn-g">
              <a href="#" className="btn">Cancel</a>
            <button type="submit" className='btn'>{<SendIcon/>} Send </button> 
            </div>
        </form>
    </div>
    </>
  )
}

export default Contact;