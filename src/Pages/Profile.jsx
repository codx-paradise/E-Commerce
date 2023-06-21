import React from 'react'

const Profile = () => {
  return (
    <>
    <div className="profile">
        <div className="image">
            <img src="" alt="" />
        </div>
        <form action="" method="post">
        <input type="text" placeholder='Name' autoComplete='true' />
        <input type="email" name="" id="" placeholder='Email' autoComplete='true' />
        <input type="text" placeholder='city' autoComplete='true' />
        <input type="text" placeholder='Pin' autoComplete='true' />
        <div className="btn-group">
            <button className='btn' type="button">Cancel</button>
            <button className='btn' type="button">Save</button>
        </div>
        </form>
        <div className="btn-group">
            <button className='btn' type="button">Logout</button>
            <button className='btn' type="button">Delete Account</button>
        </div>
    </div>
    </>
  )
}

export default Profile