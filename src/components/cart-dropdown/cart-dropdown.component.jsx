import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { CartDropdownContainer } from './cart-dropdown.styles'
import { toggleCartHidden } from '../../redux/cart/cart.actions'



const CartDropdown = ({ cartItemProps, history, dispatch }) => {

    console.log(history)
    return(
        <CartDropdownContainer>
            <div className="cart-items">
                {
                    cartItemProps.length ? 
                    cartItemProps.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) : (
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}
            >GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = (state) => ({
    cartItemProps: state.cart.cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))