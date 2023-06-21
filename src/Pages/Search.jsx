import React from 'react'
import Card from '../components/Card'

const Search = () => {
  return (
    <>
    <div className="filter">
        <button type="button">Sort</button>
        <button type="button">Category</button>
        <button type="button">Price</button>
        <button type="button">Filter</button>
    </div>
    <div className="Search-result">
        <Card/>
        <Card/>
        <Card/>
    </div>
    </>
  )
}

export default Search