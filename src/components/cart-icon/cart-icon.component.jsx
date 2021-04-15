import React from 'react'

import { connect } from 'react-redux'

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartIcon = ({toggle}) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggle} />
        <span className="item-count">0</span>
    </div>
        
)

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)