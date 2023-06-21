import React from 'react'
import bg from '../images/bg.jpg'
import Category from './Category'

const Home = () => {
  return (
    <>
    <Category/>
    <div id="home">
        <div className="image">
            <img src={bg} alt="" />
        </div>
        <div className="content">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="#">Shop Now</a>
        </div>
    </div>
    </>
  )
}

export default Home