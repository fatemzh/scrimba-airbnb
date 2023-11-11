import React from 'react';
import logo from '../images/Airbnb_Logo_Bélo.svg.png';

export default function NavBar(){
  return(
    <nav className='nav-bar'>
      <img src={logo} alt="" className="logo"/>
    </nav>
  )
}