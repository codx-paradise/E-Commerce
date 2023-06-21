import React from 'react'
import bg from '../images/bg.jpg'

const Home = () => {
  return (
    <>
    <div id="home">
        <div className="image">
            <img src={bg} alt="" />
        </div>
        <div className="content">
            <h1>hello</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="#">Shop Now</a>
        </div>
    </div>

    </>
  )
}

export default Home