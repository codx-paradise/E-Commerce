import React from 'react';
import bg from '../images/bg.jpg';
import Card from '../components/Card'

const Home = () => {
  return (
    <>
    <div id="home">
        <div className="image">
            <img src={bg} alt="" />
        </div>
        <div className="content">
            <h1>500+</h1>
            <p>New Collections Available !</p>
            <p className='c-2'>10% Discount for New users</p>
        </div>
      </div>
      <div className="popular-products">
        <h3 className='heading'>Popular Brands</h3>
        <div className="container">
        <Card/>
        <Card/>
        <Card/>
        <a href="#"> view all</a>
        </div>
      </div>
    </>
  )
}

export default Home