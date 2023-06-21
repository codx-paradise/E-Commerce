import React from 'react'
import Item from '../components/Item'

const Cart = () => {
  return (
    <>
    <Item/>
    <Item/>
    <Item/>
    <div className="btn-group">
        <button className='btn' type="button">Pay Now</button>
    </div>
    </>
  )
}

export default Cart