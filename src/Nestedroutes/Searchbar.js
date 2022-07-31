import React from 'react'
import { Link, Outlet  } from 'react-router-dom';
import search from "../Nestedroutes/search.css";
import {Button, Navbar, Nav} from 'react-bootstrap';
import {FaHotel, FaCcVisa} from 'react-icons/fa';
import { IoIosAirplane } from "react-icons/io";
const Searchbar = () => {
  return (
    <div>

<div className='container'>

  <div className="row"> 
  <div className='col'>

  <Nav className="links-search">
    <div className='col-xl-3 col-xl-3  col-2'>
    <Link to="/" className='search-page vis' active defaultActiveKey="/">visa </Link>
    </div>

    <div className='col-xl-3 col-xl-3 col-2 '>
    <Link to="/flights" className='search-page flights'>flights </Link>
      </div>
      <div className='col-xl-3 col-xl-3 col-2 '>
      
<Link to="/hotels" className='search-page hotels'>hotels </Link>
      </div>
      <div className='col-xl-3 col-xl-3  col-2'>
      <Link to="Packages" className='search-page pakages'>Packages </Link>
      </div>




</Nav>

<Outlet/>
  </div>
</div>
</div>


    </div>
  )
}

export default Searchbar;