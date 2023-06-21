import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingBag} from '@mui/icons-material';


function Header (){
    const menuBar=()=>{
        const m2 = document.querySelector(".menu-bar");
        m2.classList.toggle("active")
    }
  return (
    <>
    <div id="header">
        <div className="logo">
            <div className="menu" onClick={menuBar}>{<MenuIcon/>}</div>
            AK
        </div>
        <div>
        <span className="search">
            <span>{<SearchIcon/>}</span>
            <input type="search" placeholder='Search' name="" id="" />
        </span>
            <span>{<ShoppingBag/>}</span>
            </div>
    </div>
    <div className="menu-bar">
        <h4>Settings</h4>
        
        <div>
            <a href="#">Profile</a>
            <a href="#">Cart</a>
            <a href="#">Order</a>
            <a href="#">Whislist</a>
            <a href="#">Help</a>
            <a href="#">Settings</a>
        </div>
    </div>
    </>
  )
}

export default Header