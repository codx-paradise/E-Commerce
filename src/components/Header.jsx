import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingBag, ShoppingBagOutlined, ShoppingBasketOutlined, ShoppingCart, ShoppingCartOutlined} from '@mui/icons-material';


function Header (){
    
  return (
    <>
    <div id="header">
        <div className="logo">Shoppy</div>
        <div className='profile-bar'>
            <span className="search">
            <span>{<SearchIcon/>}</span>
            <input type="search" placeholder='Search' name="" id="" />
            </span>
            <span className='shopbag'>{<ShoppingCartOutlined/>}</span>
            <button className="btn">Login</button>
        </div>
    </div>
    </>
  )
}

export default Header