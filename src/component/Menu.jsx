import React from 'react'
import {NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <ul className="navbar-nav ml-auto mr-md-3 font-weight-bold">
            <li><NavLink className="nav-item nav-link theme-fourthly" to="/" aria-current="page" >Home</NavLink></li>
            <li><NavLink className="nav-item nav-link theme-fourthly" to="/about">About Us</NavLink></li>
            <li><NavLink className="nav-item nav-link theme-fourthly" to="/sevices">Services</NavLink></li>
            <li><NavLink className="nav-item nav-link theme-fourthly" to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink className="nav-item nav-link theme-fourthly" to="/contact">Contact Us</NavLink></li>
            <li><a className="nav-item nav-link theme-fourthly" href="https://swasthik-technology.vercel.app/resume/index.html">Resume</a></li>
        </ul>
    )
}

export default Menu