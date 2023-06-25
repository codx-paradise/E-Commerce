import { AddShoppingCart } from '@mui/icons-material'
import React from 'react'

const Card = () => {
  return (
    <>
    <div className="card">
        <div className="card-header">
        <div className="image">
            <img src="" alt="" />
        </div>
        <button className='wishlist' type="button">*</button>
        </div>
        <div className="content">
            <h3>Lorem, ipsum dolor.</h3>
            <div className="price">$500</div>
            <button type="button" className='btn'>{<AddShoppingCart/>} Add Cart</button>
        </div>
    </div>
    </>
  )
}

export default Card