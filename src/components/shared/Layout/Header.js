import React from 'react'
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <>
        <nav className="navbar"> 
            <div className='container-fluid'>
                <div className='navbar-brand h1'> 
                    <BiDonateBlood color='red' /> Blood Bank App
                </div>
            </div>

            <ul className="navbar-nav flex-row">
                <li className="nav-item mx-3">
                    <p className="nav-link">
                        <BiUserCircle/> Welcome{" "}
                    </p>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Header