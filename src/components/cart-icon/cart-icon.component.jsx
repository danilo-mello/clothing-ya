import React from 'react'

import { connect } from 'react-redux'

import './cart-icon.styles.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartIcon = ({toggle, cartItemsProps}) => {

    const total = () => {
        let quantity = 0
        for (let i = 0; i < cartItemsProps.length; i++) {
            quantity += cartItemsProps[i].quantity
        }
        return quantity
    }


return(
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggle} />
        <span className="item-count">{total()}</span>
    </div>
        
)}

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => (
        {
            cartItemsProps: state.cart.cartItems
        }
    )

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)