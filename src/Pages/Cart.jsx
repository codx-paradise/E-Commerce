import React from 'react'
import Item from '../components/Item'

const Cart = () => {
  return (
    <>
    <div className="cart">
    <Item/>
    <Item/>
    <Item/>
    <div className="btn-group-2">
        <div className="price">$500</div>
        <button className='btn' type="button">Pay Now</button>
    </div>
    </div>
    </>
  )
}

export default Cart