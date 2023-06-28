import React from 'react'
import { AnimationRounded, ArrowBack, DateRange, DeliveryDining, LocalOffer } from '@mui/icons-material'
import { Rating } from '@mui/material'

const Product = () => {
  return (
    <>
    <a href='#' className="back-btn">{<ArrowBack/>}Back</a>
    <div id="product">
    <div className="product-header">
        <div className="image">
            <img src="" alt="" />
        </div>
    </div>
    <div className="product-body">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <div className="rating">{<Rating/>}</div>
        <a href="#">Offer</a>
        <div className="price">$500</div>
    </div>
    <div className="product-available">
        <div className="delivery-date">{<DateRange/>}</div>
        <div className="offer">{<LocalOffer/>} Lorem, ipsum dolor.</div>
        <div className="return">{<DeliveryDining/>} Lorem, ipsum dolor.</div>
    </div>
    <div className="product-detail">
        <table>
            <caption>Product Details</caption>
            <tr>
                <th>Detail 1</th>
            </tr>
            <tr>
                <td>Display</td>
                <td>Fulll Screen</td>
            </tr>
            <tr>
                <th>Detail 2</th>
            </tr>
            <tr>
                <td>Display</td>
                <td>Full Screen</td>
            </tr>
        </table>
    </div>
    <div className="product-overview">
        <h3>Ratings & Reviews</h3>
        <div className="rating">* <span>12345</span></div>
        <div className="review review-1">
            <p>2.6</p>
            <p>Quality</p>
        </div>
        <div className="review review-2">
            <p>2.6</p>
            <p>Value</p>
        </div>
        <div className="review review-3">
            <p>2.6</p>
            <p>Life</p>
        </div>
    </div>
    <div className="product-comments">
        <div className="rating">4 {<Rating/>} <span>Lorem, ipsum dolor.</span></div>
        <div className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
        <div className="comment-date">2 months</div>
    </div>
    <div className="cart">
        <button className='btn' type="button">Add Cart</button>
        <button className='btn' type="button">Buy Now</button>
    </div>
    </div>
    </>
  )
}

export default Product