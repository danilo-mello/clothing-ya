import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.styles.scss'

import Logo from '../../assets/ClothingYa.png'
import { auth } from '../../firebase/firebase.util'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} alt='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>

      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
            Sign Out
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      )}
      <CartIcon />
      {
        hidden ? null : <CartDropdown />
      }

    </div>
  </div>
)

const mapStateToProps = (state) => (
  {
    hidden: state.cart.hidden
  }
)

export default connect(mapStateToProps)(Header)