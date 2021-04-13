import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'

import Logo from '../../assets/ClothingYa.png'

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img src={Logo} alt="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>

            <Link className="option" to="/signin">
                Sign In
            </Link>
        </div>

    </div>
)

export default Header