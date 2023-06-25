import { Delete,ViewArray, ViewCarousel, ViewComfy } from '@mui/icons-material'
import React from 'react'

const Item = () => {
  return (
    <>
    <div className="cart-item">
        <div className="image">
            <img src="" alt="" />
        </div>
        <div className="process">
            <button type="button">+</button>
            <input type="text" disabled value="2" />
            <button type="button">-</button>
        </div>
        <div className="btn-group">
            <button className='btn' type="button">{<Delete/>}</button>
            <button className='btn' type="button">{<ViewComfy/>}</button>
        </div>
    </div>
    </>
  )
}

export default Item