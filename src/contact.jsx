import React from 'react'

const contact = () => {
  return (
    <>
    <div id="contact">
        <form action="" method="post">
            <input type="text" name='name' placeholder='Enter Name' />
            <input type="email" name="email" id="" placeholder='Enter Email' />
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Submit" />
        </form>
    </div>
    </>
  )
}

export default contact