import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <NavLink to='/' className='nav-link'>
            <h1 className='header-h'>PIXIE MIXIE</h1> 
        </NavLink>
       
    )
}

export default Header
