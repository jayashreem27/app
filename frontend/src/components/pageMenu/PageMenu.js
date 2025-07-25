import React from 'react'
import "./pageMenu.scss"
import { NavLink } from 'react-router-dom'

const PageMenu=()=>{
    return(
        <div>
        <nav className='--bg-primary --p --mb'>
            <ul className='home-links'>
                <li>
                    <NavLink to='profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='wallet'>Wallet</NavLink>
                </li>
                <li>
                    <NavLink to='wishlist'>Wishlist</NavLink>
                </li>
            </ul>
        </nav>
        </div>

    )
}

export default PageMenu