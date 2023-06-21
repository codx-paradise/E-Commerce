import React from 'react'

const Product = () => {
  return (
    <>
    <div className="product-header">
        <div className="image">
            <img src="" alt="" />
        </div>
        <button className='wishlist' type="button">*</button>
        <button className='share' type="button">*</button>
    </div>
    <div className="product-body">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <div className="rating">****</div>
        <a href="#">Offer</a>
        <div className="price">$500</div>
    </div>
    <div className="product-available">
        <div className="delivery-date">*</div>
        <div className="offer">Lorem, ipsum dolor.</div>
        <div className="return">Lorem, ipsum dolor.</div>
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
                <td>Fulll Screen</td>
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
        <div className="rating">* <span>Lorem, ipsum dolor.</span></div>
        <div className="comment">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
        <div className="comment-date">2 months</div>
    </div>
    <div className="cart">
        <button className='btn' type="button">Add Cart</button>
        <button className='btn' type="button">Buy Now</button>
    </div>
    </>
  )
}

export default Product