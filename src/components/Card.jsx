import { Rating } from '@mui/material'
import React from 'react'

const Card = () => {
  return (
    <>
    <div className="card">
        <div className="image">
            <img src="" alt="" />
        </div>
        <div className="content">
            <h3>Lorem, ipsum dolor.</h3>
            <div className="price">$500</div>
            <div className="rating">5{<Rating readOnly="true" value={5}/>}</div>
        </div>
    </div>
    </>
  )
}

export default Card