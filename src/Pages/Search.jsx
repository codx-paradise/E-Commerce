import React from 'react'
import Card from '../components/Card'
import { ArrowBack } from '@mui/icons-material'

const Search = () => {
  return (
    <>
    <a href='#' className="back-btn">{<ArrowBack/>}Back</a>
    <div className="search-container">
    <div className="filter">
        <h3>Filters</h3>
        <div className="category">
           <h5>Categories</h5>
           <div className="input-group">
          <input type="checkbox" name="" id="ch1" />
          <label htmlFor="ch1">Mobiles</label>
          </div>
          <div className="input-group">
          <input type="checkbox" name="" id="ch2" />
          <label htmlFor="ch2">Laptops</label>
          </div>
          <div className="input-group">
          <input type="checkbox" name="" id="ch3" />
          <label htmlFor="ch3">Electronics</label>
          </div>
          </div>
          
          <div className="filter-review">
           <h5>Rating</h5>
           <div className="input-group">
          <input type="checkbox" name="" id="ch4" />
          <label htmlFor="ch4">Highest</label>
          </div>
          <div className="input-group">
          <input type="checkbox" name="" id="ch5" />
          <label htmlFor="ch5">Lowest</label>
          </div>
          </div>
          
          <div className="filter-price">
           <h5>Sort</h5>
           <div className="input-group">
          <input type="radio" name="f-price" id="rd1" />
          <label htmlFor="rd1">Popular</label>
          </div>
          <div className="input-group">
          <input type="radio" name="f-price" id="rd2" />
          <label htmlFor="rd2">Low - High</label>
          </div>
          <div className="input-group">
          <input type="radio" name="f-price" id="rd3" />
          <label htmlFor="rd3">High - Low</label>
          </div>
          </div>

    </div>
    <div className="Search-result">
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
    </>
  )
}

export default Search