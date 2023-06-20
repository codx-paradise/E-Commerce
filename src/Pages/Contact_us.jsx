import React from 'react';
import  SendIcon from '@mui/icons-material/Send';
import './style.css'

const Contact = () => {
  return (
    <>
    <div id="contact">
        <form action="" method="post">
          <h2>Contact Us</h2>
            <input type="text" placeholder='Name' autoComplete='true' />
            <input type="email" name="Email" placeholder='Email' id="" autoComplete='true' />
            <input type="tel" name="Tel" id="" placeholder='Phone' autoComplete='true' />
            <input type="text" placeholder='Message' autoComplete='true'/>
            <button type="submit">{<SendIcon/>} Send </button> 
        </form>
    </div>
    </>
  )
}

export default Contact;